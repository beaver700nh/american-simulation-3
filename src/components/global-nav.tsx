"use client";

import { useMemo } from "react";

import { AppBar, IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
// import { LightMode, DarkMode, Menu } from "@mui/icons-material";

import AccountMenu from "@/components/account-menu";
import { useColorMode } from "@/components/theme-manager";
// import { useSidebar } from "@/components/sidebar-manager";
import Link from "next/link";

export default function GlobalNav() {
  const theme = useTheme();
  const [_, setColorMode] = useColorMode();
  // const [, setColorMode] = useColorMode();
  // const [, setSidebar] = useSidebar();

  const toggleColorMode = useMemo(() => () => {
    setColorMode(mode => mode === "light" ? "dark" : "light");
  }, [setColorMode]);

  // const toggleSidebar = useMemo(() => () => {
  //   setSidebar(open => !open);
  // }, [setSidebar]);

  return (
    <AppBar
      // sx={{ zIndex: theme.zIndex.drawer + 1 }}
      position="sticky"
    >
      <Toolbar>
        {/* <IconButton
          // onClick={toggleSidebar}
          edge="start"
          title="Menu"
        >
          <Menu />
        </IconButton> */}
        <Link
          className="grow"
          // className="grow ms-2"
          href="/"
          // title="Home"
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
