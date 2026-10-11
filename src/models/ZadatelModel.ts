import { IPlatbaP, IPoznamka, IZadatel } from "@/types/Zadatel";
import mongoose, { Model, PaginateModel, Schema, Types } from "mongoose";
import paginate from "mongoose-paginate-v2";

export const platbaPSchema = new Schema<IPlatbaP & mongoose.Document>({
  castka: Number,
  datum: Date,
  zpusobplatby: String,
  bankovniucet: String,
});

export const poznamkaSchema = new Schema<IPoznamka & mongoose.Document>({
  datum: Date,
  text: String,
});

export const ZadatelSchema = new Schema<IZadatel & mongoose.Document>({
  _kurz: { type: Types.ObjectId, ref: "Kurz" },
  _evidencnikniha: { type: Types.ObjectId, ref: "EvidencniKniha" },
  platby: [Object],
  platbyP: [platbaPSchema],
  // poznamky: [poznamkaSchema],
  vlastnimro: Boolean,
  email: String,
  vlastneneSkupiny: Object,
  zadaneSkupiny: Object,
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

type T = IZadatel & mongoose.Document;

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
