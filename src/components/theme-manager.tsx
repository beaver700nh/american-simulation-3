"use client";

import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

import { PaletteMode, ThemeProvider } from "@mui/material";

import { darkTheme, lightTheme } from "@/theme";

type ColorModeContext = [
  mode: PaletteMode,
  setMode: Dispatch<SetStateAction<PaletteMode>>,
];

export const ColorModeContext = createContext<ColorModeContext | null>(null);

export default function ThemeManager({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mode, setMode] = useState<PaletteMode>("light");

  return (
    <ColorModeContext.Provider
      value={[ mode, setMode ]}
    >
    <ThemeProvider
      theme={mode === "light" ? lightTheme : darkTheme}
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
