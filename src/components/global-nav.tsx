"use client";

import { useMemo } from "react";

import { AppBar, IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";

import AccountMenu from "@/components/account-menu";
import { useColorMode } from "@/components/theme-manager";
import Link from "next/link";

export default function GlobalNav() {
  const theme = useTheme();
  const [_, setColorMode] = useColorMode();

  const toggleColorMode = useMemo(() => () => {
    setColorMode(mode => mode === "light" ? "dark" : "light");
  }, [setColorMode]);

  return (
    <AppBar
      position="sticky"
    >
      <Toolbar>
        <Link
          className="grow"
          href="/"
        >
          <Typography
            variant="button"
            fontSize="1rem"
          >
            American Simulation
          </Typography>
        </Link>
        <IconButton
          onClick={toggleColorMode}
          title="Toggle Theme"
        >
          {theme.palette.mode === "light" ?
          <LightMode /> :
          <DarkMode />}
        </IconButton>
        <AccountMenu />
      </Toolbar>
    </AppBar>
  );
}
