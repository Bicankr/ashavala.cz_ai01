import mongoose, { Model, PaginateModel, Schema, Types } from "mongoose";
import paginate from "mongoose-paginate-v2";

export interface IVozidlo extends mongoose.Document {
  _id: Types.ObjectId;
  nazev?: string;
  registracniznacka?: string;
  popis?: string;
  skupina?: string;
  trenazer?: boolean;
  platnostod?: Date;
  platnostdo?: Date;
  component: string;
  kos: boolean;
  archiv: boolean;
}

export const VozidloSchema = new Schema<IVozidlo>({
  nazev: String,
  registracniznacka: String,
  popis: String,
  skupina: String,
  trenazer: Boolean,
  platnostod: Date,
  platnostdo: Date,
  component: String,
  kos: { type: Boolean, default: false },
});

VozidloSchema.plugin(paginate);

type T = IVozidlo;
export const VozidloPagi: PaginateModel<T> =
  (mongoose.models?.VozidloPagi as PaginateModel<T>) ||
  mongoose.model<T, PaginateModel<T>>("VozidloPagi", VozidloSchema, "vozidla");
export const Vozidlo: Model<T> =
  (mongoose.models?.Vozidlo as PaginateModel<T>) ||
  mongoose.model<T>("Vozidlo", VozidloSchema, "vozidla");
