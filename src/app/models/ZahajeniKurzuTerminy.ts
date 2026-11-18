import mongoose, { Model, PaginateModel, Schema, Types } from "mongoose";
import { TSkupina } from "./Types";

export interface IZahajeniKurzuTerminy {
    _id: Types.ObjectId;
    skupina: TSkupina;
    datum: Date;
}

export const zahajeniKurzuTerminySchema = new Schema<IZahajeniKurzuTerminy>({
    skupina: String,
    datum: Date,
});

type T = IZahajeniKurzuTerminy;
export const ZahajeniKurzuTerminyPagi: PaginateModel<T> =
    (mongoose.models.ZahajeniKurzuTerminyPagi as PaginateModel<T>) ||
    mongoose.model<T, PaginateModel<T>>(
        "ZahajeniKurzuTerminyPagi",
        zahajeniKurzuTerminySchema,
        "zahajenikurzuterminy",
    );

export const ZahajeniKurzuTerminy: Model<T> =
    (mongoose.models?.ZahajeniKurzuTerminy as Model<T>) ||
    mongoose.model<T>(
        "ZahajeniKurzuTerminy",
        zahajeniKurzuTerminySchema,
        "zahajenikurzuterminy",
    );
