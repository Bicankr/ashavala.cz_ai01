import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { Oswald } from "next/font/google";
import Image from "next/image";
import { SkupinyData, TSkupinyData } from "../lib/components";
const oswald = Oswald({ subsets: ["latin"], weight: "400" });

export default function Cenik() {
  return (
    <Box id="cenik" sx={{ mt: 5 }}>
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
                  Ceník
                </Typography>
              </Box>
            </Grid>
            {SkupinyData.filter((polozka) => polozka.cenik).map(
              (polozka: TSkupinyData) => (
                <Polozka key={polozka.skupina} {...polozka} />
              ),
            )}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

const Polozka = (props: TSkupinyData) => {
  return (
    <Grid size={{ xs: 12, sm: 6 }}>
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          backgroundColor: "rgb(0, 0, 0 , 10%)",
          mt: 1,
          borderRadius: 2,
          pl: 1,
        }}
      >
        <Stack direction="row">
          <div style={{ position: "relative", width: 300, height: 200 }}>
            <Image
              src={props.iconPath}
              alt="Group B"
              fill
              sizes="300px"
              // style={{ objectFit: "cover" }}
            />
          </div>

          {/* <Image
            src={props.iconPath}
            alt="Vozový park"
            width={250}
            height={0}
            priority
            style={{
              borderRadius: "2%",
              width: "250px",
              height: "auto",
            }}
          /> */}

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
                fontSize: { xs: 24, sm: 36 },
                color: "whitesmoke",
              }}
            >
              {props.cena}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Grid>
  );
};
