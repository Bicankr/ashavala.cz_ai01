"use server";

import { serializeJSON } from "@/lib/lib";
import { ObecOrpPsc } from "@/models/ObecOrpPscModel";
import { IObecOrpPsc } from "@/types/ObecOrpPscType";
import dbConnect from "./dbConnect";

export const AutocompleteObec = async (nazev: string) => {
  if (nazev.length <= 1) return [];
  await dbConnect();
  const obce = serializeJSON(
    (await ObecOrpPsc.find({
      obecnazev: { $regex: nazev, $options: "i" },
    }).limit(10)) as IObecOrpPsc[],
  );
  return obce;
};

export async function handleZadatelSubmit(data: any) {
  console.log("Data zpracovaná přímo na serveru:", data);
}
