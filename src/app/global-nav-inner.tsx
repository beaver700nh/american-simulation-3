"use client";

import { useMemo } from "react";
import Link from "next/link";

import { AppBar, IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import { LightMode, DarkMode, Menu } from "@mui/icons-material";

import AccountMenu from "@/app/account-menu";
import { useColorMode } from "@/app/contexts/theme-manager";
import { useSidebar } from "@/app/contexts/sidebar-manager";
import { Session } from "next-auth";

type GlobalNavInnerProps = {
  session: Session | null;
};

export default function GlobalNavInner({
  session,
}: GlobalNavInnerProps) {
  const theme = useTheme();
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
        {session?.user && <IconButton
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
        {session?.user && <AccountMenu />}
      </Toolbar>
    </AppBar>
  );
}
