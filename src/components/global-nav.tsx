"use client";

import { useContext, useMemo } from "react";

import { AppBar, IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import { LightMode, DarkMode, AccountCircle } from "@mui/icons-material";

import { useColorMode } from "@/components/theme-manager";

export default function GlobalNav() {
  const theme = useTheme();
  const [colorMode, setColorMode] = useColorMode();

  const toggleColorMode = useMemo(() => () => {
    setColorMode(mode => mode === "light" ? "dark" : "light");
  }, [setColorMode]);

  return (
    <AppBar
      position="sticky"
    >
      <Toolbar>
        <Typography
          className="grow"
        >
          American Simulation
        </Typography>
        <IconButton
          onClick={toggleColorMode}
          title="Toggle Theme"
        >
          {theme.palette.mode === "light" ?
          <LightMode /> :
          <DarkMode />}
        </IconButton>
        <IconButton
          edge="end"
          title="Account Info"
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
