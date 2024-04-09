"use client";

import { useContext } from "react";

import { AppBar, IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import { LightMode, DarkMode, Abc } from "@mui/icons-material";

import { ColorModeContext } from "@/contexts/color-mode";

export default function GlobalNav() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <AppBar
      position="sticky"
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
        >
          <Abc />
        </IconButton>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          onClick={colorMode.toggle}
          >
            {theme.palette.mode === "light" ?
            <LightMode /> :
            <DarkMode />}
          </IconButton>
        <span>Account</span>
      </Toolbar>
    </AppBar>
  );
}
