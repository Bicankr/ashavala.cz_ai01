import z from "zod";

export const objectIdRegex = /^[0-9a-fA-F]{24}$/;

export const zObjectId = z
  .string()
  .regex(objectIdRegex, "Neplatný formát ID")
  .or(z.object())
  .optional();
