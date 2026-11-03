"use client";

import { IZadatel, TTypSluzby, zZadatel } from "@/types/ZadatelType";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import { updateZadatel } from "../actions/ZadatelActions";
import { TSkupina } from "../models/SkupinyModel";
import { AutoForm } from "./AutoForm";
import PrihlaskaVyberSkupin from "./PrihlaskaVyberSkupin";

export default function PrihlaskaClient() {
  const [value, setValue] = React.useState("vycvik" as TTypSluzby);
  const [skupinyVlastnene, setSkupinyVlastnene] = useState([] as TSkupina[]);
  const [skupinyZadane, setSkupinyZadane] = useState([] as TSkupina[]);
  const callBack = (
    pSkupinyVlastnene: TSkupina[],
    pSkupinyZadane: TSkupina[],
  ) => {
    setSkupinyVlastnene(pSkupinyVlastnene);
    setSkupinyZadane(pSkupinyZadane);
  };
  const handleSubmit = async (data: any) => {
    const newData = structuredClone(data) as IZadatel;
    newData.skupinyzadane = skupinyZadane;
    newData.skupinyvlastnene = skupinyVlastnene;
    const res = await updateZadatel(newData);
    if (res.success) console.log("success");
  };

  const PrihlaskaVycvik = () => {
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
            onSubmit={handleSubmit}
            defaultValues={{} as IZadatel}
            submitText="Odeslat přihlášku"
          />
        </Box>
      </Box>
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
            onSubmit={handleSubmit}
            defaultValues={{} as IZadatel}
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
            onSubmit={handleSubmit}
            defaultValues={{} as IZadatel}
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
            onSubmit={handleSubmit}
            defaultValues={{} as IZadatel}
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
