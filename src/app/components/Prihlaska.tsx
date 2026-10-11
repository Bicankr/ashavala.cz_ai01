"use client";
import skupiny from "@/app/lib/skupiny";
import { TSkupina, TSkupiny } from "@/app/models/SkupinyModel";
import { IZadatel } from "@/app/models/ZadatelModel";
import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Checkbox,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { Suspense, useEffect, useState } from "react";
import GeneratedForm from "../lib/GenForm";
interface IFormZadatel extends Partial<IZadatel> {
  rozsireni: boolean;
}
const MyTextField = styled(TextField)({ margin: 5, width: "100%" });
function Compo() {
  const DisableZadanaSkupina = (skupina: TSkupiny) => {
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

  const VlastneneSkupiny = () => (
    <Card
      sx={{
        boxShadow: 0,
        border: 1,
        borderColor: "lightgray",
        m: 0,
        p: 0,
      }}
    >
      <CardContent>
        <Typography variant="subtitle2">Vlastněné skupiny ŘO</Typography>
        <FormGroup>
          <Stack direction={"row"} useFlexGap sx={{ flexWrap: "wrap" }}>
            {skupiny
              .filter((f) => f.nazev !== "T")
              .map((skupina) => {
                return (
                  <FormControlLabel
                    sx={{
                      width: "23%",
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
                );
              })}
          </Stack>
        </FormGroup>
      </CardContent>
    </Card>
  );
  const ZadaneSkupiny = () => (
    <Card
      sx={{
        boxShadow: 0,
        border: 1,
        borderColor: "lightgray",
        m: 0,
        p: 0,
      }}
    >
      <CardContent>
        <Typography variant="subtitle2">Žádané skupiny ŘO</Typography>
        <FormGroup>
          <Stack direction={"row"} useFlexGap sx={{ flexWrap: "wrap" }}>
            {skupiny
              .filter((f) => f.nazev !== "T")
              .map((skupina) => {
                return (
                  <FormControlLabel
                    sx={{
                      width: "23%",
                      boxShadow: 1,
                      ":hover": {
                        boxShadow: 10,
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
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {}, []);

  return (
    <Suspense>
      <>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Rekapitulace</DialogTitle>{" "}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={(theme) => ({
              position: "absolute",
              right: 8,
              top: 8,
              color: theme.palette.grey[500],
            })}
          >
            <Close />
          </IconButton>
          <DialogContent>
            <div>
              <h3>Bude odelána přihláška na výuku a výcvik s údaji:</h3>
            </div>
          </DialogContent>
          <DialogActions>
            <ButtonGroup></ButtonGroup>
            <Button onClick={handleClose}>Zpět</Button>
          </DialogActions>
        </Dialog>
        <form>
          <Stack
            spacing={1}
            sx={{ m: 0, p: 1, maxWidth: "400px", boxShadow: 5 }}
          >
            <VlastneneSkupiny />
            <ZadaneSkupiny />
          </Stack>
        </form>
      </>
    </Suspense>
  );
}

export default function Prihlaska() {
  return (
    <Box id="prihlaska" sx={{ mt: 5 }}>
      <Container sx={{ mt: 13 }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
          }}
        >
          <Grid container spacing={2} sx={{ width: "100%" }}>
            <Grid size={{ xs: 12, sm: 12 }}>
              <Box
                sx={{
                  width: "100%",
                  p: 3,
                  textAlign: "center",
                  backgroundColor: "rgb(0, 0, 0 , 30%)",
                  mt: 1,
                  borderRadius: 2,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "lightgray",
                    fontFamily: "oswald",
                  }}
                  variant="h4"
                >
                  Přihláška do autoškoly
                </Typography>
              </Box>
              <Compo />
              <br />
              <GeneratedForm />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
