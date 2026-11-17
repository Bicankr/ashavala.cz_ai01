"use server";
import { Zadatel } from "@/models/ZadatelModel";
import { IZadatel } from "@/types/ZadatelType";
import { now } from "mongoose";
import dbConnect from "../lib/dbConnect";
export const createZadatel = async (values: Partial<IZadatel>) => {
  await dbConnect();
  values.vlozeno = now();
  const newZadatel = (await Zadatel.create(values)) as IZadatel;
  return JSON.parse(JSON.stringify(newZadatel._id));
};
