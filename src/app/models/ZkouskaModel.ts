import mongoose, {
  Model,
  PaginateModel,
  PopulatedDoc,
  Schema,
  Types,
} from "mongoose";
import paginate from "mongoose-paginate-v2";
import { IZadatel } from "./ZadatelModel";

export interface IPolozkaZkousky {
  _id?: Types.ObjectId;
  _prihlaska?: PopulatedDoc<IZadatel & Document>;
  opakovani?: boolean;
  etestyucast?: boolean;
  nkuucast: boolean;
  skupiny: boolean[]; //ucast
  etesty: boolean | null; //vysledek
  nku: boolean | null; //vysledek
  jizdy: (boolean | null)[]; //vysledek
  jizda?: boolean;
  poznamka: string;
  poradovecislo?: number;
}

export const PolozkaZkouskySchema = new Schema<IPolozkaZkousky>({
  _prihlaska: { type: Schema.Types.ObjectId, ref: "Zadatel" },
  opakovani: Boolean,
  etestyucast: Boolean,
  nkuucast: Boolean,
  skupiny: { type: [Boolean], default: [] }, //ucast
  etesty: { type: Boolean, default: null }, //vysledek
  nku: { type: Boolean, default: null }, //vysledek
  jizdy: [Boolean], //vysledek
  jizda: Boolean,
  poznamka: { type: String, default: "" },
  poradovecislo: Number,
});

export type TMailHistoryItem = {
  to: string;
  cc: string;
  subject: string;
  datumOdeslani: Date;
};
export interface IZkouska {
  _id: Types.ObjectId;
  datetimetest?: Date;
  timeTest?: Date;
  timetest?: Date;
  datetimejizda?: Date;
  timejizda?: Date;
  pocetjizda?: number;
  pocettest?: number;
  datumpodani?: Date;
  mistokonani?: string;
  archiv: boolean;
  kos: boolean;
  polozkyZkousky?: IPolozkaZkousky[];

  mailHistory: TMailHistoryItem[];
}

const MailHistoryItemSchema = new Schema<TMailHistoryItem>({
  to: String,
  cc: String,
  subject: String,
  datumOdeslani: Date,
});

export const ZkouskaSchema = new Schema<IZkouska>({
  polozkyZkousky: [PolozkaZkouskySchema],
  datetimejizda: { type: Date, default: Date.now },
  datetimetest: { type: Date, default: Date.now },
  timeTest: { type: Date, default: null },
  timejizda: { type: Date, default: null },
  pocetjizda: { type: Number, default: 0 },
  pocettest: { type: Number, default: 0 },
  datumpodani: { type: Date, default: Date.now },
  mistokonani: { type: String, default: "" },
  archiv: { type: Boolean, default: false },
  kos: { type: Boolean, default: false },
  mailHistory: [MailHistoryItemSchema],
});

ZkouskaSchema.post("save", async function () {
  // for (const polozkaZkousky of this?.polozkyZkousky || []) {
  //   const zadatel = (await Zadatel.findOne({
  //     _id: polozkaZkousky._prihlaska,
  //   })) as IZadatel;
  //   if (zadatel) {
  //     if (polozkaZkousky.etesty) zadatel.etestykomplet = true;
  //     // if (polozkaZkousky?.nku !== undefined)
  //     //   zadatel.nku = Boolean(polozkaZkousky.nku);
  //     // if (polozkaZkousky?.nkuucast) zadatel.nkuucast = true;
  //     // for (let i = 0; i < polozkaZkousky.jizdy.length; ++i) {
  //     //   if (polozkaZkousky.jizdy[i] !== null)
  //     //     zadatel.jizdy[i] = polozkaZkousky.jizdy[i];
  //     // }
  //     // let archiv =
  //     //   zadatel?.jizdy?.length > 0 ? zadatel.jizdy.every(Boolean) : false;
  //     // if (zadatel?.nkuucast && !zadatel?.nku) archiv = false;
  //     // zadatel.archiv = archiv;
  //     try {
  //       await zadatel.save();
  //     } catch (error) {
  //       console.error((error as Error).message);
  //     }
  //   }
  // }
});

ZkouskaSchema.plugin(paginate);

type T = IZkouska;
export const ZkouskaPagi: PaginateModel<T> =
  (mongoose.models.ZkouskaPagi as PaginateModel<T>) ||
  mongoose.model<T, PaginateModel<T>>("ZkouskaPagi", ZkouskaSchema, "zkousky");

export const Zkouska: Model<T> =
  (mongoose.models?.Zkouska as Model<T>) ||
  mongoose.model<T>("Zkouska", ZkouskaSchema, "zkousky");
