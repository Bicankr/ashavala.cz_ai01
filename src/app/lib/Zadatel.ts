"use server";

import { IZadatel } from "@/types/Zadatel";
import { now } from "mongoose";
import dbConnect from "../lib/dbConnect";
import { Zadatel } from "../models/ZadatelModel";

export const createZadatel = async (values: Partial<IZadatel>) => {
  await dbConnect();
  values.vlozeno = now();
  const newZadatel = (await Zadatel.create(values)) as IZadatel;
  return JSON.parse(JSON.stringify(newZadatel._id));
};
