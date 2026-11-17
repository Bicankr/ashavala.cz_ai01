import { z } from "zod";

export const SkupinyVycet = [
  "AM",
  "A1",
  "A2",
  "A",
  "B1",
  "B",
  "B96",
  "B+E",
  "C1",
  "C1+E",
  "C",
  "C+E",
  "D1",
  "D1+E",
  "D",
  "D+E",
  "T",
];

export const zSkupinyVycet = z.enum(SkupinyVycet);
export type TSkupinyVycet = z.infer<typeof zSkupinyVycet>;

export const zSkupinaVlastnosti = z.object({
  nazev: zSkupinyVycet,
  zakladniskupina: z.boolean(),
  vlastneneSkupiny: z.array(zSkupinyVycet),
  podrazeneSkupiny: z.array(zSkupinyVycet),
  nadrazeneSkupiny: z.array(zSkupinyVycet),
  rozsireniNaSkupiny: z.array(zSkupinyVycet),
  popis: z.string().optional(),
  checked: z.boolean().optional(),
  disabled: z.boolean().optional(),
});

export type TSkupinaVlastnosti = z.infer<typeof zSkupinaVlastnosti>;
