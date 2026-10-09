"use client";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";

export default function FAQ() {
  const Otazka = (props: { polozka: TFAQ }) => {
    return (
      <Grid size={{ xs: 12, sm: 6 }}>
        <Accordion
          expanded={expanded.includes(props.polozka.otazka)}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography component="span" variant="subtitle2">
              {props.polozka.otazka}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}
            >
              Kurz můžete začít od 16 let, ovšem zkoušku můžete absolvovat po
              dosažení věku 17 let, a následně řídit v režimu L17, pod dohledem
              mentora. Od 18 let můžete jezdit samostatně.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    );
  };

  const [expanded, setExpanded] = React.useState<string[]>([]);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(
        isExpanded
          ? [...expanded, panel]
          : expanded.filter((item) => item !== panel),
      );
    };

  const column1Autoskola = FAQDataAutoskola.filter(
    (_, index) => index % 2 === 0,
  );
  const column2Autoskola = FAQDataAutoskola.filter(
    (_, index) => index % 2 !== 0,
  );
  const column1Profesni = FAQDataProfesni.filter((_, index) => index % 2 === 0);
  const column2Profesni = FAQDataProfesni.filter((_, index) => index % 2 !== 0);
  const column1Referencni = FAQDataReferencni.filter(
    (_, index) => index % 2 === 0,
  );
  const column2Referencni = FAQDataReferencni.filter(
    (_, index) => index % 2 !== 0,
  );

  return (
    <Box id="castedotazy" sx={{ mt: 5 }}>
      <Container sx={{ mt: 13, mb: 13 }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
          }}
        >
          <Grid container spacing={2} sx={{ width: "100%" }}>
            <Grid size={{ xs: 12, sm: 12, md: 12 }}>
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
                  Časté otázky
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 12 }}>
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
                  variant="h5"
                >
                  Autoškola
                </Typography>
              </Box>
            </Grid>

            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                {renderAccordionList(column1Autoskola)}
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                {renderAccordionList(column2Autoskola)}
              </Grid>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 12 }}>
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
                  variant="h5"
                >
                  Profesní školení řidičů
                </Typography>
              </Box>
            </Grid>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                {renderAccordionList(column1Profesni)}
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                {renderAccordionList(column2Profesni)}
              </Grid>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 12 }}>
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
                  variant="h5"
                >
                  Školení referentských řidičů
                </Typography>
              </Box>
            </Grid>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                {renderAccordionList(column1Referencni)}
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                {renderAccordionList(column2Referencni)}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

type TFAQ = {
  otazka: string;
  odpoved: string;
};

const FAQDataAutoskola: TFAQ[] = [
  {
    otazka: "Jak se mohu přihlásit do autoškoly?",
    odpoved:
      "Přihlásit se můžete osobně v kanceláři, telefonicky nebo prostřednictvím kontaktního formuláře na našich webových stránkách.",
  },
  {
    otazka: "Jaké skupiny řidičských oprávnění nabízíte?",
    odpoved: "AM, A1, A2, A, B, B+E, C, C+E, D",
  },
  {
    otazka: "Jaké doklady potřebuji k zahájení kurzu?",
    odpoved:
      "Platný občanský průkaz nebo pas, posudek o zdravotní způsobilosti od praktického lékaře, vyplněnou přihlášku.",
  },
  {
    otazka: "V jakém věku mohu začít s výcvikem?",
    odpoved:
      "Do kurzu se můžete přihlásit ještě před dosažením minimálního věku pro získání řidičského oprávnění. Praktická zkouška však musí proběhnout až po dosažení zákonem stanoveného věku.",
  },
  {
    otazka: "Jak dlouho trvá kurz autoškoly?",
    odpoved:
      "Délka kurzu závisí na druhu řidičského oprávnění a individuálním postupu studenta. Standardně trvá několik týdnů až měsíců.",
  },
  {
    otazka: "Jak probíhá teoretická výuka?",
    odpoved:
      "Teoretická výuka zahrnuje pravidla silničního provozu, dopravní značky, zásady bezpečné jízdy, první pomoc a základy údržby vozidla. Výuka probíhá v učebně autoškoly a je možné ji sledovat on-line.",
  },
  {
    otazka: "Jak probíhají praktické jízdy?",
    odpoved:
      "Praktická výuka probíhá pod vedením zkušeného instruktora. Jízdy si plánuje žadatel v aplikaci individuálně podle svých časových možností.",
  },
  {
    otazka: "Mohu si domluvit jízdy mimo běžnou pracovní dobu?",
    odpoved:
      "Ano, termíny jízd se snažíme přizpůsobit časovým možnostem klientů.",
  },
  {
    otazka: "Mohu si vybrat instruktora?",
    odpoved: "Ano, instruktora si spolu s termínem jízdy vybíráte v aplikaci.",
  },
  {
    otazka: "Nabízíte kondiční jízdy?",
    odpoved:
      "Ano. Kondiční jízdy jsou vhodné pro začínající i zkušené řidiče, kteří si chtějí obnovit jistotu za volantem.",
  },
  {
    otazka: "Lze platbu za kurz rozdělit na splátky?",
    odpoved:
      "Možnosti platby lze rozdělit do vícero splátek. Podmínkou je zaplacení celé částky do termínu zkoušky.",
  },
];

