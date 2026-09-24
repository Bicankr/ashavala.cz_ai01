"use server";
import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Image from "next/image";
import { SkupinyData, TSkupinyData } from "../lib/components";

export default async function Cenik() {
  return (
    <Box
      id="home"
      sx={{
        display: "flex",
        width: "100%",
        // background: "linear-gradient(135deg, #406f9e 0%, #e2e8f0 100%)",
        mt: { xs: 38, sm: 1 },
      }}
    >
      <Container
        id="cenik"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          pt: { xs: 10, sm: 11 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography
            component="h2"
            variant="h4"
            gutterBottom
            sx={{ color: "text.primary" }}
          >
            Ceník
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            Aktuální ceník pro výuku a výcvik.
          </Typography>
        </Box>
        <Box
          sx={{
            borderRadius: 2,

            padding: 4,
            position: "relative",
            width: "100%",
            mt: 8,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "",

            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.9,
              zIndex: 0,
            },
          }}
        >
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Grid
              container
              spacing={3}
              sx={{ alignItems: "center", justifyContent: "center" }}
            >
              {SkupinyData.map(
                (polozkaCeniku: TSkupinyData) =>
                  polozkaCeniku.imagePath && (
                    <Grid key={polozkaCeniku.skupina}>
                      <PolozkaCeniku polozkaCeniku={polozkaCeniku} />
                    </Grid>
                  ),
              )}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export async function CenikObsah() {
  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
        {SkupinyData.map(
          (polozkaCeniku: TSkupinyData) =>
            polozkaCeniku.imagePath && (
              <Grid key={polozkaCeniku.skupina}>
                <PolozkaCeniku polozkaCeniku={polozkaCeniku} />
              </Grid>
            ),
        )}
      </Grid>
    </>
  );
}

const PolozkaCeniku = (props: { polozkaCeniku: TSkupinyData }) => {
  return (
    <Card sx={{ width: 350 }}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textAlign: "right" }}
        >
          {`${props.polozkaCeniku.cena} Kč`}
        </Typography>
        <Image
          src={props.polozkaCeniku.imagePath ?? ""}
          alt={"alt"}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          width={300}
          height={200}
          style={{
            objectFit: "contain", // Ořízne přebytky a vyplní celý rámec bez deformace
            objectPosition: "center", // Zaměří středy obrázků
          }}
        />
        <Typography gutterBottom variant="h5" component="div">
          {props.polozkaCeniku.skupina}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {props.polozkaCeniku.popis}
        </Typography>
      </CardContent>
    </Card>
  );
};
