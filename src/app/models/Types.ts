import { Types } from "mongoose";
import { IUcebniPlanPol } from "./KurzModel";

export type Role = "Ucitel" | "Převodem";
export type TCollection =
    | "autobusyzakazky"
    | "prihlasky"
    | "prihlaskykos"
    | "ucitele"
    | "jizdy"
    | "jizdyterminy"
    | "nastupnimista"
    | "vozidla"
    | "knihajizd"
    | "zkousky"
    | "roky"
    | "autoskoly"
    | "evidencniknihy"
    | "obce"
    | "psc"
    | "nastavenitextymailu"
    | "informacniemaily"
    | "nastaveniodesilatelmailu"
    | "zahajenikurzuterminy"
    | "zahajenikurzu"
    | "jizdypoznamka"
    | "kurzy"
    | "prava"
    | "role"
    | "googlemeet"
    | "jizdyhistorie"
    | "paginationconfig"
    | "paginationoptions";

export type TSkupina =
    | "AM"
    | "A1"
    | "A2"
    | "A"
    | "B1"
    | "B"
    | "B96"
    | "B+E"
    | "C1"
    | "C1+E"
    | "C"
    | "C+E"
    | "D1"
    | "D1+E"
    | "D"
    | "D+E"
    | "T";

export type TCollumnType =
    | "string"
    | "stringArray"
    | "uploadfile"
    | "components"
    | "checkbox"
    | "component"
    | "date"
    | "time"
    | "number"
    | "arrayAttribute"
    | "datetime"
    | "arrayAttributeId"
    | "signcanvas"
    | "textArea"
    | "popis"
    | "boolean"
    | "object";

export type TRouteNames1 = { a: 1 } | { b: 2 };

export type TRouteNames =
    | "nastenka"
    | "prihlasky"
    | "telefony"
    | "telefonyexport"
    | "kurzy"
    | "evidencnikniha"
    | "kurzystatistika"
    | "kurzynastroje"
    | "zkousky"
    | "zkouskyopakovani2"
    | "knihajizducitel"
    | "knihajizdvse"
    | "knihajizdstat"
    | "knihajizdreport"
    | "jizdyterminy"
    | "ucitele"
    | "autoskoly"
    | "Vyuka"
    | "Vycvik"
    | "vozidla"
    | "test"
    | "zahajenikurzu"
    | "zahajenikurzuterminy"
    | "informacniemaily"
    | "nastavenitextymailu"
    | "nastaveninastupnimista"
    | "nastavenijizdyfreelimit"
    | "nastaveniodesilatelmailu"
    | "role"
    | "prava"
    | "volby"
    | "vozidla"
    | "zahajenikurzu"
    | "zahajenikurzuterminy"
    | "roky"
    | "knihajizdtydennistatistika"
    | "planovanijizd"
    | "autobusyzakazky"
    | "uzivatelskyportal"
    | "UciteleJizdyMesic"
    | "UcitelJizdyMesic"
    | "login"
    | "migrate"
    | "zadatele";

export type TPrihlaskaFlag =
    | "zarazeny"
    | "nezarazeny"
    | "ukonceny"
    | "neukonceny"
    | "aktivni"
    | "archiv"
    | "ukoncenyZkouskou";

export type TPrihlaskyFlagLabels = Record<TPrihlaskaFlag, string>;

export const PrihlaskyFlagLabels: TPrihlaskyFlagLabels = {
    zarazeny: "Zařazený",
    nezarazeny: "Nezařazený",
    ukonceny: "Ukončený",
    neukonceny: "Neukončený",
    aktivni: "Aktivní",
    ukoncenyZkouskou: "Ukončený zkouškou",
    archiv: "Včetně archivních",
};

export interface IArrayAttributeParams<T> {
    attributeName: keyof T;
    label: string;
    showedAttribute: keyof T;
    addColumnData: ICollumnDefinition<T>[];
    idsColumnData: ICollumnDefinition<unknown>[];
    collection?: TCollection;
    filter?: () => void;
    onDelete?: () => void;
}
export interface ICollumnDefinition<T> {
    width?: number;
    field: keyof T;
    label: string;
    labelTable?: string;
    type: TCollumnType;
    visibleTable: boolean;
    visibleDetail?: boolean;
    filterEnabled?: boolean;
    component?: any;
    new?(s: string): Date;
    accorditionNumber?: number;
    accorditionLabel?: string;
    arrayAttributeParams?: IArrayAttributeParams<T>;
    disabled?: boolean;
    readOnly?: boolean;
    disablePadding?: boolean;
}
export interface IPlanovaniJizdOsnova90 {
    _id: Types.ObjectId;
    skupina: TSkupina;
    cisloLekce: number;
    TrenazerPovolen: boolean;
    VozidloPovoleno: boolean;
    Instrukce: string;
}

export interface IAutobusyZakazka {
    _id: Types.ObjectId;
    nazev?: string;
    popis?: string;
    datumPrijeti?: Date;
    datumOdjezdu?: Date;
    datumPrijezdu?: Date;
    odkud?: string;
    kam?: string;
    emailAdresa?: string;
    emailPredmet?: string;
    emailText?: string;
    telefon?: string;
}

