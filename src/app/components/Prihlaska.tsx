import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import dbConnect from "../lib/dbConnect";
import { serializeJSON } from "../lib/lib";
import { Zadatel } from "../models/ZadatelModel";
import PrihlaskaClient from "./PrihlaskaClient";

export default async function Prihlaska() {
  await dbConnect();
  const zadatel = await Zadatel.findOne({}).lean();

  return (
    <Box id="prihlaska" sx={{ mt: 5 }}>
      <Container sx={{ mt: 13 }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
          }}
        >
          <Grid container spacing={2} sx={{ width: "100%" }}>
            <Grid size={{ xs: 12, sm: 12, md: 12 }}>
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
                  Přihláška do autoškoly
                </Typography>
              </Box>
            </Grid>
            <Stack sx={{ width: "100%" }}>
              <PrihlaskaClient defaultValues={serializeJSON(zadatel)} />
            </Stack>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
