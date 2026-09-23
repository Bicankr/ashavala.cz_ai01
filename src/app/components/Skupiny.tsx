import { Box, Container } from "@mui/material";
import { Oswald } from "next/font/google";
import { skupiny } from "../lib/components";
import { CardSkupina } from "./SkupinaCard";

const oswald = Oswald({ subsets: ["latin"], weight: "400" });

export default function Skupiny() {
  return (
    <Box>
      <Container sx={{}}>
        <Box
          sx={{
            display: "grid",
            p: 1,
            backgroundColor: "rgb(0, 0, 0 )",
            gridTemplateColumns: {
              xs: "repeat(4, minmax(0, 1fr))",
              sm: "repeat(6, minmax(0, 1fr))",
              md: "repeat(9, minmax(0, 1fr))",
            },
            gap: 2,
          }}
        >
          {skupiny.map((polozka) => (
            <CardSkupina key={polozka.skupina} polozkaCeniku={polozka} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
