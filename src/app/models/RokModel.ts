import paginate from "mongoose-paginate-v2";
import mongoose, { Model, PaginateModel, Schema, Types } from "mongoose";

export interface IRok {
  _id: Types.ObjectId;
  nazev: string;
  rok: number;
}

export const RokSchema = new Schema<IRok>({
  nazev: String,
  rok: Number,
});

RokSchema.plugin(paginate);

type T = IRok;
export const RokPagi: PaginateModel<T> =
  (mongoose.models?.RokPagi as PaginateModel<T>) ||
  mongoose.model<T, PaginateModel<T>>("RokPagi", RokSchema, "roky");

export const Rok: Model<T> =
  (mongoose.models?.Rok as Model<T>) ||
  mongoose.model<T>("Rok", RokSchema, "roky");
