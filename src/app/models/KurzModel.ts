import mongoose, {
    Model,
    PaginateModel,
    PopulatedDoc,
    Schema,
    Types,
} from "mongoose";
import { IRok } from "./RokModel";
import paginate from "mongoose-paginate-v2";
import { IAutoskola } from "./AutoskolaModel";
import { IVozidlo, VozidloSchema } from "./VozidloModel";
import { IUcebniPlan } from "./Types";
import { IZadatel } from "./ZadatelModel";
export interface IPolozkaKurzu {
    _id: Types.ObjectId;
    _prihlaska: PopulatedDoc<IZadatel & Document>;
    ucebniPlan: ITridniKnihaPol[];
    ucebniPlanPV: ITridniKnihaPol[];
}

export type TPredmetVycviku = "PV-ÚV" | "PV-ZP";
export type TPredmetVyuky =
    | "PV-ÚV"
    | "PV-ZP"
    | "TZBJ"
    | "ZP"
    | "OP"
    | "OÚV"
    | "PPV";

export const ucebniPlanPolSchema = new Schema<IUcebniPlanPol>({
    lekce: Number,
    datum: Date,
    predmet: String,
    pocethodin: Number,
    _ucitel: { type: Schema.Types.ObjectId, ref: "ucitele" },
    skupina: String,
});

export type TDruhVyukaVycvik =
    | "Základní"
    | "Sdružený"
    | "Rozšiřující"
    | "Individuální"
    | "Doplňovací";

export interface ITridniKnihaPol {
    lekce: number;
    predmet: string;
    pocethodin: number;
    id: number;
    datum: Date;
    _ucitel: Types.ObjectId;
    skupina: string;
    neucast?: boolean;
}
export const tridniKnihaPolSchema = new Schema<ITridniKnihaPol>({
    lekce: Number,
    predmet: String,
    pocethodin: Number,
    id: Number,
    datum: Date,
    _ucitel: Schema.Types.ObjectId,
    skupina: String,
    neucast: Boolean,
});

export const kurzZadatelPSchema = new Schema<IPolozkaKurzu>({
    _prihlaska: { type: Schema.Types.ObjectId, ref: "prihlasky" },
    ucebniPlan: [tridniKnihaPolSchema],
    ucebniPlanPV: [tridniKnihaPolSchema],
});

export interface IUcebniPlanPol {
    lekce: number;
    datum: Date;
    predmet: TPredmetVycviku | TPredmetVyuky;
    pocethodin: number;
    _ucitel: Types.ObjectId;
    skupina: string;
}

export interface IKurz {
    _id: Types.ObjectId;
    _autoskola?: PopulatedDoc<IAutoskola & Document>;
    _rok?: PopulatedDoc<IRok & Document>;
    _vedouciucitel?: Types.ObjectId;
    _zdravotnik?: Types.ObjectId;
    polozkyKurzu: IPolozkaKurzu[];
    zadatele?: Record<string, unknown>;
    autoskolanazev?: object;
    kurzzadateledetail?: Record<string, unknown>;
    autoskoly_id: Types.ObjectId;
    nazev?: string;
    rok?: string;
    druhvycviku?: string;
    druhvyukavycvik: TDruhVyukaVycvik;
    proskupinuro?: string;
    mistokonani?: string;
    vozidla?: string;
    vozidlaSeznam?: IVozidlo[];
    ucebniplan?: IUcebniPlan;
    ucebniplanpv?: IUcebniPlan;
    skupiny: string[];
    jizdy: boolean[];
    datumzahajeni?: Date;
    datumpodaniseznamu?: Date;
    popis?: string;
    skupinykomplet?: object;
    datumzahajenivyuka?: Date;
    casvyuky?: string;
    datumukonceni?: Date;
    tridnikniha?: ITridniKnihaPol[];
    PrihlaskaFormPrint: object;
    skolne: number;
    tridniKnihaPrint: () => void;
    kurzZadateleP: () => void;
    druhvyukavycvikc: () => void;
    kos: boolean;
    archiv: boolean;
}

export const KurzSchema = new Schema<IKurz>(
    {
        _id: Schema.Types.ObjectId,
        _autoskola: { type: Schema.Types.ObjectId, ref: "Autoskola" },
        _rok: { type: Schema.Types.ObjectId, ref: "Rok" },
        _vedouciucitel: { type: Schema.Types.ObjectId, ref: "Ucitel" },
        _zdravotnik: { type: Schema.Types.ObjectId, ref: "Ucitel" },
        zadatele: Object,
        polozkyKurzu: [kurzZadatelPSchema],
        autoskolanazev: Object,
        kurzzadateledetail: Object,
        autoskoly_id: Schema.Types.ObjectId,
        nazev: String,
        rok: String,
        druhvycviku: String,
        druhvyukavycvik: String,
        proskupinuro: String,
        mistokonani: String,
        vozidla: String,
        vozidlaSeznam: [VozidloSchema],
        ucebniplan: { skupina: String, osnova: [ucebniPlanPolSchema] },
        ucebniplanpv: { skupina: String, osnova: [ucebniPlanPolSchema] },
        skupiny: [String],
        jizdy: [Boolean],
        datumzahajeni: Date,
        datumpodaniseznamu: Date,
        popis: String,
        skupinykomplet: Object,
        datumzahajenivyuka: Date,
        casvyuky: String,
        datumukonceni: Date,
        tridnikniha: [tridniKnihaPolSchema],
        PrihlaskaFormPrint: Object,
        skolne: Number,
        tridniKnihaPrint: Object,
        kos: { type: Boolean, default: false },
        archiv: { type: Boolean, default: false },
    },
    { collection: "kurzy" }
);

KurzSchema.plugin(paginate);

type T = IKurz;
export const KurzPagi: PaginateModel<T> =
    (mongoose.models?.KurzPagi as PaginateModel<T>) ||
    mongoose.model<T, PaginateModel<T>>("KurzPagi", KurzSchema, "kurzy");

export const Kurz: Model<T> =
    (mongoose.models?.Kurz as Model<T>) ||
    mongoose.model<T>("Kurz", KurzSchema, "kurzy");
