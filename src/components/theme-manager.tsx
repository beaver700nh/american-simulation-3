"use client";

import { useMemo, useState } from "react";

import { PaletteMode, ThemeProvider } from "@mui/material";

import { darkTheme, lightTheme } from "@/theme";
import { ColorModeContext } from "@/contexts/color-mode";

export default function ThemeManager({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mode, setMode] = useState<PaletteMode>("light");
  const setColorMode = useMemo(() => ({
    toggle: () => setMode(prev => (prev === "light" ? "dark" : "light")),
  }), []);

  return (
    <ColorModeContext.Provider value={setColorMode}>
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
