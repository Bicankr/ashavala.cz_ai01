import { IObecOrpPsc } from "@/types/ObecOrpPscType";
import mongoose, { Model, PaginateModel, Schema } from "mongoose";
import paginate from "mongoose-paginate-v2";

export const ObecOrpPscSchema = new Schema<IObecOrpPsc>({
  obecnazev: String,
  orpnazev: String,
  okresnazev: String,
  krajnazev: String,
  oblastnazev: String,
  psc: String,
});

ObecOrpPscSchema.plugin(paginate);

type T = IObecOrpPsc;
export const ObecOrpPscPagi: PaginateModel<T> =
  (mongoose.models?.ObecOrpPscPagi as PaginateModel<T>) ||
  mongoose.model<T, PaginateModel<T>>(
    "ObecOrpPscPagi",
    ObecOrpPscSchema,
    "obceorppsc",
  );

export const ObecOrpPsc: Model<T> =
  (mongoose.models?.ObecOrpPsc as Model<T>) ||
  mongoose.model<T>("ObecOrpPsc", ObecOrpPscSchema, "obceorppsc");
