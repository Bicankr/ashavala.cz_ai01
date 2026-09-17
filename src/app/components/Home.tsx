"use server";
import { Diamond, Group, SvgIconComponent, ThumbUp } from "@mui/icons-material";
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
import { blue } from "@mui/material/colors";
import { Oswald } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const oswald = Oswald({ subsets: ["latin"], weight: "400" });
export default async function Home(props: { img: string }) {
  return (
    <Container maxWidth="lg">
      <Box
        component="section"
        sx={{
          position: { xs: "initial", sm: "relative" },
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          height: { xs: "auto", sm: "auto" },
          mt: "80px",
        }}
      >
        <Image
          src={
            props.img === "den" ? "/olomouc-scala.png" : "/olomouc-kamiq.png"
          }
          alt="Autoškola Havala Olomouc"
          fill
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center",
            zIndex: -2,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0)", // Ztmaví pozadí o 40 %
            zIndex: -1,
          }}
        />

        {/* Obsah nad obrázkem */}
        <Container sx={{ textAlign: "center" }}>
          <HeroText />
        </Container>
      </Box>
    </Container>
  );
}

export const ChlubCard = async (props: {
  icon: SvgIconComponent;
  nadpis: string;
  text: string;
  color?: string;
}) => {
  return (
    <Card
      sx={{
        width: 100,
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
        <props.icon
          sx={{ fontSize: "35px", color: props.color ? props.color : "white" }}
        />
        <Typography sx={{ fontWeight: "bold", fontSize: "15px" }} variant="h5">
          {props.nadpis}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "10px" }}>
          {props.text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export const HeroText = async () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          maxWidth: { xs: "100%", md: "50%", borderRadius: "5px" },
          p: 3,
          backgroundColor: alpha(blue[800], 0.8),
          m: { xs: 1, sm: 3 },
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
            fontSize: "35px",
            fontWeight: "bold",
            fontFamily: "oswald",
          }}
        >
          AUTOŠKOLA HAVALA
        </Typography>
        <Typography
          sx={{
            color: "rgb(55, 155, 255, 1)",
            fontSize: "25px",
            fontWeight: "bold",
            fontFamily: "oswald",
          }}
        >
          VÁŠ ŘIDIČÁK
        </Typography>
        <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
          <ChlubCard
            icon={Diamond}
            nadpis="25+"
            text="let zkušeností"
            color="gold"
          />
          <ChlubCard
            icon={Group}
            nadpis="20 000+"
            text="absolventů"
            color="white"
          />
          <ChlubCard
            icon={ThumbUp}
            nadpis="99%+"
            text="úspěšnost"
            color="lightgreen"
          />
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
        <Link href="/?img=den">
          <Button variant="outlined">Den</Button>
        </Link>
        <Link href="/?img=noc">
          <Button variant="outlined">Noc</Button>
        </Link>
      </Box>
    </Container>
  );
};
