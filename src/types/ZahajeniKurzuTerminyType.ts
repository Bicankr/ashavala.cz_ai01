import z from "zod";
import { zSkupinyVycet } from "./Skupiny";

export const zZahajeniKurzuTerminy = z.object({
  skupina: zSkupinyVycet,
  datum: z.iso
    .date({
      error: "Zadej platné datum ve formátu DD-MM-YYYY",
    })
    .transform((datum) => new Date(datum))
    .meta({
      label: "Datum zahájení kurzu",
    })
    .optional(),
});

export type IZahajeniKurzuTerminy = z.infer<typeof zZahajeniKurzuTerminy>;
