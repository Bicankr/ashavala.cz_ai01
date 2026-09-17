"use server";
import dayjs from "dayjs";
import nodemailer, { SentMessageInfo } from "nodemailer";

import { KurzyZahajeni } from "../models/KurzZahajeniModel";
import {
  IZahajeniKurzu,
  IZahajeniKurzuTerminy,
  TSkupina,
} from "../models/Types";
import { IZadatel } from "../models/ZadatelModel";
import { ZahajeniKurzu, ZahajeniKurzuPagi } from "../models/ZahajeniKurzuModel";
import { ZahajeniKurzuTerminy } from "../models/ZahajeniKurzuTerminy";
import dbConnect from "./dbConnect";

export async function SendMail(
  to: string | string[],
  cc: string,
  subject: string,
  html: string,
  attachments?: Buffer,
): Promise<SentMessageInfo> {
  const transporter = nodemailer.createTransport({
    host: "mail.hukot.net",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "autoskola@ashavala.cz",
      pass: "Autoskola1Autoskola1",
    },
    tls: {
      ciphers: "SSLv3",
    },
  });

  try {
    const info = await transporter.sendMail({
      from: "Autoškola Havala<autoskola@ashavala.cz>", // sender address
      to: to, // list of receivers
      subject: subject, // Subject line
      html: html, // html body
      replyTo: "Autoškola Havala<autoskola@ashavala.cz>",
      attachments: attachments
        ? [
            {
              filename: "soubor.pdf",
              content: attachments,
              contentType: "application/pdf",
            },
          ]
        : undefined,
    });

    return info;
  } catch (err) {
    console.error(err);

    return {} as SentMessageInfo;
  }
}

export const PotvrzeniPrihlasky = async (
  zadatel: Partial<IZadatel>,
  datumZahajeni?: string,
) => {
  const infoMails = ["pavel.zednik@gmail.com"];
  let mailTextFromForm =
    zadatel?.typsluzby === "kondicnijizdy"
      ? [
          `Typ služby: Kondiční jízdy`,
          "Jméno: " + (zadatel.jmeno || ""),
          "Příjmení: " + (zadatel.prijmeni || ""),
          "E-mail: " + zadatel.email?.trim() || "",
          "Telefon: " + zadatel.telefon || "",
          "Žádaná oprávnění: " + zadatel?.skupinyzadane?.join(", "),
        ]
      : [
          `Typ služby: ${
            zadatel.typsluzby === "vycvik"
              ? "Výcvik"
              : "Přezkoušení z odborné způsobilosti"
          }`,
          "Jméno: " + (zadatel.jmeno || ""),
          "Příjmení: " + (zadatel.prijmeni || ""),
          "Datum narození: " +
            (dayjs(zadatel.datumnarozeni).format("D.M.YYYY") || ""),
          "Rodné číslo: " + (zadatel.rodnecislo || ""),
          "E-mail: " + zadatel.email?.trim() || "",
          "Telefon: " + zadatel.telefon || "",
          "Ulice: " + zadatel.ulice || "",
          "Obec: " + zadatel.obec || "",
          "Směrovací číslo: " + zadatel.smerovacicislo || "",
          "Státní občanství:" + zadatel?.statniobcanstvi || "",
          "Doklad totožnosti číslo:" + zadatel?.dokladtotoznosti || "",
          "Vlastněná oprávnění: " + zadatel?.skupinyvlastnene?.join(", "),
          "Žádaná oprávnění: " + zadatel?.skupinyzadane?.join(", "),
          "Číslo ŘP: " + (zadatel.cislorp || ""),
        ].join("<br>");
  let html = "";
  await dbConnect();
  if (zadatel.typsluzby === "kondicnijizdy")
    html = `<h1>Dobrý den</h1><p>Vaše přihláška na kondiční jízdy pro ${
      Number(zadatel?.skupiny?.length) > 1 ? "skupiny" : "skupinu"
    } ${zadatel?.skupiny?.join(
      ", ",
    )} byla přijata. Budeme Vás kontaktovat.</p><h2>Autoškola Havala</h2>`;
  else if (zadatel.typsluzby === "vycvik") {
    if (zadatel.skupinyzadane?.includes("B")) {
      const zahajeniKurzu = (await ZahajeniKurzu.findOne({
        skupina: "B",
      })) as IZahajeniKurzu;
      html = zahajeniKurzu?.odpovedHtml ?? "";
      const termin = (await ZahajeniKurzuTerminy.findOne(
        { skupina: "B", datum: { $gte: dayjs().toDate() } },
        {},
        { sort: { datum: 1 } },
      )) as unknown as IZahajeniKurzuTerminy;
      const datumZahajeni = termin
        ? dayjs(termin.datum).format("D.M.YYYY HH:mm")
        : null;

      html = html.replace("***", datumZahajeni || "");
    } else {
      const zahajeniKurzu = (await ZahajeniKurzu.findOne({
        skupina: zadatel?.skupiny?.[0] as TSkupina,
      })) as IZahajeniKurzu;
      html = zahajeniKurzu?.odpovedHtml ?? "";
    }
  } else if (zadatel.typsluzby === "prezkouseni") {
    if (zadatel.skupiny?.includes("B")) {
      const zahajeniKurzu = (await ZahajeniKurzuPagi.findOne({
        skupina: "B",
      })) as IZahajeniKurzu;
      html = zahajeniKurzu?.odpovedHtml ?? "";
      const termin = (await ZahajeniKurzuTerminy.findOne(
        { skupina: "B", datum: { $gte: dayjs().toDate() } },
        {},
        { sort: { datum: 1 } },
      )) as unknown as IZahajeniKurzuTerminy;
      const datumZahajeni = termin
        ? dayjs(termin.datum).format("D.M.YYYY HH:mm")
        : null;

      html = html.replace("***", datumZahajeni || "");
    }
  }

  const kz = await KurzyZahajeni.findOne({
    skupina: { $in: zadatel.skupinyzadane },
    datumzahajeni: dayjs(datumZahajeni).toDate(),
  });
  kz?.zadateleIds.push(String(zadatel._id));
  await kz?.save();

  const { email } = zadatel;
  SendMail(
    email ?? "",
    "",
    "Potvrzení přihlášky do autoškoly",
    html + mailTextFromForm,
  );
  for (const infoEmail of infoMails)
    SendMail(
      infoEmail ?? "",
      "",
      "Potvrzení přihlášky do autoškoly",
      `Na adresu <a href="mailto:${email}">${email}</a> byla zaslána zpráva:<br>${html}${mailTextFromForm}`,
    );
};
