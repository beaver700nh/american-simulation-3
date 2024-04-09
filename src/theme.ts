"use client";

import { Inter } from "next/font/google";

import { ThemeOptions, createTheme } from "@mui/material/styles";

const font = Inter({
  subsets: ["latin"],
  display: "swap",
});

const baseTheme = {
  typography: {
    fontFamily: font.style.fontFamily,
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: "large",
        color: "inherit",
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: "large",
        color: "inherit",
      },
    },
  },
} as ThemeOptions;

export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "light",
  },
});

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "dark",
  },
});
