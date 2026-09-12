import mongoose, { Model, PaginateModel, Schema, Types } from "mongoose";
import paginate from "mongoose-paginate-v2";
import { ITridniKnihaPol } from "./KurzModel";
import { TCollection, TSkupina } from "./Types";
import { IZkouska } from "./ZkouskaModel";

export type TTypSluzby = "kondicnijizdy" | "vycvik" | "prezkouseni";
export const RolesDefinition = [
    "Admin",
    "Editor",
    "Žadatel",
    "Učitel",
    "Superuživatel",
] as const;

export type TRole = (typeof RolesDefinition)[number];
export interface IPoznamka {
    _id: Types.ObjectId;
    datum: Date;
    text: string;
}
export interface ISkupiny {
    [keys: string]: boolean;
}

export interface IPlatba {
    id?: string;
    castka?: number;
    datum?: Date;
    zpusobplatby?: "Hotově" | "Převodem";
    bankovniucet?: string;
}
export type TZpusobPlatby = "Hotově" | "Převodem";
export interface IPlatbaP {
    _id: Types.ObjectId;
    castka?: number;
    datum?: Date;
    zpusobplatby?: TZpusobPlatby;
    bankovniucet?: string;
}

export interface IMail {
    id?: string;
    casodeslani: Date;
    subject?: string;
    text: string;
}

export const platbaPSchema = new Schema<IPlatbaP>({
    castka: Number,
    datum: Date,
    zpusobplatby: String,
    bankovniucet: String,
});

export interface IZadatel extends mongoose.Document {
    _id: Types.ObjectId;
    _kurz: Types.ObjectId;
    _evidencnikniha: Types.ObjectId;
    platby?: IPlatba[];
    platbyP?: IPlatbaP[];
    poznamky: IPoznamka[];
    skupinyvlastnene?: TSkupina[];
    skupinyzadane?: TSkupina[];
    email?: string;
    vlastnimro?: boolean;
    vlastneneSkupiny?: ISkupiny;
    zadaneSkupiny?: ISkupiny;
    cislorp?: string;
    jmeno?: string;
    prijmeni?: string;
    titul?: string;
    datumnarozeni?: string;
    mistonarozeni?: string;
    rodnecislo?: string;
    statniobcanstvi?: string;
    dokladtotoznosti?: string;
    telefon?: string;
    ulice?: string;
    obec?: string;
    okres?: string;
    smerovacicislo?: string;
    obecniuradrp?: string;
    datumzahajeni?: Date;
    evidencnicislo?: number;
    PrihlaskaFormPrint?: object;
    typsluzby?: TTypSluzby;
    TypSluzbyNazev?: String;
    skupina?: string;
    skupiny?: string[]; //Výcvik
    nkuucast?: boolean;
    datumpodanizadosti?: Date;
    datumukonceni?: Date;
    portal?: boolean;
    maxpocetjizdtydne?: number;
    heslo?: string;
    passwordHash?: string;
    protokol?: string;
    zdravotniposudek?: boolean;
    ukoncenyzadatel?: boolean;
    archiv?: boolean;
    vycvikok?: boolean;
    poznamka?: string;
    vlozeno?: Date;
    mails?: IMail[];
    typvycviku?: string;
    kos?: boolean;
    zkousky?: {
        datetimejizda?: Date;
        jizdy?: (boolean | undefined)[];
        etesty?: boolean;
        zkouskaObject?: IZkouska;
    }[];
    skolne?: number;
    kurz?: string;
    terminprvnizkousky?: Date;
    etestykomplet?: boolean;
    jizdykomplet?: boolean;
    //components
    skupinykomplet?: object;
    knihajizd?: object;
    naplanovaneJizdy?: object;
    prihlaskaZkousky?: object;
    uportal?: object;
    prihlaskydetail?: object;
    prihlaskaskupiny?: () => void;
    konecnyterminzkousek?: object;
    autoskoly_id: Types.ObjectId | undefined;
    etest?: boolean;
    config?: Record<string, unknown>;
    zadatel?: boolean;
    admin?: boolean;
    sms?: object;
    tridniknihapv: ITridniKnihaPol[];
    searchText: string;
    knihaJizdPrvniJizda?: Date;
    knihaJizdPosledniJizda?: Date;
    knihaJizdPocetJizdCelkem?: number;
    knihaJizdPocetJizdVozidlo?: number;
    knihaJizdPocetJizdTrenazer?: number;
    autoskolaNazev?: String;
    kurzNazev?: String;
    rok: Number;
    AutoskolaNazevPopis?: String;
    zadaneSkupinyText?: String;
    roles: TRole[];
    component?: string;
}

