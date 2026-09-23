import { Box, CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
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
        <AppRouterCacheProvider>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              background: "linear-gradient(135deg, #406f9e 0%, #e2e8f0 100%)",
            }}
          >
            {children}
          </Box>
          <CssBaseline />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
