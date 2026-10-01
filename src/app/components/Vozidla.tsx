import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { Oswald } from "next/font/google";
import Image from "next/image";
import { TVozidlaData, VozidlaData } from "../lib/components";
const oswald = Oswald({ subsets: ["latin"], weight: "400" });

export default function Vozidla() {
  return (
    <Box id="vozidla" sx={{ mt: 5 }}>
      <Container sx={{ mt: 13 }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
          }}
        >
          <Grid container spacing={2} sx={{ width: "100%" }}>
            <Grid size={{ xs: 12, sm: 12 }}>
              <Box
                sx={{
                  width: "100%",
                  p: 3,
                  textAlign: "center",
                  backgroundColor: "rgb(0, 0, 0 , 30%)",
                  mt: 1,
                  borderRadius: 2,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "lightgray",
                    fontFamily: "oswald",
                  }}
                  variant="h4"
                >
                  Na čem a v čem budete jezdit
                </Typography>
              </Box>
            </Grid>
            {VozidlaData.map((polozka: TVozidlaData) => (
              <PolozkaVozidla key={polozka.imagePath} {...polozka} />
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

const PolozkaVozidla = (props: TVozidlaData) => {
  return (
    <Grid size={{ xs: 12, sm: 6 }}>
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          backgroundColor: "rgb(0, 0, 0 , 10%)",
          mt: 1,
          borderRadius: 2,
          p: 1,
        }}
      >
        <Stack direction="row">
          <div style={{ position: "relative", width: 3000, height: 200 }}>
            <Image
              src={props.imagePath}
              alt="Group B"
              fill
              sizes="300px"
              style={{ objectFit: "contain" }}
            />
          </div>

          <Box
            sx={{
              width: "100%",
            }}
          >
            <Typography
              sx={{
                m: 3,
                fontWeight: "bold",
                fontSize: { xs: 16, sm: 24 },
                color: "black",
              }}
            >
              {props.skupina}
            </Typography>
            <Typography
              sx={{
                m: 3,
                fontWeight: "bold",
                fontSize: { xs: 16, sm: 16 },
                color: "black",
              }}
            >
              {props.popis}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Grid>
  );
};
