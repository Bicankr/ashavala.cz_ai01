"use server";

import { serializeData } from "@/lib/superjson";
import { IZadatel } from "@/types/ZadateTypel";
import { now } from "mongoose";
import dbConnect from "../lib/dbConnect";
import { Zadatel } from "../models/ZadatelModel";

export const createZadatel = async (values: Partial<IZadatel>) => {
  await dbConnect();
  values.vlozeno = now();
  const newZadatel = (await Zadatel.create(values)) as IZadatel;
  return serializeData(JSON.stringify(newZadatel._id));
};
