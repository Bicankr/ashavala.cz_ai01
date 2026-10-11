import { zObjectId } from "@/lib/types";
import z from "zod";

export type TTypSluzby = "kondicnijizdy" | "vycvik" | "prezkouseni" | undefined;
export const ZTypSluzby = z.enum([
  "kondicnijizdy",
  "vycvik",
  "prezkouseni",
  "undefined",
]);

export const RolesDefinition = [
  "Admin",
  "Editor",
  "Žadatel",
  "Učitel",
  "Superuživatel",
] as const;

export type TRole = (typeof RolesDefinition)[number];
export interface IPoznamka {
  _id: string;
  datum: Date;
  text: string;
}

export const ZPoznamka = z.object({
  _id: zObjectId,
  datum: z.iso.date().optional(),
  text: z.string().optional(),
});

export interface ISkupiny {
  [keys: string]: boolean;
}

export interface IPlatba {
  id?: string;
  castka?: number;
  datum?: Date;
  zpusobplatby?: "Hotově" | "Převodem";
  bankovniucet?: string;
}

export const zPlatba = z.object({
  _id: zObjectId,
  castka: z.number().optional(),
  datum: z.iso.date().optional(),
  zpusobplatby: z.enum(["Hotově", "Převodem"]).optional(),
  bankovniucet: z.string().optional(),
});

export type TZpusobPlatby = "Hotově" | "Převodem";
export const zPlatbaP = z.object({
  _id: zObjectId,
  castka: z.number().optional(),
  datum: z.iso.date().optional(),
  zpusobplatby: z.enum(["Hotově", "Převodem"]).optional(),
  bankovniucet: z.string().optional(),
});

export const zMail = z.object({
  _id: zObjectId,
  casodeslani: z.any().optional(),
  subject: z.string().optional(),
  text: z.string().optional(),
});

export const zZadatel = z.object({
  jmeno: z
    .string()
    .min(2, "Zadejte alespoň 2 znaky")
    .meta({ title: "Jméno", order: 1 }),
  prijmeni: z
    .string()
    .min(2, "Zadejte alespoň 2 znaky")
    .meta({ title: "Příjmení", order: 2 }),
  email: z.email("Zadejte platný e-mail").meta({ title: "E-mail", order: 3 }),
  datumnarozeni: z.iso.date().meta({ title: "Datum narození", order: 4 }),
  mistonarozeni: z
    .string()
    .min(2, "Zadejte alespoň 2 znaky")
    .meta({ title: "Místo narození", order: 5 }),
  rodnecislo: z.string().optional().meta({ title: "Rodné číslo", order: 6 }),
  ulice: z
    .string()
    .min(2, "Zadejte alespoň 2 znaky")
    .meta({ title: "Ulice", order: 7 }),
  obec: z
    .string()
    .min(2, "Zadejte alespoň 2 znaky")
    .meta({ title: "Obec", order: 8 }),
  smerovacicislo: z
    .string()
    .regex(/^\d{5}$/, "Musí obsahovat přesně 5 číslic")
    .meta({
      title: "Směrovací číslo",
      order: 9,
    }),

  _id: zObjectId,
  _kurz: zObjectId,
  _evidencnikniha: zObjectId,
  platby: z.array(zPlatba).optional(),
  platbyP: z.array(zPlatbaP).optional(),
  poznamky: z.array(ZPoznamka).optional(),

  vlastnimro: z.boolean().optional().optional(),
  vlastneneSkupiny: z.object().optional(),
  zadaneSkupiny: z.object().optional(),
  cislorp: z.string().optional(),

  titul: z.string().optional().optional(),

  statniobcanstvi: z.string().optional(),
  dokladtotoznosti: z.string().optional(),
  telefon: z.string().optional(),
  okres: z.string().optional(),
  obecniuradrp: z.string().optional(),
  datumzahajeni: z.any().optional(),
  evidencnicislo: z.number().optional(),
  typsluzby: z
    .union([
      z.literal("kondicnijizdy").optional(),
      z.literal("vycvik").optional(),
      z.literal("prezkouseni").optional(),
    ])
    .optional()
    .optional(),
  TypSluzbyNazev: z.string().optional(),
  skupina: z.string().optional().optional(),
  skupiny: z.array(z.string()).optional(),
  nkuucast: z.boolean().optional(),
  datumpodanizadosti: z.any().optional(),
  datumukonceni: z.any().optional(),
  portal: z.boolean().optional().optional(),
  maxpocetjizdtydne: z.number().optional().optional(),
  heslo: z.string().optional().optional(),
  passwordHash: z.string().optional().optional(),
  protokol: z.string().optional().optional(),
  zdravotniposudek: z.boolean().optional().optional(),
  ukoncenyzadatel: z.boolean().optional().optional(),
  archiv: z.boolean().optional(),

  poznamka: z.string().optional(),
  vlozeno: z.any().optional().optional(),
  mails: z.array(zMail).optional(),
  skolne: z.number().optional().optional(),
  typvycviku: z.string().optional(),
  kos: z.boolean().optional(),
  kurzNazev: z.string().optional().optional(),
  kurz: z.string().optional(),
  roles: z.array(z.string()).optional(),
  vycvikok: z.boolean().optional(),
  terminprvnizkousky: z.iso.date().optional(),
  etestykomplet: z.boolean().optional(),
  jizdykomplet: z.boolean().optional(),
  skupinykomplet: z.boolean().optional(),
  knihajizd: z.boolean().optional(),
  naplanovaneJizdy: z.boolean().optional(),
  prihlaskaZkousky: z.boolean().optional(),
  uportal: z.boolean().optional(),
  prihlaskydetail: z.boolean().optional(),
  prihlaskaskupiny: z.boolean().optional(),
  konecnyterminzkousek: z.boolean().optional(),
  autoskoly_id: z.string().optional(),
  etest: z.boolean().optional(),
  config: z.object({}).optional().optional(),
  zadatel: z.boolean().optional().optional(),
  admin: z.boolean().optional().optional(),
  autoskolaNazev: z.string().optional(),
  searchText: z.string().optional(),
});

export type IZadatel = z.infer<typeof zZadatel>;
