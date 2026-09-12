import { Box, Typography } from "@mui/material";

export default function SluzbyHeader() {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
      <Typography sx={{ fontWeight: "bold" }} variant="body2">
        výuka a výcvik pro všechny skupiny řidičského oprávnění
      </Typography>
      <Typography variant="body1">dvacetiletá tradice </Typography>
      <Typography sx={{ fontWeight: "bold" }} variant="body2">
        20 000 spokojených žadatelů
      </Typography>
      <Typography variant="body1">
        trvale vysoká úspěšnost při závěrečných zkouškách
      </Typography>
      <Typography sx={{ fontWeight: "bold" }} variant="body2">
        hladký průběh a časová flexibilita při provádění výcviku
      </Typography>
      <Typography variant="body1">široká základna instruktorů</Typography>
      <Typography sx={{ fontWeight: "bold" }} variant="body2">
        rozsáhlý vozový park
      </Typography>
    </Box>
  );
}
