import { Box, Container } from "@mui/material";
import { Oswald } from "next/font/google";
import { skupiny, TCenik } from "../lib/components";

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
              xs: "repeat(3, minmax(0, 1fr))",
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

const CardSkupina = (props: { polozkaCeniku: TCenik }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 100,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        color: "#fff",
        borderRadius: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 18,
        fontWeight: "bold",
      }}
    >
      {props.polozkaCeniku.skupina}
    </Box>
  );
};
