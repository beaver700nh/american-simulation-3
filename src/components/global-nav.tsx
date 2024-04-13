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
        <Typography
          className="grow"
        >
          American Simulation
        </Typography>
        <IconButton
          onClick={colorMode.toggle}
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
