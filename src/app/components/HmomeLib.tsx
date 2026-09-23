"use client";
import { SvgIconComponent } from "@mui/icons-material";
import { Card, CardContent, Typography } from "@mui/material";

export const ChlubCard = (props: {
  icon: SvgIconComponent;
  nadpis: string;
  text: string;
  color?: string;
}) => {
  return (
    <Card
      sx={{
        width: 100,
        backgroundColor: "transparent",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <props.icon
          sx={{
            fontSize: "35px",
            color: props.color ? props.color : "white",
          }}
        />
        <Typography
          sx={{ fontWeight: "bold", fontSize: "15px", textWrap: "nowrap" }}
          variant="h5"
        >
          {props.nadpis}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "10px" }}>
          {props.text}
        </Typography>
      </CardContent>
    </Card>
  );
};