export const poznamkaSchema = new Schema<IPoznamka>({
    datum: Date,
    text: String,
});

export const ZadatelSchema = new Schema<IZadatel>(
    {
        _kurz: { type: Schema.Types.ObjectId, ref: "Kurz" },
        _evidencnikniha: { type: Schema.Types.ObjectId, ref: "EvidencniKniha" },
        platby: [Object],
        platbyP: [platbaPSchema],
        poznamky: [poznamkaSchema],
        vlastnimro: Boolean,
        email: String,
        vlastneneSkupiny: Object,
        zadaneSkupiny: Object,
        cislorp: String,
        jmeno: String,
        prijmeni: String,
        titul: String,
        datumnarozeni: String,
        mistonarozeni: String,
        rodnecislo: String,
        statniobcanstvi: String,
        dokladtotoznosti: String,
        telefon: String,
        ulice: String,
        obec: String,
        okres: String,
        smerovacicislo: String,
        obecniuradrp: String,
        datumzahajeni: Date,
        PrihlaskaFormPrint: Object,
        typsluzby: String,
        skupina: String,
        skupiny: [String],
        nkuucast: Boolean,
        datumpodanizadosti: Date,
        datumukonceni: Date,
        portal: Boolean,
        vycvikok: Boolean,
        poznamka: String,
        vlozeno: Date,
        mails: [Object],
        typvycviku: String,
        zkousky: [Object],
        skolne: Number,
        kurz: String,
        terminprvnizkousky: Date,
        etestykomplet: Boolean,
        jizdykomplet: Boolean,
        skupinykomplet: Object,
        knihajizd: Object,
        uportal: Object,
        prihlaskydetail: Object,
        prihlaskaskupiny: Object,
        konecnyterminzkousek: Object,
        rok: Number,
        autoskoly_id: Schema.Types.ObjectId,
        config: Object,
        zadatel: Boolean,
        admin: Boolean,
        sms: Object,
        searchText: { type: String, index: true },
        maxpocetjizdtydne: Number,
        knihaJizdPrvniJizda: Date,
        knihaJizdPosledniJizda: Date,
        knihaJizdPocetJizdCelkem: Number,
        knihaJizdPocetJizdTrenazer: Number,
        knihaJizdPocetJizdVozidlo: Number,
        ukoncenyzadatel: Boolean,
        evidencnicislo: Number,
        autoskolaNazev: String,
        kurzNazev: String,
        component: String,
        archiv: { type: Boolean, default: false, required: true },
        kos: { type: Boolean, default: false, required: true },
        heslo: String,
        passwordHash: String,
        skupinyzadane: [String],
        skupinyvlastnene: [String],
    },
    {
        collation: { locale: "cs" },
        collection: "prihlasky" as TCollection,
    },
);

ZadatelSchema.set("toObject", { virtuals: true });
ZadatelSchema.set("toJSON", { virtuals: true });

ZadatelSchema.virtual("vir").get(function () {
    return this.jmeno;
});

ZadatelSchema.plugin(paginate);

export const ZadatelPagi: PaginateModel<IZadatel> =
    (mongoose.models?.ZadatelPagi as PaginateModel<IZadatel>) ||
    mongoose.model<IZadatel, PaginateModel<IZadatel>>(
        "ZadatelPagi",
        ZadatelSchema,
        "prihlasky",
    );

export const Zadatel: Model<IZadatel> =
    (mongoose.models?.Zadatel as Model<IZadatel>) ||
    mongoose.model<IZadatel>("Zadatel", ZadatelSchema, "prihlasky");
