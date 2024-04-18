"use client";

import { useMemo } from "react";

import { useSession } from "next-auth/react";

import { AppBar, IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import { LightMode, DarkMode, Menu } from "@mui/icons-material";

import AccountMenu from "@/app/account-menu";
import { useColorMode } from "@/app/contexts/theme-manager";
import { useSidebar } from "@/app/contexts/sidebar-manager";
import Link from "next/link";

export default function GlobalNav() {
  const theme = useTheme();
  const { data: session } = useSession();
  const [, setColorMode] = useColorMode();
  const [, setSidebar] = useSidebar();

  const toggleColorMode = useMemo(() => () => {
    setColorMode(mode => mode === "light" ? "dark" : "light");
  }, [setColorMode]);

  const toggleSidebar = useMemo(() => () => {
    setSidebar(open => !open);
  }, [setSidebar]);

  return (
    <AppBar
      sx={{ zIndex: theme.zIndex.drawer + 1 }}
      position="sticky"
    >
      <Toolbar
        className="!px-2"
      >
        {session && <IconButton
          onClick={toggleSidebar}
          title="Menu"
        >
          <Menu />
        </IconButton>}
        <Link
          className="grow ms-2"
          href="/"
          title="Home"
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
        {session && <AccountMenu />}
      </Toolbar>
    </AppBar>
  );
}
