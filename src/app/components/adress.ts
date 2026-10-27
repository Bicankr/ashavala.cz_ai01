"use server";

export type AddressSuggestion = {
  text: string;
  magicKey: string;
};

export async function suggestAddresses(
  query: string,
): Promise<AddressSuggestion[]> {
  if (typeof query !== "string") return [];

  const text = query.trim();
  if (text.length < 3 || text.length > 200) return [];

  const url = new URL(
    "https://ags.cuzk.gov.cz/arcgis/rest/services/RUIAN/" +
      "MapServer/exts/GeocodeSOE/tables/1/suggest",
  );

  url.searchParams.set("text", text);
  url.searchParams.set("maxSuggestions", "8");
  url.searchParams.set("f", "json");

  const response = await fetch(url, {
    cache: "no-store",
    signal: AbortSignal.timeout(5000),
  });

  if (!response.ok) throw new Error("RÚIAN není dostupný");

  const data = await response.json();

  if (data.error) throw new Error("Vyhledávání adres selhalo");

  return (data.suggestions ?? []).map((item: AddressSuggestion) => ({
    text: item.text,
    magicKey: item.magicKey,
  }));
}

const BASE = "https://ags.cuzk.gov.cz/arcgis/rest/services/RUIAN/MapServer";

export type TAddressDetail = {
  kodAdresnihoMista: number;
  obec: string;
  kodObce: number;
  ulice: string | null;
  cisloDomovni: number | null;
  cisloOrientacni: number | null;
  cisloOrientacniPismeno: string | null;
  psc: string | null;
};

type Address = {
  kod: number;
  ulice: number | null;
  stavebniobjekt: number;
  cislodomovni: number | null;
  cisloorientacni: number | null;
  cisloorientacnipismeno: string | null;
  psc: number | null;
};

// Interní helper, není exportovanou Server Action.
async function queryOne<T>(
  layer: number,
  field: "objectid" | "kod",
  id: number,
  fields: string,
): Promise<T> {
  if (!Number.isSafeInteger(id) || id <= 0) {
    throw new Error("Neplatný identifikátor");
  }

  const url = new URL(`${BASE}/${layer}/query`);
  url.searchParams.set("where", `${field} = ${id}`);
  url.searchParams.set("outFields", fields);
  url.searchParams.set("returnGeometry", "false");
  url.searchParams.set("f", "json");

  const response = await fetch(url, {
    cache: "no-store",
    signal: AbortSignal.timeout(5000),
  });

  if (!response.ok) throw new Error("RÚIAN není dostupný");

  const data = (await response.json()) as {
    error?: { message: string };
    features?: { attributes: T }[];
  };

  if (data.error) throw new Error("Dotaz na RÚIAN selhal");

  const record = data.features?.[0]?.attributes;
  if (!record) throw new Error("Záznam nebyl nalezen");

  return record;
}

export async function getAddressDetail(
  magicKey: string,
): Promise<TAddressDetail> {
  // Pro návrhy z tables/1/suggest očekáváme pouze číselné ID.
  if (typeof magicKey !== "string" || !/^\d{1,10}$/.test(magicKey)) {
    throw new Error("Neplatný klíč adresy");
  }

  const address = await queryOne<Address>(
    1,
    "objectid",
    Number(magicKey),
    "kod,ulice,stavebniobjekt,cislodomovni," +
      "cisloorientacni,cisloorientacnipismeno,psc",
  );

  let street: string | null = null;
  let municipalityCode: number;

  if (address.ulice != null) {
    const record = await queryOne<{
      nazev: string;
      obec: number;
    }>(4, "kod", address.ulice, "nazev,obec");

    street = record.nazev;
    municipalityCode = record.obec;
  } else {
    // Adresa bez ulice: stavební objekt → část obce → obec.
    const building = await queryOne<{ castobce: number }>(
      3,
      "kod",
      address.stavebniobjekt,
      "castobce",
    );

    const municipalityPart = await queryOne<{ obec: number }>(
      11,
      "kod",
      building.castobce,
      "obec",
    );

    municipalityCode = municipalityPart.obec;
  }

  const municipality = await queryOne<{ nazev: string }>(
    12,
    "kod",
    municipalityCode,
    "nazev",
  );

  return {
    kodAdresnihoMista: address.kod,
    obec: municipality.nazev,
    kodObce: municipalityCode,
    ulice: street,
    cisloDomovni: address.cislodomovni,
    cisloOrientacni: address.cisloorientacni,
    cisloOrientacniPismeno: address.cisloorientacnipismeno,
    psc: address.psc == null ? null : String(address.psc).padStart(5, "0"),
  };
}
