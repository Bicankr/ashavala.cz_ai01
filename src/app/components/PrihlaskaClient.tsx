"use client";

import { IZadatel, TTypSluzby, zZadatel } from "@/types/Zadatel";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { handleZadatelSubmit } from "../lib/actions";
import { AutoForm } from "./AutoForm";
import PrihlaskaVyberSkupin from "./PrihlaskaVyberSkupin";

type TProps = { defaultValues: IZadatel };

export default function PrihlaskaClient(props: TProps) {
  const [value, setValue] = React.useState("vycvik" as TTypSluzby);
  const handleChange = (event: React.SyntheticEvent, newValue: TTypSluzby) => {
    setValue(newValue);
  };

  const handleSubmit = (data: any) => {
    alert(JSON.stringify(data, null, 2));
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
            <Box
              sx={{
                width: "100%",
              }}
            >
              <Box sx={{ mx: "auto" }}>
                <PrihlaskaVyberSkupin typSluzby="vycvik" />
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
                  defaultValues={props.defaultValues}
                  submitText="Odeslat přihlášku"
                />
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value="prezkouseni" keepMounted>
            <PrihlaskaVyberSkupin typSluzby="prezkouseni" />
            <AutoForm
              schema={zZadatel}
              onSubmit={handleZadatelSubmit}
              defaultValues={props.defaultValues}
              submitText="Vytvořit účet"
            />
          </TabPanel>
          <TabPanel value="kondicnijizdy" keepMounted>
            <PrihlaskaVyberSkupin typSluzby="kondicnijizdy" />
            <AutoForm
              schema={zZadatel}
              onSubmit={handleZadatelSubmit}
              defaultValues={props.defaultValues}
              submitText="Vytvořit účet"
            />
          </TabPanel>
          <TabPanel value="skolenizacinajicichridicu" keepMounted>
            <PrihlaskaVyberSkupin typSluzby="skolenizacinajicichridicu" />
            <AutoForm
              schema={zZadatel}
              onSubmit={handleZadatelSubmit}
              defaultValues={props.defaultValues}
              submitText="Vytvořit účet"
            />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
