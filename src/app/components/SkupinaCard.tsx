"use client";

import { Box, Fade, Slide, Typography } from "@mui/material";
import { TSkupinyData } from "../lib/components";

export const CardSkupina = (props: { skupinaData: TSkupinyData }) => {
  return (
    <Fade in={true} timeout={3000}>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 1,
          m: 1,
          pt: 1,
          bgcolor: "white",
          color: "white",
          width: "80px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          height: {
            xs: 70,
            sm: 70,
            md: 70,
          },
        }}
      >
        <Box
          aria-hidden="true"
          sx={{
            position: "absolute",
            inset: -24,
            backgroundImage: `url("${props.skupinaData?.iconPath}")`,
            backgroundSize: " 60% auto",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "blur(0px)",
            opacity: 0.15,
            width: "auto",
            height: "auto",
            pointerEvents: "none",
          }}
        />

        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Slide direction="up" in={true} mountOnEnter unmountOnExit>
            <Typography
              sx={{
                color: "black",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: { xs: 24, sm: 30 },
              }}
              gutterBottom
            >
              {props.skupinaData.skupina}
            </Typography>
          </Slide>
        </Box>
      </Box>
    </Fade>
  );
};
