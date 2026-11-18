import mongoose, { Model, PaginateModel, Schema, Types } from "mongoose";
import { TSkupina } from "./Types";

export interface IZahajeniKurzu {
    _id: Types.ObjectId;
    skupina?: TSkupina;
    odpoved?: string;
    odpovedHtml?: string;
    odpovedbezterminu?: string;
    potvrzeni?: string;
    aktivni?: boolean;
}

export const zahajeniKurzuSchema = new Schema<IZahajeniKurzu>({
    skupina: String,
    odpoved: String,
    odpovedHtml: String,
    odpovedbezterminu: String,
    potvrzeni: String,
    aktivni: Boolean,
});

type T = IZahajeniKurzu;
export const ZahajeniKurzuPagi: PaginateModel<T> =
    (mongoose.models.ZahajeniKurzuPagi as PaginateModel<T>) ||
    mongoose.model<T, PaginateModel<T>>(
        "ZahajeniKurzuPagi",
        zahajeniKurzuSchema,
        "zahajenikurzu",
    );

export const ZahajeniKurzu: Model<T> =
    (mongoose.models?.ZahajeniKurzu as Model<T>) ||
    mongoose.model<T>("ZahajeniKurzu", zahajeniKurzuSchema, "zahajenikurzu");
