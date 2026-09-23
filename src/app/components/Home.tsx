"use client";
import { gray } from "@/shared-theme/themePrimitives";
import { Diamond, Group, ThumbUp } from "@mui/icons-material";
import {
  alpha,
  Button,
  Container,
  Stack,
  Typography,
  Zoom,
} from "@mui/material";
import Box from "@mui/material/Box";
import { Oswald } from "next/font/google";
import Image from "next/image";
import React from "react";
import { ChlubCard } from "./HmomeLib";

const oswald = Oswald({ subsets: ["latin"], weight: "400" });

export default function Home(props: { img: string }) {
  return (
    <Container maxWidth="lg" id="home">
      <Box
        sx={{
          position: { xs: "relative", sm: "relative" },
          overflow: "hidden",
          display: "flex",
          color: "#fff",
          height: { xs: "auto", sm: "auto" },
          mt: "80px",
          zIndex: 1,
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
            backgroundColor: "rgba(0, 0, 0, 0)",
            zIndex: -1,
          }}
        />

        <Container sx={{ textAlign: "center" }} disableGutters>
          <CustomBox />
        </Container>
      </Box>
    </Container>
  );
}

export const HeroText = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          maxWidth: { xs: "100%", md: "50%", borderRadius: "5px" },
          p: 3,
          backgroundColor: alpha(gray[800], 0.5),
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
        <Zoom in={true}>
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
        </Zoom>
        <Zoom in={true} style={{ transitionDelay: "500ms" }}>
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
        </Zoom>
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
      </Box>
    </Container>
  );
};

const CustomBox = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <div ref={ref} {...props}>
    <HeroText />
  </div>
));
