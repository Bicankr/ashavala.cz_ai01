import { zObjectId } from "@/app/lib/types";
import z from "zod";
import { zSkupinyVycet } from "./Skupiny";

export const zZahajeniKurzuTerminy = z.object({
  _id: zObjectId,
  skupina: zSkupinyVycet,
  datum: z.iso.date(),
});

export type IZahajeniKurzuTerminy = z.infer<typeof zZahajeniKurzuTerminy>;
