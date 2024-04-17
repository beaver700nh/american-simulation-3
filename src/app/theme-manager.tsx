"use client";

import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";

import { PaletteMode, ThemeProvider } from "@mui/material";

import { darkTheme, lightTheme } from "@/theme";

type ColorModeContext = [
  mode: PaletteMode | null,
  setMode: Dispatch<SetStateAction<PaletteMode | null>>,
];

export const ColorModeContext = createContext<ColorModeContext | null>(null);

export default function ThemeManager({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mode, setMode] = useState<PaletteMode | null>(null);

  useEffect(() => {
    setMode(
      (window.localStorage.getItem("color-mode") as PaletteMode) ??
      (window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    );
  }, [])

  useEffect(() => {
    if (mode == null) return;

    window.localStorage.setItem("color-mode", mode);
  }, [mode]);

  return (
    <ColorModeContext.Provider
      value={[ mode, setMode ]}
    >
    <ThemeProvider
      theme={mode === "dark" ? darkTheme : lightTheme}
    >
      {children}
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export function useColorMode() {
  const context = useContext(ColorModeContext);

  if (!context) {
    throw new Error("useColorMode must be used within a ThemeManager");
  }

  return context;
}
