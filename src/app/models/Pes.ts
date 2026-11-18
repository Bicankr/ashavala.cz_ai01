import mongoose, { Model, Schema, Types } from "mongoose";

export interface IPes extends mongoose.Document {
    _id: Types.ObjectId;
    jmeno: string;
    prezdivka?: string;
    kos: { type: boolean; default: false };
}

export const PesSchema = new Schema<IPes>(
    {
        jmeno: String,
        prezdivka: { type: String, default: "Ořech" },
        kos: Boolean,
    },
    { collection: "psi" },
);

type T = IPes;

export const Pes: Model<T> =
    (mongoose.models?.Pes as Model<T>) || mongoose.model<T>("Pes", PesSchema);