export interface IRole {
    _id: Types.ObjectId;
    id: string;
    nazev?: string;
    popis?: string;
    prava: Record<TRouteNames, boolean>;
}
export interface IPravo {
    _id: Types.ObjectId;
    id?: string;
    nazev?: string;
    popis?: string;
}
export interface ISkupina {
    nazev: string;
    podskupina: string;
    level: number;
    zakladniskupina: boolean;
    vlastneneSkupiny: Array<string>;
    popis: string;
}

export interface IJizdyPoznamka {
    _id: Types.ObjectId;
    start: Date;
    ucitele_id: Types.ObjectId;
    poznamka?: string;
}

export interface IUcitelConfigFilter {
    Filter: Record<string, unknown>;
    Sort: Record<string, unknown>;
}

export type TFlags = Record<TPrihlaskaFlag, boolean>;

export interface TPaginationConfig<T> {
    _id: Types.ObjectId;
    _ucitel: Types.ObjectId;
    collectionName: TCollection;
    variantName: string;
    sort: string;
    filter: { [index: string]: string };
    page: number;
    limit: number;
}

export interface IZkouskyPrihlaseniAdd {
    psp?: boolean;
    nku?: boolean;
    pj?: boolean;
    opakovani?: boolean;
    skupina1?: boolean;
    skupina2?: boolean;
    skupina3?: boolean;
    skupina4?: boolean;
    poznamka?: string;
}
export interface IEvidencniKnihaZadatel {
    prihlasky_id: Types.ObjectId;
    evidencnicislo?: number;
}
export interface IPolozkaEvidencniKnihy {
    _id: Types.ObjectId;
    _prihlaska: Types.ObjectId;
    evidencnicislo: number;
    EvidencniKnihaDeleteZadatelConfirm?: Function;
}

export interface IIds<T> {
    [key: string]: T;
}

export interface IUcebniPlan {
    skupina: string;
    osnova: IUcebniPlanPol[];
}
export interface IPsc {
    _id: Types.ObjectId;
    posta: string;
    okres: string;
    obec: string;
    psc: string;
}

export interface IHistorie {
    diff: Object;
    timeStamp: Date;
    loggedUserId: Types.ObjectId;
}

export interface INastaveniTextyMailu {
    _id: Types.ObjectId;
    text?: string;
    popis?: string;
    subject?: string;
}

export interface INastaveniOdesilatelMailu {
    _id: Types.ObjectId;
    jmeno?: string;
    email?: string;
}
export interface IInformacniEmaily {
    _id: Types.ObjectId;
    email?: string;
    prihlaskySent?: boolean;
    zkouskySent?: boolean;
    hromadneSent?: boolean;
    jizdySent?: boolean;
}

export interface IVolby {
    _id: Types.ObjectId;
    nazev: string;
    popis: string;
    hodnota: string;
}

export interface IHistory {
    _id: Types.ObjectId;
    loggedUserId: string;
    timeStamp: Date;
    diff: { [key: string]: string };
}

export interface IZahajeniKurzuTerminy {
    _id: Types.ObjectId;
    skupina: TSkupina;
    datum: Date;
}
export interface IZahajeniKurzu {
    _id: Types.ObjectId;
    skupina?: TSkupina;
    odpoved?: string;
    odpovedHtml?: string;
    odpovedbezterminu?: string;
    potvrzeni?: string;
    aktivni?: boolean;
}
export interface IGoogleMeet {
    _id: Types.ObjectId;
    skupina?: TSkupina;
    connectionstring: string;
}

export interface IPolozkaZkouskyOld {
    opakovani?: boolean;
    etestyucast?: boolean;
    nkuucast?: boolean;
    skupiny?: boolean[]; //ucast
    etesty?: boolean; //vysledek
    nku?: boolean; //vysledek
    jizdy?: (boolean | undefined)[]; //vysledek
    jizda?: boolean;
    poznamka?: string;
    poradovecislo?: number;
    jizd?: number;
    testu?: number;
}

export interface IZkouskaByPrihlaska {
    datetimejizda?: Date;
    datetimetest?: Date;
    timeTest: Date;
    polozkazkousky?: IPolozkaZkouskyOld;
    prihlaskaskupiny?: string[];
}

export type TOrder = "asc" | "desc" | undefined;

export interface IKurzZadatel {
    prihlasky_id: Types.ObjectId;
}

export interface IJizdyPocet {
    odjeto: number;
    odjetoTrenazer: number;
    naplanovano: number;
    naplanovanoTrenazer: number;
    naplanovanoTyden: number;
    naplanovanoTrenazerTyden: number;
    naplanovanoDen: number;
    naplanovanoTrenazerDen: number;
}

export type TSortOrder = "asc" | "desc" | undefined;

export interface ObjednavkaJizdyDef {
    skupina: ISkupina;
}
