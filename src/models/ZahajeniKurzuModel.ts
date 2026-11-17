import { IZahajeniKurzu } from "@/types/ZahajeniKurzu";
import mongoose, { Model, PaginateModel, Schema } from "mongoose";
import paginate from "mongoose-paginate-v2";

export const ZahajeniKurzuSchema = new Schema<IZahajeniKurzu>({
  _id: Schema.Types.ObjectId,
  skupina: String,
  odpoved: String,
  odpovedHtml: String,
  aktivni: Boolean,
  potvrzeni: String,
});

ZahajeniKurzuSchema.plugin(paginate);

type T = IZahajeniKurzu;

export const ZahajeniKurzuPagi: PaginateModel<T> =
  (mongoose.models?.ZahajeniKurzuPagi as PaginateModel<T>) ||
  mongoose.model<T, PaginateModel<T>>(
    "ZahajeniKurzuPagi",
    ZahajeniKurzuSchema,
    "zahajenikurzu",
  );

export const ZahajeniKurzu: Model<T> =
  (mongoose.models?.ZahajeniKurzu as Model<T>) ||
  mongoose.model<IZahajeniKurzu>(
    "ZahajeniKurzu",
    ZahajeniKurzuSchema,
    "zahajenikurzu",
  );
