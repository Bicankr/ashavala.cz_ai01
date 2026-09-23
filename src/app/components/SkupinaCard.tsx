"use client";

import { Box, Fade, Slide, Typography } from "@mui/material";
import { TCenik } from "../lib/components";

export const CardSkupina = (props: { polozkaCeniku: TCenik }) => {
  return (
    <Fade in={true} timeout={3000}>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 1,
          p: 4,
          bgcolor: "white",
          color: "white",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          height: {
            xs: 50,
            sm: 100,
            md: 100,
          },
        }}
      >
        <Box
          aria-hidden="true"
          sx={{
            position: "absolute",
            inset: -24,
            backgroundImage: `url("${props.polozkaCeniku.iconPath}")`,
            backgroundSize: " 60% auto",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "blur(0px)",
            opacity: 0.15,
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
                fontSize: { xs: 15, sm: 30 },
              }}
              gutterBottom
            >
              {props.polozkaCeniku.skupina}
            </Typography>
          </Slide>
        </Box>
      </Box>
    </Fade>
  );
};
