import superjson from "superjson";

// Serializace dat na serveru do JSON stringu + metadat
export function serializeData<T>(data: T): string {
  return superjson.stringify(data);
}

// Deserializace zpět na původní typy (Date, BigInt, Map, Set) na klientovi
export function deserializeData<T>(serialized: string): T {
  return superjson.parse<T>(serialized);
}