const FAQDataProfesni: TFAQ[] = [
  {
    otazka: "Kdo musí absolvovat profesní školení řidiče?",
    odpoved:
      "Profesní školení je určeno řidičům, kteří vykonávají svou činnost profesionálně a vztahují se na ně příslušné zákonné požadavky.",
  },
  {
    otazka: "Jaký je rozdíl mezi vstupním a pravidelným školením?",
    odpoved:
      "Přihlásit se můžete osobně, telefonicky nebo prostřednictvím kontaktního formuláře na našich webových stránkách. Po přihlášení obdržíte informace o termínech výuky a potřebných dokumentech.",
  },
  {
    otazka: "Jak dlouho trvá pravidelné školení řidičů?",
    odpoved: "Délka školení se řídí aktuální legislativou a typem školení.",
  },
  {
    otazka: "Získám po absolvování potvrzení?",
    odpoved:
      "Ano, každý účastník obdrží příslušné potvrzení nebo doklad o absolvování školení.",
  },
  {
    otazka: "Organizujete školení i pro firmy?",
    odpoved: "Ano, zajišťujeme školení jednotlivců i firemních kolektivů.",
  },
  {
    otazka: "Může školení proběhnout přímo v sídle firmy?",
    odpoved: "Po domluvě lze zajistit školení přímo u zaměstnavatele.",
  },
];

const FAQDataReferencni: TFAQ[] = [
  {
    otazka: "Kdo je referentský řidič?",
    odpoved:
      "Referentský řidič je zaměstnanec, který používá vozidlo v rámci pracovních povinností, i když řízení není jeho hlavní pracovní náplní.",
  },
  {
    otazka: "Je školení referentských řidičů povinné?",
    odpoved:
      "Povinnost školení stanovuje zaměstnavatel na základě právních předpisů a interních pravidel bezpečnosti práce.",
  },

  {
    otazka: "Jak často by měli být referentští řidiči školeni?",
    odpoved:
      "Doporučená frekvence vychází z interních předpisů zaměstnavatele a aktuální legislativy.",
  },
  {
    otazka: "Co je obsahem školení? ",
    odpoved:
      "Školení se zaměřuje zejména na: bezpečnost silničního provozu, prevenci dopravních nehod, odpovědnost řidiče, zásady ekonomické a bezpečné jízdy.",
  },
];

const renderAccordionList = (items: TFAQ[]) =>
  items.map((item) => (
    <Accordion key={item.otazka}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="subtitle2">{item.otazka}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{item.odpoved}</Typography>
      </AccordionDetails>
    </Accordion>
  ));
