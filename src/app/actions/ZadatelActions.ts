"use server";
import { Zadatel } from "@/models/ZadatelModel";
import { IZadatel, zZadatelBase } from "@/types/ZadatelType";
import { z } from "zod";
import dbConnect from "../lib/dbConnect";
import { serializeJSON } from "../lib/lib";

export type TActionState<T = unknown> = {
  success: boolean;
  message?: string;
  errors?: Record<string, string[]>; // Chyby pro jednotlivá pole (např. ze Zodu)
  error?: string;
  data?: T;
};
export async function getZadatel<T>(_id: string): Promise<TActionState> {
  try {
    await dbConnect();
    const res = await Zadatel.findOne({ _id });
    return serializeJSON(res);
  } catch (error) {
    const err = error as Error;
    return { success: false, error: err.message };
  }
}
export const updateZadatel = async (
  newDoc: IZadatel,
): Promise<TActionState> => {
  const kompatabilita = () => {
    const poleVlastnene = newDoc.skupinyvlastnene ?? [];
    const vlastnene = Object.fromEntries(
      poleVlastnene.map((klic) => [klic, true]),
    );
    newDoc.vlastneneSkupiny = vlastnene;

    const poleZadane = newDoc.skupinyzadane ?? [];
    const zadane = Object.fromEntries(poleZadane.map((klic) => [klic, true]));
    newDoc.zadaneSkupiny = zadane;
  };
  kompatabilita();
  const parsed = zZadatelBase.safeParse(newDoc);
  newDoc.vlozeno = new Date();

  if (!parsed.success)
    return {
      success: false,
      errors: z.flattenError(parsed.error).fieldErrors,
    };

  try {
    await dbConnect();
    const res = await Zadatel.findOneAndUpdate({ _id: newDoc?._id }, newDoc, {
      upsert: true,
      returnDocument: "after",
    }).lean();
    return { success: true, data: serializeJSON(res) };
  } catch (error) {
    const err = error as Error;
    return { success: false, error: err.message };
  }
};
