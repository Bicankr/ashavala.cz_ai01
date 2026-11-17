import { zSkupinyVycet } from "@/types/PlatbaType";
import { IPoznamka, IZadatel, TPlatba } from "@/types/ZadatelType";
import mongoose, { Model, PaginateModel, Schema, Types } from "mongoose";
import paginate from "mongoose-paginate-v2";

export const platbaSchema = new Schema<TPlatba & mongoose.Document>({
  castka: Number,
  datum: Date,
  zpusobplatby: String,
  bankovniucet: String,
});

export const poznamkaSchema = new Schema<IPoznamka & mongoose.Document>({
  datum: Date,
  text: String,
});

export const ZadatelSchema = new Schema<IZadatel>({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  _kurz: { type: Types.ObjectId, ref: "Kurz" },
  _evidencnikniha: { type: Types.ObjectId, ref: "EvidencniKniha" },
  // poznamky: [poznamkaSchema],
  platbyP: [platbaSchema],
  vlastnimro: Boolean,
  email: String,
  vlastneneSkupiny: Array,
  zadaneSkupiny: Object,
  skupinyzadane: {
    type: [String],
    enum: zSkupinyVycet.options,
    default: [],
  },
  skupinyvlastnene: {
    type: [String],
    enum: zSkupinyVycet.options,
    default: [],
  },
  cislorp: String,
  jmeno: String,
  prijmeni: String,
  titul: String,
  datumnarozeni: String,
  mistonarozeni: String,
  rodnecislo: String,
  statniobcanstvi: String,
  dokladtotoznosti: String,
  telefon: String,
  ulice: String,
  obec: String,
  okres: String,
  smerovacicislo: String,
  obecniuradrp: String,
  datumzahajeni: Date,
  typsluzby: String,
  skupina: String,
  skupiny: [String],
  nkuucast: Boolean,
  datumpodanizadosti: Date,
  datumukonceni: Date,
  portal: Boolean,
  vycvikok: Boolean,
  poznamka: String,
  vlozeno: Date,
  mails: [Object],
  typvycviku: String,
  // zkousky: [Object],
  skolne: Number,
  kurz: String,
  // terminprvnizkousky: Date,
  etestykomplet: Boolean,
  jizdykomplet: Boolean,
  skupinykomplet: Object,
  knihajizd: Object,
  uportal: Object,
  prihlaskydetail: Object,
  prihlaskaskupiny: Object,
  konecnyterminzkousek: Object,
  autoskoly_id: Schema.Types.ObjectId,
  config: Object,
  zadatel: Boolean,
  admin: Boolean,
  searchText: { type: String, index: true },
  maxpocetjizdtydne: Number,
  ukoncenyzadatel: Boolean,
  autoskolaNazev: String,
  kurzNazev: String,
  archiv: { type: Boolean, default: false },
  kos: { type: Boolean, default: false },
  heslo: String,
  passwordHash: String,
});

ZadatelSchema.plugin(paginate);

type T = IZadatel;

export const ZadatelPagi: PaginateModel<T> =
  (mongoose.models?.ZadatelPagi as PaginateModel<T>) ||
  mongoose.model<T, PaginateModel<T>>(
    "ZadatelPagi",
    ZadatelSchema,
    "prihlasky",
  );

export const Zadatel: Model<T> =
  (mongoose.models?.Zadatel as Model<T>) ||
  mongoose.model<IZadatel>("Zadatel", ZadatelSchema, "prihlasky");
