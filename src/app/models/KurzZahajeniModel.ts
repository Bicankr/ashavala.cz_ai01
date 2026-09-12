import mongoose, { Model, PaginateModel, Schema, Types } from "mongoose";
import paginate from "mongoose-paginate-v2";
import { TSkupina } from "./SkupinyModel";

export interface IKurzZahajeni {
    _id: Types.ObjectId;
    skupina: TSkupina;
    pocetmist: number;
    pocetmistmin: number;
    datumzahajeni: Date;
    zadateleIds: string[];
    archiv: boolean;
    kos: boolean;
}

export const KurzyZahajeniSchema = new Schema<IKurzZahajeni>(
    {
        skupina: String,
        datumzahajeni: Date,
        zadateleIds: [String],
        pocetmist: { type: Number, default: 0 },
        pocetmistmin: { type: Number, default: 3 },
        archiv: { type: Boolean, default: false },
        kos: { type: Boolean, default: false },
    },
    { collection: "kurzyzahajeni" },
);

KurzyZahajeniSchema.plugin(paginate);

type T = IKurzZahajeni;
export const KurzZahajeniPagi: PaginateModel<T> =
    (mongoose.models?.KurzyZahajeniPagi as PaginateModel<T>) ||
    mongoose.model<T, PaginateModel<T>>(
        "KurzyZahajeniPagi",
        KurzyZahajeniSchema,
    );

export const KurzyZahajeni: Model<T> =
    (mongoose.models?.KurzyZahajeni as Model<T>) ||
    mongoose.model<T>("KurzyZahajeni", KurzyZahajeniSchema);
