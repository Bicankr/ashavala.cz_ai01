import { Box, Button, Container, Stack, Typography } from "@mui/material";

export default function Test() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: { xs: 10, sm: 11 },
        pb: { xs: 8, sm: 12 },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "500px",
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: 3,
        }}
      >
        {/* 1. Vrstva na pozadí - obrázek s průhledností */}
        <Box
          component="img"
          src="/cesta3.jpg"
          alt="Obrázek"
          sx={{
            width: "100%",
            height: "100%",
            display: "block",
            opacity: 0.5, // Průhlednost se aplikuje POUZE na obrázek
          }}
        />

        {/* 2. Horní vrstva - text a prvky BEZ opacity (100% viditelnost) */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
          }}
        >
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Box
              sx={{
                maxWidth: "800px",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "brown",
                  backgroundPosition: "center",
                  opacity: 0.7,
                  zIndex: 0,
                },
              }}
            >
              <Stack
                direction="row"
                spacing={2}
                useFlexGap
                sx={{
                  position: "relative",
                  zindex: 0,
                  flexWrap: "wrap",
                  maxWidth: "100%",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "24px",
                    color: "white",
                    wrap: "nowrap",
                    whiteSpace: "nowrap",
                  }}
                >
                  Autoškola a školicí středisko
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "18px",
                    color: "lightgray",
                    textAlign: "center",
                  }}
                >
                  výuka a výcvik pro všechny skupiny řidičského oprávnění
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "24px", color: "white" }}
                >
                  více než dvacetiletá tradice
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "18px", color: "lightgray" }}
                >
                  více než 20 000 spokojených žadatelů
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "24px", color: "white", textAlign: "center" }}
                >
                  trvale vysoká úspěšnost při závěrečných zkouškách
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "18px",
                    color: "lightgray",
                    textAlign: "center",
                  }}
                >
                  hladký průběh a časová flexibilita při provádění výcviku
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "24px", color: "white" }}
                >
                  široká základna instruktorů
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "18px",
                    color: "lightgray",
                  }}
                >
                  rozsáhlý vozový park
                </Typography>
              </Stack>
            </Box>
          </Box>
          <Typography variant="h5" component="h2" color="text.primary">
            Nadpis navrchu
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Tento text je plně viditelný bez opacity.
          </Typography>
          <Button variant="contained">Akce</Button>
        </Box>
      </Box>
    </Container>
  );
}
