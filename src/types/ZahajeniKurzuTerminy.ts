import z from "zod";
import { zSkupinyVycet } from "./Skupiny";

export const zZahajeniKurzuTerminy = z.object({
  skupina: zSkupinyVycet,
  datum: z.iso.date(),
});

export type IZahajeniKurzuTerminy = z.infer<typeof zZahajeniKurzuTerminy>;
