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
