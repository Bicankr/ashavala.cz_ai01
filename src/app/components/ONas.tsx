import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { Oswald } from "next/font/google";
import Image from "next/image";
const oswald = Oswald({ subsets: ["latin"], weight: "400" });

export default function ONas() {
  return (
    <Box id="onas">
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
                  backgroundColor: "rgb(0, 0, 0 , 5%)",
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
                  Proč si vybrat AUTOŠKOLU HAVALA
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "italic",
                    fontSize: { xs: 16, sm: 24 },
                    color: "black",
                  }}
                >
                  25+ let zkušeností se získáváním řidičských oprávnění a
                  profesních průkazů
                </Typography>
              </Box>
            </Grid>
            {data.map((polozka: TPolozka) => (
              <Polozka
                key={polozka.text}
                picture={polozka.picture}
                text={polozka.text}
                barvaTextu={polozka.barvaTextu}
              />
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

type TPolozka = {
  picture: string;
  text: string;
  barvaTextu: string;
};
const Polozka = (props: TPolozka) => {
  return (
    <Grid size={{ xs: 12, sm: 6 }}>
      <Box
        sx={{
          textAlign: "center",
          backgroundColor: "rgb(0, 0, 0 , 10%)",
          mt: 1,
          borderRadius: 2,
        }}
      >
        <Stack direction="row">
          {/* <Image
            src={props.picture}
            alt={props.text}
            width={300}
            height={200}
            priority
            style={{
              borderRadius: "2%",
              width: "300px",
              height: "200px",
            }}
          /> */}
          <div
            style={{ position: "relative", width: "300px", height: "200px" }}
          >
            <Image
              src={props.picture}
              alt="Group B"
              fill
              sizes="300px"
              style={{ objectFit: "fill" }}
            />
          </div>
          <Box
            sx={{
              display: "flex",
              width: "40%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                p: 1,
                fontWeight: "bold",
                fontSize: { xs: 16, sm: 24 },
                color: props.barvaTextu,
              }}
            >
              {props.text}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Grid>
  );
};

const data: TPolozka[] = [
  {
    text: "Moderní vozový park",
    picture: "/VozovyPark.webp",
    barvaTextu: "white",
  },
  {
    text: "Zkušení a trpěliví instruktoři",
    picture: "/Instruktor.webp",
    barvaTextu: "black",
  },
  { text: "Úspěšnost 99% +", picture: "/Uspesnost.webp", barvaTextu: "black" },
  {
    text: "20 000+ absolventů",
    picture: "/Absolventi.webp",
    barvaTextu: "white",
  },
  {
    text: "Teoretická výuka živě i\u00A0on\u2011line",
    picture: "/GoogleMeet.webp",
    barvaTextu: "white",
  },
  {
    text: "Objednávka termínů výcviku a instruktora v\u00A0aplikaci",
    picture: "/ObjednavaniJizd.webp",
    barvaTextu: "black",
  },
];
