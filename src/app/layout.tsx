import { Box, CssBaseline } from "@mui/material";
import type { Metadata } from "next";
// import "./globals.css";

export const metadata: Metadata = {
  title: "Autoškola Havala",
  description: "Autoškola a školicí středisko Havala",
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
            background: "linear-gradient(180deg, #ebf0f7 0%, #c7cfdb 100%)",
            minHeight: "100vh",
          }}
        >
          {children}
        </Box>
        <CssBaseline />
      </body>
    </html>
  );
}
