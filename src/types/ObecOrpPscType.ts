import { zObjectId } from "@/app/lib/types";
import z from "zod";

export const zObecOrpPscBase = z.object({
  obecnazev: z.string(),
  orpnazev: z.string(),
  okresnazev: z.string(),
  krajnazev: z.string(),
  oblastnazev: z.string(),
  psc: z.string(),
});

export const zObecOrpPsc = zObecOrpPscBase.extend({
  _id: zObjectId,
});

export type IObecOrpPscBase = z.infer<typeof zObecOrpPsc>;

export type IObecOrpPsc = z.infer<typeof zObecOrpPsc>;
