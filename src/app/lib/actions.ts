"use server";

import dayjs from "dayjs";
import { KurzyZahajeni } from "../models/KurzZahajeniModel";
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

export const getKurzyZahajeni = async () => {
  await dbConnect();
  const kz = await KurzyZahajeni.find({
    datumzahajeni: { $gte: dayjs().toDate() },
  }).lean();
  return JSON.parse(JSON.stringify(kz));
};
