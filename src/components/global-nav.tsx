"use client";

import { useContext } from "react";

import { AppBar, IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import { LightMode, DarkMode, AccountCircle } from "@mui/icons-material";

import { ColorModeContext } from "@/contexts/color-mode";

export default function GlobalNav() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <AppBar
      position="sticky"
    >
      <Toolbar>
        <Typography>
          American Simulation
        </Typography>
        <IconButton
          style={{ marginLeft: "auto" }}
          onClick={colorMode.toggle}
        >
          {theme.palette.mode === "light" ?
          <LightMode /> :
          <DarkMode />}
        </IconButton>
        <IconButton
          edge="end"
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
