import { Box, Container } from "@mui/material";
import { Oswald } from "next/font/google";
import { SkupinyData } from "../lib/components";
import { CardSkupina } from "./SkupinaCard";

const oswald = Oswald({ subsets: ["latin"], weight: "400" });

export default async function Skupiny() {
  "use cache";
  return (
    <Box>
      <Container sx={{}}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2,
            position: "relative",
            overflow: "hidden",

            backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.5)), url('/povrch.webp')`,
          }}
        >
          {SkupinyData.filter((polozka) => polozka.prezentace).map(
            (polozka) => (
              <CardSkupina key={polozka.skupina} skupinaData={polozka} />
            ),
          )}
        </Box>
      </Container>
    </Box>
  );
}
