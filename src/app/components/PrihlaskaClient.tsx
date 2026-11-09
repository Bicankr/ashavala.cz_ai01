"use client";

import { IZadatel, TTypSluzby, zZadatel } from "@/types/ZadatelType";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Box,
  Dialog,
  DialogContent,
  Tab,
  Table,
  TableCell,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import dayjs from "dayjs";
import React, { useState } from "react";
import { submitZadatelVycvik } from "../actions/ZadatelActions";
import { TSkupina } from "../models/SkupinyModel";
import { AutoForm } from "./AutoForm";
import PrihlaskaVyberSkupin from "./PrihlaskaVyberSkupin";

export default function PrihlaskaClient() {
  const defaultValues: IZadatel = {
    jmeno: "Franta",
    prijmeni: "Vopršálek",
    email: "pavel.zednik@gmail.com",
    telefon: "732156547",
    skupinyzadane: ["B+E"],
    skupinyvlastnene: ["B"],
    datumnarozeni: dayjs().format("2000-10-10"),
    mistonarozeni: "Olomouc",
    rodnecislo: "1234567890",
    ulice: "Kozí",
    obec: "Olomouc",
    smerovacicislo: "77900",
    obecniuradrp: "Olomouc",
    statniobcanstvi: "CR",
    dokladtotoznosti: "123456789",
  } as IZadatel;

  const [value, setValue] = React.useState("vycvik" as TTypSluzby);
  const [skupinyVlastnene, setSkupinyVlastnene] = useState(
    defaultValues.skupinyvlastnene as TSkupina[],
  );
  const [skupinyZadane, setSkupinyZadane] = useState(
    defaultValues.skupinyzadane as TSkupina[],
  );
  const [openVycvik, setOpenVycvik] = useState(false);
  const [res, setRes] = useState({} as IZadatel);

  const callBack = (
    pSkupinyVlastnene: TSkupina[],
    pSkupinyZadane: TSkupina[],
  ) => {
    setSkupinyVlastnene(pSkupinyVlastnene);
    setSkupinyZadane(pSkupinyZadane);
  };
  const handleSubmitVycvik = async (data: any) => {
    const newData = structuredClone(data) as IZadatel;
    newData.skupinyzadane = skupinyZadane;
    newData.skupinyvlastnene = skupinyVlastnene;
    const res = await submitZadatelVycvik(newData);
    if (res.success) {
      setRes(res.data as IZadatel);
      setOpenVycvik(true);
    }
  };

  const PrihlaskaVycvik = () => {
    return (
      <>
        <Dialog
          open={openVycvik}
          onClose={() => {}}
          onClick={() => setOpenVycvik(false)}
        >
          <DialogContent>
            <>
              <Typography sx={{ textWrap: "wrap" }} variant="subtitle1">
                Na adresu {res.email} bylo zasláno potvrzení přijetí přihlášky
                na výcvik pro skupin{skupinyZadane.length > 1 ? "y" : "u"}{" "}
                {res.skupinyzadane?.join(", ")}
              </Typography>
              <br />
              <Table size="small">
                <TableRow>
                  <TableCell>Jméno</TableCell>
                  <TableCell>{res.jmeno}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Příjmení</TableCell>
                  <TableCell>{res.prijmeni}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>E-mail</TableCell>
                  <TableCell>{res.email}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Datum narození</TableCell>
                  <TableCell>
                    {dayjs(res.datumnarozeni).format("DD.MM.YYYY")}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Místo narození</TableCell>
                  <TableCell>{res.mistonarozeni}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Rodné číslo</TableCell>
                  <TableCell>{res.rodnecislo}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Ulice</TableCell>
                  <TableCell>{res.ulice}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Obec</TableCell>
                  <TableCell>{res.obec}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Směrovací číslo</TableCell>
                  <TableCell>{res.smerovacicislo}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Obec s r.p.</TableCell>
                  <TableCell>{res.obecniuradrp}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Směrovací číslo</TableCell>
                  <TableCell>{res.smerovacicislo}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Státní občanství</TableCell>
                  <TableCell>{res.statniobcanstvi}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Doklad totožnosti</TableCell>
                  <TableCell>{res.dokladtotoznosti}</TableCell>
                </TableRow>
              </Table>
            </>
          </DialogContent>
        </Dialog>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Box sx={{ mx: "auto" }}>
            <PrihlaskaVyberSkupin
              typSluzby="vycvik"
              callBack={callBack}
              skupinyVlastnene={skupinyVlastnene}
              skupinyZadane={skupinyZadane}
            />
          </Box>
          <Typography
            variant="h6"
            sx={{
              mx: "auto",
              maxWidth: "400px",
              mt: 2,
              textAlign: "center",
            }}
          >
            Vaše údaje
          </Typography>

          <Box
            sx={{
              mx: "auto",
              maxWidth: "400px",
              mt: 1,
              backgroundColor: "white",
              p: 1,
            }}
          >
            <AutoForm
              schema={zZadatel}
              onSubmit={handleSubmitVycvik}
              defaultValues={defaultValues}
              submitText="Odeslat přihlášku"
            />
          </Box>
        </Box>
      </>
    );
  };
  const Prezkouseni = () => {
    return (
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Box sx={{ mx: "auto" }}>
          <PrihlaskaVyberSkupin
            typSluzby="vycvik"
            callBack={callBack}
            skupinyVlastnene={skupinyVlastnene}
            skupinyZadane={skupinyZadane}
          />
        </Box>
        <Typography
          variant="h6"
          sx={{
            mx: "auto",
            maxWidth: "400px",
            mt: 2,
            textAlign: "center",
          }}
        >
          Vaše údaje
        </Typography>

        <Box
          sx={{
            mx: "auto",
            maxWidth: "400px",
            mt: 1,
            backgroundColor: "white",
            p: 1,
          }}
        >
          <AutoForm
            schema={zZadatel}
            onSubmit={handleSubmitVycvik}
            defaultValues={defaultValues}
            submitText="Odeslat přihlášku"
          />
        </Box>
      </Box>
    );
  };
  const KondicniJizdy = () => {
    return (
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Box sx={{ mx: "auto" }}>
          <PrihlaskaVyberSkupin
            skupinyVlastnene={skupinyVlastnene}
            skupinyZadane={skupinyZadane}
            typSluzby="vycvik"
            callBack={callBack}
          />
        </Box>
        <Typography
          variant="h6"
          sx={{
            mx: "auto",
            maxWidth: "400px",
            mt: 2,
            textAlign: "center",
          }}
        >
          Vaše údaje
        </Typography>

        <Box
          sx={{
            mx: "auto",
            maxWidth: "400px",
            mt: 1,
            backgroundColor: "white",
            p: 1,
          }}
        >
          <AutoForm
            schema={zZadatel}
            onSubmit={handleSubmitVycvik}
            defaultValues={defaultValues}
            submitText="Odeslat přihlášku"
          />
        </Box>
      </Box>
    );
  };
  const SkoleniZacinajicichRidicu = () => {
    return (
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Box sx={{ mx: "auto" }}>
          <PrihlaskaVyberSkupin
            skupinyVlastnene={skupinyVlastnene}
            skupinyZadane={skupinyZadane}
            typSluzby="vycvik"
            callBack={callBack}
          />
        </Box>
        <Typography
          variant="h6"
          sx={{
            mx: "auto",
            maxWidth: "400px",
            mt: 2,
            textAlign: "center",
          }}
        >
          Vaše údaje
        </Typography>

        <Box
          sx={{
            mx: "auto",
            maxWidth: "400px",
            mt: 1,
            backgroundColor: "white",
            p: 1,
          }}
        >
          <AutoForm
            schema={zZadatel}
            onSubmit={handleSubmitVycvik}
            defaultValues={defaultValues}
            submitText="Odeslat přihlášku"
          />
        </Box>
      </Box>
    );
  };

  const handleChange = (event: React.SyntheticEvent, newValue: TTypSluzby) => {
    setValue(newValue);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <TabContext value={value}>
          <TabList
            orientation={isMobile ? "vertical" : "horizontal"}
            onChange={handleChange}
            aria-label="keep mounted tabs example"
            sx={{
              borderBottom: 1,
              borderColor: "divider",

              "& .MuiTab-root.Mui-selected": {
                color: "white", // text vybrané záložky
                backgroundColor: "black", // pozadí
                textTransform: "none",
                fontWeight: "bold",
                fontSize: "1rem",
              },
              "& .MuiTab-root:not(.Mui-selected)": {
                color: "text.secondary",
                textTransform: "none",
              },
            }}
          >
            <Tab
              label="Výcvik pro získání řidičského oprávnění"
              value={"vycvik" as TTypSluzby}
            />
            <Tab
              label="Přezkoušení z odborné způsobilosti"
              value={"prezkouseni" as TTypSluzby}
            />
            <Tab label="Kondiční jízdy" value={"kondicnijizdy" as TTypSluzby} />
            <Tab
              label="Školení začínajících řidičů"
              value={"skolenizacinajicichridicu" as TTypSluzby}
            />
          </TabList>
          <TabPanel value="vycvik" keepMounted sx={{ p: 0, maxwidth: "800px" }}>
            <PrihlaskaVycvik />
          </TabPanel>
          <TabPanel
            value="prezkouseni"
            keepMounted
            sx={{ p: 0, maxwidth: "800px" }}
          >
            <Prezkouseni />
          </TabPanel>
          <TabPanel
            value="kondicnijizdy"
            keepMounted
            sx={{ p: 0, maxwidth: "800px" }}
          >
            <KondicniJizdy />
          </TabPanel>
          <TabPanel
            value="skolenizacinajicichridicu"
            keepMounted
            sx={{ p: 0, maxwidth: "800px" }}
          >
            <SkoleniZacinajicichRidicu />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
