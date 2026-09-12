import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Image from "next/image";

export default function Cenik() {
  return (
    <Box
      id="home"
      sx={(theme) => ({
        width: "100%",
        background: "linear-gradient(135deg, #406f9e 0%, #e2e8f0 100%)",
      })}
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
              {cenik.map(
                (polozkaCeniku: TCenik) =>
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

type TCenik = {
  popis: string;
  cena: number;
  skupina: string;
  imagePath?: string;
};

const cenik: TCenik[] = [
  {
    popis: "do 45 Km/h, 15 let",
    cena: 16000,
    skupina: "AM",
    imagePath: "/vozy/AM_HondaCPX125.png",
  },
  {
    popis: "max 11kW, 16 let",
    cena: 16000,
    skupina: "A1",
    imagePath: "/vozy/A1_HondaCB125.png",
  },
  {
    popis: "max 35kW, 18 let",
    cena: 17000,
    skupina: "A2",
    imagePath: "/vozy/HondaCB500F.gif",
  },
  {
    popis: "24 let",
    cena: 18000,
    skupina: "A",
    imagePath: "/vozy/A_Kawasaki650.png",
  },
  {
    popis: "2 roky praxe A1",
    cena: 6000,
    skupina: "A1/A2 rozšíření",
    imagePath: "/vozy/HondaCB500F.gif",
  },
  {
    popis: "2 roky praxe A2",
    cena: 6000,
    skupina: "A2/A rozšíření",
    imagePath: "/vozy/A_Kawasaki650.png",
  },
  {
    popis: "Vozidla do 3 500Kg, 18 let",
    cena: 20000,
    skupina: "B",
    imagePath: "/vozy/KamiqCernyLeva.png",
  },
  {
    popis: "Vozidla do 3 500Kg, 18 let, cizí jazyk",
    cena: 23000,
    skupina: "B foreign",
    imagePath: "/vozy/KamiqCernyLeva.png",
  },

  { popis: "B+E", cena: 8000, skupina: "B+E" },
  { popis: "C", cena: 22000, skupina: "C", imagePath: "/vozy/Iveco3.png" },
  {
    popis: "C+E",
    cena: 12000,
    skupina: "C+E",
    imagePath: "/vozy/Iveco2Vlek.png",
  },
  {
    popis: "24 let",
    cena: 40000,
    skupina: "B/D",
    imagePath: "/vozy/autobus.png",
  },
  {
    popis: "24 let",
    cena: 20000,
    skupina: "C/D",
    imagePath: "/vozy/autobus.png",
  },
  {
    popis: "18 let",
    cena: 8000,
    skupina: "B+E",
    imagePath: "/vozy/bewhite.jpeg",
  },
];

export function CenikObsah() {
  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
        {cenik.map(
          (polozkaCeniku: TCenik) =>
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

const PolozkaCeniku = (props: { polozkaCeniku: TCenik }) => {
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
