"use server";

import { IObecOrpPsc, ObecOrpPsc } from "../models/ObecOrpPscModel";
import dbConnect from "./dbConnect";
import { serialize } from "./helpers";

export const AutocompleteObec = async (nazev: string) => {
  if (nazev.length <= 1) return [];
  await dbConnect();
  const obce = serialize(
    (await ObecOrpPsc.find({
      obecnazev: { $regex: nazev, $options: "i" },
    }).limit(10)) as IObecOrpPsc[],
  );
  return obce;
};

export async function handleZadatelSubmit(data: any) {
  console.log("Data zpracovaná přímo na serveru:", data);
}
