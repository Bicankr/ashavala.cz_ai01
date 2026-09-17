import { Box, Container } from "@mui/material";
import Image from "next/image";
import { HeroText } from "./Home";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        component="section"
        sx={{
          position: "relative",
          width: "100%",
          height: "80vh", // Výška 80 % obrazovky (můžete změnit na 100vh pro úplný full-screen)
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          mt: 10,
        }}
      >
        {/* Optimalizovaný Next.js Obrázek na pozadí */}
        <Image
          src="/olomouc-kamiq.png"
          alt="Úvodní obrázek webu"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            zIndex: -2,
          }}
        />

        {/* Tmavá překryvná vrstva pro lepší čitelnost textu */}
        {/* <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)", // Ztmaví pozadí o 40 %
          zIndex: -1,
        }}
      /> */}

        {/* Obsah nad obrázkem */}
        <Container maxWidth="lg" sx={{ textAlign: "center", mt: -10 }}>
          <HeroText />
        </Container>
      </Box>
    </Container>
  );
}
