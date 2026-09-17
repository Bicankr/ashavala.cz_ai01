import { Box, CssBaseline } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autoškola Havala Olomouc",
  description: "Autoškola a školicí středisko Havala Olomouc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {children}
        </Box>
        <CssBaseline />
      </body>
    </html>
  );
}
