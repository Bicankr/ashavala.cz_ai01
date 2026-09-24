import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { Oswald } from "next/font/google";
import Image from "next/image";

const oswald = Oswald({ subsets: ["latin"], weight: "400" });

export default function ONas() {
  return (
    <Box id="onas">
      <Container sx={{}}>
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
                  backgroundColor: "rgb(0, 0, 0 , 5%)",
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
                  Proč si vybrat AUTOŠKOLU HAVALA
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "italic",
                    fontSize: { xs: 16, sm: 24 },
                    color: "black",
                  }}
                >
                  25+ let zkušeností se získáváním řidičských oprávnění a
                  profesních průkazů
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box
                sx={{
                  width: "100%",
                  textAlign: "center",
                  backgroundColor: "rgb(0, 0, 0 , 10%)",
                  mt: 1,
                  borderRadius: 2,
                }}
              >
                <Stack direction="row">
                  <Image
                    src="/vozy/VozovyPark.webp"
                    alt="Vozový park"
                    width={250}
                    height={160}
                    priority
                    style={{
                      display: "flex",
                      objectFit: "fill",
                      objectPosition: "center",
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center", // horizontálně
                      alignItems: "center", // vertikálně
                    }}
                  >
                    <Typography
                      sx={{
                        p: 1,
                        fontWeight: "bold",
                        fontSize: { xs: 16, sm: 24 },
                        color: "white",
                      }}
                    >
                      Rozsáhlý moderní vozový park
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box
                sx={{
                  width: "100%",
                  textAlign: "center",
                  backgroundColor: "rgb(0, 0, 0 , 10%)",
                  mt: 1,
                  borderRadius: 2,
                }}
              >
                <Stack direction="row">
                  <Image
                    src="/Instruktor.webp"
                    alt="Vozový park"
                    width={250}
                    height={160}
                    priority
                    style={{
                      display: "flex",
                      objectFit: "fill",
                      objectPosition: "center",
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center", // horizontálně
                      alignItems: "center", // vertikálně
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        p: 1,
                        fontWeight: "bold",
                        fontSize: { xs: 16, sm: 24 },
                        color: "black",
                      }}
                    >
                      Zkušení a trpěliví instruktoři
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box
                sx={{
                  width: "100%",
                  textAlign: "center",
                  backgroundColor: "rgb(0, 0, 0 , 10%)",
                  mt: 1,
                  borderRadius: 2,
                }}
              >
                <Stack direction="row">
                  <Image
                    src="/Uspesnost.webp"
                    alt="Vozový park"
                    width={250}
                    height={160}
                    priority
                    style={{
                      display: "flex",
                      objectFit: "fill",
                      objectPosition: "center",
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center", // horizontálně
                      alignItems: "center", // vertikálně
                    }}
                  >
                    <Typography
                      component="div"
                      sx={{
                        p: 1,
                        diaplay: "block",
                        fontWeight: "bold",
                        fontSize: { xs: 16, sm: 24 },
                        color: "black",
                        width: "100%",
                      }}
                    >
                      Úspěšnost 99% +
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box
                sx={{
                  width: "100%",
                  textAlign: "center",
                  backgroundColor: "rgb(0, 0, 0 , 10%)",
                  mt: 1,
                  borderRadius: 2,
                }}
              >
                <Stack direction="row">
                  <Image
                    src="/Absolventi.webp"
                    alt="Vozový park"
                    width={250}
                    height={160}
                    priority
                    style={{
                      display: "flex",
                      objectFit: "fill",
                      objectPosition: "center",
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center", // horizontálně
                      alignItems: "center", // vertikálně
                    }}
                  >
                    <Typography
                      sx={{
                        p: 1,
                        fontWeight: "bold",
                        fontSize: { xs: 16, sm: 24 },
                        color: "white",
                      }}
                    >
                      20 000+ absolventů
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box
                sx={{
                  width: "100%",
                  textAlign: "center",
                  backgroundColor: "rgb(0, 0, 0 , 10%)",
                  mt: 1,
                  borderRadius: 2,
                }}
              >
                <Stack direction="row">
                  <Image
                    src="/GoogleMeet.webp"
                    alt="Vozový park"
                    width={250}
                    height={160}
                    priority
                    style={{
                      display: "flex",
                      objectFit: "fill",
                      objectPosition: "center",
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center", // horizontálně
                      alignItems: "center", // vertikálně
                    }}
                  >
                    <Typography
                      component="div"
                      sx={{
                        p: 1,
                        diaplay: "block",
                        fontWeight: "bold",
                        fontSize: { xs: 16, sm: 24 },
                        color: "white",
                        width: "100%",
                      }}
                    >
                      Teoretická výuka živě <Box component="br" /> i on-line
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box
                sx={{
                  width: "100%",
                  textAlign: "center",
                  backgroundColor: "rgb(0, 0, 0 , 10%)",
                  mt: 1,
                  borderRadius: 2,
                }}
              >
                <Stack direction="row">
                  <Image
                    src="/ObjednavaniJizd.webp"
                    alt="Vozový park"
                    width={250}
                    height={160}
                    priority
                    style={{
                      display: "flex",
                      objectFit: "fill",
                      objectPosition: "center",
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center", // horizontálně
                      alignItems: "center", // vertikálně
                    }}
                  >
                    <Typography
                      sx={{
                        p: 1,
                        fontWeight: "bold",
                        fontSize: { xs: 16, sm: 24 },
                        color: "black",
                      }}
                    >
                      Volba termínů výcviku <br />a instruktora v aplikaci
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
