/* eslint-disable @next/next/no-head-element */
"use client";

import { Box } from "@mui/system";
import Link from "next/link";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import "./globals.css";
const darkTheme = createTheme({
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#80cbc4",
    },
    secondary: {
      main: "#00897b",
    },
  },
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <body>
          <main>
            <Box width={4 / 5} m="auto" bgcolor={"dodgerblue"}>
              <nav>
                <Link href="/">Home</Link>
                <Link href="/blog">Blog</Link>
              </nav>
              {children}
            </Box>
          </main>
        </body>
      </ThemeProvider>
    </html>
  );
}
