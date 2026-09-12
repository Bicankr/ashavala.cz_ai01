import mongoose, { Model, PaginateModel, Schema, Types } from "mongoose";
import paginate from "mongoose-paginate-v2";
import { TCollection } from "./Types";

export interface IAutoskola extends mongoose.Document {
  _id: Types.ObjectId;
  nazev?: string;
  popis?: string;
  ulice?: string;
  obec?: string;
  psc?: string;
  bankovniucet?: string;
  ic?: string;
  dic?: string;
  razitkopodpis?: string;
  razitko?: string;
  registracnicislo?: { type: string; default: "" };
  searchString?: string;
  kos: boolean;
  archiv: boolean;
}

export const AutoskolaSchema = new Schema<IAutoskola>(
  {
    _id: Schema.Types.ObjectId,
    nazev: String,
    popis: String,
    ulice: String,
    obec: String,
    psc: String,
    bankovniucet: String,
    ic: String,
    dic: String,
    razitkopodpis: String,
    razitko: String,
    registracnicislo: String,
    searchString: String,
    kos: { type: Boolean, default: false },
    archiv: { type: Boolean, default: false },
  },
  { collection: "autoskoly" as TCollection }
);

AutoskolaSchema.plugin(paginate);

type T = IAutoskola;
export const AutoskolaPagi: PaginateModel<T> =
  (mongoose.models?.AutoskolaPagi as PaginateModel<T>) ||
  mongoose.model<T, PaginateModel<T>>(
    "AutoskolaPagi",
    AutoskolaSchema,
    "autoskoly"
  );

export const Autoskola: Model<T> =
  (mongoose.models?.Autoskola as Model<T>) ||
  mongoose.model<T>("Autoskola", AutoskolaSchema, "autoskoly");
