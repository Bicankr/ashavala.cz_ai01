import styled from "@emotion/styled";

export const StyledBox = styled("div")(({ theme }) => ({
  alignSelf: "center",
  width: "100%",
  height: 400,

  outline: "6px solid",
  outlineColor: "hsla(220, 25%, 80%, 0.2)",
  border: "1px solid",

  boxShadow: "0 0 12px 8px hsla(220, 25%, 80%, 0.2)",
  // backgroundImage: `url(${process.env.TEMPLATE_IMAGE_URL || "https://mui.com"}/static/screenshots/material-ui/getting-started/templates/dashboard.jpg)`,
  backgroundSize: "cover",
}));
