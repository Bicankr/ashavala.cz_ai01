"use client";
import skupinyKomplet from "@/app/lib/skupiny";
import { TSkupina, TSkupiny } from "@/app/models/SkupinyModel";

import { IZadatel, TTypSluzby } from "@/types/Zadatel";
import {
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
interface IFormZadatel extends Partial<IZadatel> {
  rozsireni: boolean;
}

const NabizeneSkupiny = ["AM", "A1", "A2", "A", "B", "B+E", "C", "C+E", "D"];

const skupiny = skupinyKomplet.filter((f) => NabizeneSkupiny.includes(f.nazev));

const MyTextField = styled(TextField)({ margin: 5, width: "100%" });
export default function PrihlaskaVyberSkupin(props: { typSluzby: TTypSluzby }) {
  const DisableZadanaSkupina = (skupina: TSkupiny) => {
    if (props.typSluzby !== "vycvik") return false;
    if (skupinyVlastnene?.includes(skupina.nazev)) return true;
    if (skupina.zakladniskupina) return false;

    let prunik = skupina.nadrazeneSkupiny.filter((f: TSkupina) =>
      skupinyZadane.includes(f),
    );
    if (prunik.length > 0) return true;

    prunik = skupina.vlastneneSkupiny.filter((f: TSkupina) =>
      skupinyVlastnene?.includes(f),
    );
    if (prunik.length > 0) return false;
    return true;
  };

  const DisableVybrane = (skupina: TSkupiny) => {
    const prunik = skupina.nadrazeneSkupiny.filter((f) =>
      skupinyZadane.includes(f),
    );
    return prunik.length > 0;
  };

  const SkupinyVlastnene = () => (
    <Stack>
      <Card
        sx={{
          boxShadow: 10,
          border: 1,
          borderColor: "lightgray",
          backgroundColor: "rgb(0, 0, 0 , .01)",
          m: 0,
          p: 0,
        }}
      >
        <CardContent sx={{ backgroundColor: "white" }}>
          <Typography variant="subtitle2">Které skupiny máte</Typography>
          <FormGroup>
            <Stack direction={"row"} useFlexGap sx={{ flexWrap: "wrap" }}>
              {skupiny
                .filter((f) => NabizeneSkupiny.includes(f.nazev))
                .filter((f) => f.nazev !== "T")
                .map((skupina) => {
                  return (
                    <Stack
                      key={skupina.nazev}
                      direction={"column"}
                      useFlexGap
                      sx={{ flexWrap: "wrap" }}
                    >
                      <FormControlLabel
                        slotProps={{
                          typography: {
                            sx: { fontWeight: "bold" },
                          },
                        }}
                        sx={{
                          fontWeight: "bold",
                          fontSize: "50px",
                          width: "75px",
                          boxShadow: 1,
                          ":hover": {
                            boxShadow: 10,
                          },
                        }}
                        key={skupina.nazev}
                        control={
                          <Checkbox
                            size="small"
                            key={skupina?.nazev}
                            id={skupina?.nazev}
                            checked={isCheckedVlastnene(skupina?.nazev)}
                            onChange={(e) =>
                              handleChangeVlastnene(
                                skupina?.nazev ?? "",
                                e.target.checked,
                              )
                            }
                          />
                        }
                        label={`${skupina?.nazev} `}
                      />
                      <Image
                        alt={skupina.nazev}
                        key={skupina.nazev + "zadane"}
                        src={`/Skupiny/${skupina.nazev}.svg`}
                        width={40}
                        height={40}
                        style={{
                          opacity: isCheckedVlastnene(skupina?.nazev)
                            ? 1
                            : 0.25,
                        }}
                      />
                    </Stack>
                  );
                })}
            </Stack>
          </FormGroup>
        </CardContent>
      </Card>
    </Stack>
  );

  const SkupinyZadane = () => (
    <Card
      sx={{
        boxShadow: 10,
        border: 1,
        borderColor: "lightgray",
        m: 0,
        p: 0,
      }}
    >
      <CardContent>
        <Typography variant="subtitle2">Které skupiny chcete</Typography>
        <FormGroup>
          <Stack direction={"row"} useFlexGap sx={{ flexWrap: "wrap" }}>
            {skupiny
              .filter((f) => f.nazev !== "T")
              .map((skupina) => {
                return (
                  <Stack direction={"column"} key={skupina.nazev}>
                    <FormControlLabel
                      slotProps={{
                        typography: {
                          sx: { fontWeight: "bold" },
                        },
                      }}
                      sx={{
                        width: "75px",
                        boxShadow: 1,
                        ":hover": {
                          boxShadow: DisableZadanaSkupina(skupina) ? null : 10,
                        },
                      }}
                      disabled={DisableZadanaSkupina(skupina)}
                      key={skupina.nazev}
                      control={
                        <Checkbox
                          size="small"
                          disabled={isCheckedVlastnene(skupina?.nazev)}
                          key={skupina?.nazev}
                          id={skupina?.nazev}
                          checked={isCheckedZadane(skupina?.nazev)}
                          onChange={(e) =>
                            handleChangeZadane(
                              skupina?.nazev ?? "",
                              e.target.checked,
                            )
                          }
                        />
                      }
                      label={`${skupina?.nazev} `}
                    />
                    <Image
                      alt={skupina.nazev}
                      key={skupina.nazev + "zadane"}
                      src={`/Skupiny/${skupina.nazev}.svg`}
                      width={40}
                      height={40}
                      style={{
                        opacity: isCheckedZadane(skupina?.nazev) ? 1 : 0.25,
                      }}
                    />
                  </Stack>
                );
              })}
          </Stack>
        </FormGroup>
      </CardContent>
    </Card>
  );

  const skupinyKJ = ["A", "B", "B+E"];

  const isCheckedVlastnene = (skupinaNazev: TSkupina) => {
    return skupinyVlastnene?.includes(skupinaNazev);
  };

  const isCheckedZadane = (skupinaNazev: TSkupina) => {
    return skupinyZadane.includes(skupinaNazev);
  };

  const handleChangeVlastnene = (skupinaNazev: TSkupina, checked: boolean) => {
    let newSkupiny = skupinyVlastnene?.filter((f) => f !== skupinaNazev) ?? [];
    if (checked) {
      newSkupiny.push(skupinaNazev);
      const skupina = skupiny.find((f) => f.nazev === skupinaNazev);
      if (skupina) {
        for (const nazev of skupina.podrazeneSkupiny) {
          newSkupiny = newSkupiny.filter((f) => f !== nazev);
          newSkupiny.push(nazev);
        }
      }
    } else {
      const skupina = skupiny.find((f) => f.nazev === skupinaNazev);
      if (skupina) {
        for (const nazev of skupina.nadrazeneSkupiny) {
          newSkupiny = newSkupiny.filter((f) => f !== nazev);
        }
      }
    }

    setSkupinyVlastnene(newSkupiny);
    setSkupinyZadane([]);
  };

  const handleChangeZadane = (skupinaNazev: TSkupina, checked: boolean) => {
    let newSkupiny = skupinyZadane.filter((f) => f !== skupinaNazev);
    if (checked) {
      newSkupiny.push(skupinaNazev);
      const skupina = skupiny.find((f) => f.nazev === skupinaNazev);
      if (skupina) {
        for (const nazev of skupina.podrazeneSkupiny) {
          newSkupiny = newSkupiny.filter((f) => f !== nazev);
        }
        for (const nazev of skupina.nadrazeneSkupiny) {
          newSkupiny = newSkupiny.filter((f) => f !== nazev);
        }
      }
    } else {
      const skupina = skupiny.find((f) => f.nazev === skupinaNazev);
      if (skupina) {
        for (const nazev of skupina.nadrazeneSkupiny) {
          newSkupiny = newSkupiny.filter((f) => f !== nazev);
        }
      }
    }
    setSkupinyZadane(newSkupiny);
  };

  const [skupinyVlastnene, setSkupinyVlastnene] = useState([] as TSkupina[]);
  const [skupinyZadane, setSkupinyZadane] = useState([] as TSkupina[]);

  return (
    <>
      <Stack
        spacing={1}
        direction={{ sm: "column" }}
        sx={{
          m: 0,
          p: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.typSluzby === "vycvik" ? <SkupinyVlastnene /> : null}
        <SkupinyZadane />
      </Stack>
    </>
  );
}
