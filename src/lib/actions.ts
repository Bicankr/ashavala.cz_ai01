"use server";

import { IObecOrpPsc, ObecOrpPsc } from "../app/models/ObecOrpPscModel";
import dbConnect from "./dbConnect";
import { serializeData } from "./superjson";

export const AutocompleteObec = async (nazev: string) => {
  if (nazev.length <= 1) return [];
  await dbConnect();
  const obce = serializeData(
    (await ObecOrpPsc.find({
      obecnazev: { $regex: nazev, $options: "i" },
    }).limit(10)) as IObecOrpPsc[],
  );
  return obce;
};

export async function handleZadatelSubmit(data: any) {
  console.log("Data zpracovaná přímo na serveru:", data);
}
