"use client";

import { Inter } from "next/font/google";

import { createTheme } from "@mui/material/styles";

const font = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const lightTheme = createTheme({
  typography: {
    fontFamily: font.style.fontFamily,
  },
  palette: {
    mode: "light",
  },
});

export const darkTheme = createTheme({
  typography: {
    fontFamily: font.style.fontFamily,
  },
  palette: {
    mode: "dark",
  },
});
