import { zObjectId } from "@/app/lib/types";
import z from "zod";
import { zSkupinyVycet } from "./PlatbaType";

export const zZahajeniKurzuBase = z.object({
  _id: zObjectId,
  skupina: zSkupinyVycet,
  odpoved: z.string().optional(),
  odpovedHtml: z.string().optional(),
  potvrzeni: z.string().optional(),
  aktivni: z.boolean().optional(),
});
export type IZahajeniKurzuTerminyBase = z.infer<typeof zZahajeniKurzuBase>;

export const zZahajeniKurzu = zZahajeniKurzuBase.extend({
  _id: zObjectId,
});
export type IZahajeniKurzu = z.infer<typeof zZahajeniKurzu>;
