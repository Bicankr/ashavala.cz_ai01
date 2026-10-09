import { Box, Container } from "@mui/material";
import { Oswald } from "next/font/google";
import { SkupinyData } from "../lib/components";
import { CardSkupina } from "./SkupinaCard";

const oswald = Oswald({ subsets: ["latin"], weight: "400" });

export default function Skupiny() {
  return (
    <Box>
      <Container sx={{}}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2,
            // backgroundColor: "rgb(0, 0, 0 , 60%)",
            backgroundImage: "url(/povrch.webp)",
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
