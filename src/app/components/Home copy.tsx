import { Diamond, SvgIconComponent, ThumbUp } from "@mui/icons-material";
import {
  alpha,
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import { Oswald } from "next/font/google";
import Image from "next/image";

export const ChlubCard = (props: {
  icon: SvgIconComponent;
  nadpis: string;
  text: string;
}) => {
  return (
    <Card
      sx={{
        width: 150,
        backgroundColor: "transparent",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <props.icon sx={{ fontSize: "35px" }} />
        <Typography sx={{ fontWeight: "bold" }} variant="h5">
          {props.nadpis}
        </Typography>
        <Typography variant="body1">{props.text}</Typography>
      </CardContent>
    </Card>
  );
};

const oswald = Oswald({ subsets: ["latin"], weight: "400" });
function Ukazka() {
  return (
    <>
      <HeroBanner /> <HeroBanner1 />
      <Box
        sx={{
          position: "relative",
          width: "100%",
          // height: "15500px",
          // maxHeight: "750px", // tvoje maximální výška
          overflow: "hidden", // ořízne přetékající části
          mt: "55px",
        }}
      >
        <Container
          sx={{
            width: "100%",
          }}
        >
          <Box
            sx={{
              position: "relative",
              top: "55px",
              left: "0px",
              width: "600px",
              zIndex: 1,
              p: "10px",
              backgroundColor: (theme) =>
                alpha(theme.palette.primary.main, 0.4),
            }}
          >
            <Typography
              sx={{
                color: "whitesmoke",
                fontSize: "12px",
                fontWidth: "bold",
                fontFamily: "Arial, sans-serif",
                fontWeight: "bold",
              }}
            >
              AUTOŠKOLA A ŠKOLICÍ STŘEDISKO HAVALA - OLOMOUC
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: "75px",
                fontWeight: "bold",
                fontFamily: "oswald",
              }}
            >
              AUTOŠKOLA HAVALA
            </Typography>
            <Typography
              sx={{
                color: "rgb(55, 155, 255, 1)",
                fontSize: "75px",
                fontWeight: "bold",
                fontFamily: "oswald",
              }}
            >
              VÁŠ ŘIDIČÁK
            </Typography>
            <Stack direction="row" spacing={2}>
              <ChlubCard icon={Diamond} nadpis="25+" text="let zkušeností" />
              <ChlubCard icon={Diamond} nadpis="20 000+" text="absolventů" />
              <ChlubCard icon={ThumbUp} nadpis="99%+" text="úspěšnost" />
            </Stack>
            <Typography
              sx={{
                color: "whitesmoke",
                fontSize: "16px",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              Začněte s jistotou.
              <br />
              Od první jízdy až ke zkoušce.
            </Typography>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                backgroundColor: "rgb(55, 155, 255, 1)",
                color: "white",
                marginTop: "20px",
              }}
            >
              Chci začít
            </Button>
          </Box>
          <Box sx={{ position: "static", top: "0px", left: "0px" }}>
            <Image
              src="/olomouc-kamiq.png"
              alt="Example"
              fill
              style={{
                objectFit: "contain", // vyplní box
              }}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
}

function HeroBanner() {
  // Cesta k obrázku (např. v složce /public/images/bg.jpg)
  const imageUrl = "/olomouc-kamiq.png";

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        // Na mobilu: text nahoře, obrázek dole (column-reverse)
        // Od 'md' (tablet/desktop): standardní řádkový/překrývaný koncept
        flexDirection: { xs: "column-reverse", md: "row" },
        position: "relative",
        minHeight: { md: "500px" }, // Výška pro desktop
        backgroundColor: "#f5f5f5", // Záložní pozadí
        overflow: "hidden",
      }}
    >
      {/* 1. SEcontact/TEXT OBLAST */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: { xs: 4, md: 6 },
          zIndex: 2,
          // Na desktopu uděláme z textu vrstvu přes obrázek (pokud chcete text přímo nad fotkou)
          // Pokud chcete text vedle nebo s průhledným pozadím přes fotku:
          position: { xs: "relative", md: "absolute" },
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          color: { xs: "text.primary", md: "#ffffff" }, // Na mobilu tmavý text, na fotce bílý
          background: {
            xs: "transparent",
            // Na desktopu jemný tmavý přechod pod textem pro lepší čitelnost
            md: "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%)",
          },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: { md: "50%" } }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
              }}
            >
              Váš Hlavní Nadpis
            </Typography>
            <Typography
              variant="h6"
              // paragraph
              sx={{
                opacity: 0.9,
                mb: 3,
                fontSize: { xs: "1rem", md: "1.25rem" },
              }}
            >
              Tento text je na mobilu umístěn přehledně nad obrázkem, zatiaľ čo
              na velkých obrazovkách plave přímo přes responzivní pozadí.
            </Typography>
            <Button variant="contained" color="primary" size="large">
              Akční tlačítko
            </Button>
          </Box>
        </Container>
      </Box>

      {/* 2. OBRÁZEK POZADÍ */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "250px", sm: "350px", md: "100%", lg: "100%" },
          position: { xs: "relative", md: "absolute" },
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Image
          src="/olomouc-kamiq.png"
          alt="Example"
          fill
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
        {/* <Box
          component="img"
          src={imageUrl}
          alt="Pozadí"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        /> */}
      </Box>
    </Box>
  );
}

export default function HeroBanner1() {
  const imageUrl = "/olomouc-kamiq.png";

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        // Mobil: Text nahoře, pod ním celý obrázek
        // Desktop: Text překrývá obrázek
        flexDirection: { xs: "column-reverse", md: "row" },
        position: "relative",
        backgroundColor: "#f5f5f5",
        overflow: "hidden",
      }}
    >
      {/* 1. TEXTOVÁ OBLAST */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: { xs: 3, sm: 4, md: 6 },
          zIndex: 2,
          // Mobil: běžný blok textu nad obrázkem
          // Desktop: překrývající vrstva absolutně přes obrázek
          position: { xs: "relative", md: "absolute" },
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          color: { xs: "text.primary", md: "#ffffff" },
          background: {
            xs: "transparent",
            // Tmavý přechod na desktopu pro čitelnost bílého textu
            md: "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)",
          },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: { md: "50%" } }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3.5rem" },
              }}
            >
              Váš Hlavní Nadpis
            </Typography>
            <Typography
              variant="h6"
              sx={{
                opacity: 0.9,
                mb: 3,
                fontSize: { xs: "0.95rem", md: "1.25rem" },
              }}
            >
              Tento text je na mobilu umístěn nad celým nesmrštěným obrázkem. Na
              desktopu pak překrývá obrázek na pozadí.
            </Typography>
            <Button variant="contained" color="primary" size="large">
              Akční tlačítko
            </Button>
          </Box>
        </Container>
      </Box>

      {/* 2. OBRÁZEK (ZOBRAZENÍ CELÉ VÝŠKY) */}
      <Box
        sx={{
          width: "100%",
          // Mobil: Pozice relative, výška podle obrázku
          // Desktop: Pozice absolute přes celý kontejner
          position: { xs: "relative", md: "absolute" },
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={imageUrl}
          alt="Pozadí"
          sx={{
            width: "100%",
            height: "auto", // Ponechá přirozenou výšku na mobilu
            maxHeight: { md: "100%" },
            // Zobrazí celý obrázek bez jakéhokoliv ořezu
            objectFit: { xs: "contain", md: "cover" }, // Nebo použijte 'contain' i na desktopu, pokud fotka nesmí být oříznuta vůbec nikdy
            display: "block",
          }}
        />
      </Box>
    </Box>
  );
}
