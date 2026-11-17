import { IZahajeniKurzuTerminy } from "@/types/ZahajeniKurzuTerminy";
import mongoose, { Model, PaginateModel, Schema } from "mongoose";
import paginate from "mongoose-paginate-v2";

export const ZahajeniKurzuTerminySchema = new Schema<IZahajeniKurzuTerminy>({
  skupina: String,
  datum: Date,
});

ZahajeniKurzuTerminySchema.plugin(paginate);
type T = IZahajeniKurzuTerminy;
export const ZahajeniKurzuTerminyPagi: PaginateModel<T> =
  (mongoose.models?.ZahajeniKurzuTerminyPagi as PaginateModel<T>) ||
  mongoose.model<T, PaginateModel<T>>(
    "ZahajeniKurzuTerminyPagi",
    ZahajeniKurzuTerminySchema,
    "zahajenikurzu",
  );
export const ZahajeniKurzuTerminy: Model<T> =
  (mongoose.models?.ZahajeniKurzuTerminy as Model<T>) ||
  mongoose.model<IZahajeniKurzuTerminy>(
    "ZahajeniKurzuTerminy",
    ZahajeniKurzuTerminySchema,
    "zahajenikurzuterminy",
  );
