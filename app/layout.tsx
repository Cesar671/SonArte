"use client";
import "./globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, Container } from "@mui/material";
import Theme from "./theme";
import TopMenu from "./ui/TopMenu";
import {useTheme} from "@mui/material";
import Footer from "./ui/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useTheme();
  console.log(theme.palette.background.default);
  return (
    <html lang="es">
      <Theme>
        <body>
          <Box
            sx={{
              width:"100%",
              height:"100%",
              position:"fixed",
              zIndex:-10,
              top:0
            }}
          >
          </Box>
            <TopMenu />
            {children}
          
          <Footer />
        </body>
      </Theme>
    </html>
  );
}
