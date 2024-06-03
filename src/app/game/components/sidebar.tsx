"use client";

import { Box, List, SwipeableDrawer, Toolbar } from "@mui/material";
import { Article, House, Map, Security, Settings } from "@mui/icons-material";

import { useSidebar } from "@/app/contexts/sidebar-manager";
import SidebarTab from "../components/sidebar-tab";

const tabs = [
  {
    name: "home",
    title: "Dashboard view with general information",
    icon: House,
  },
  {
    name: "settlementMap",
    title: "Build or tear down buildings, roads, and more",
    icon: Map,
  },
  {
    name: "settlementSheet",
    title: "View your settlement's statistics over time",
    icon: Article,
  },
  {
    name: "settlementChange",
    title: "See how historical events have affected your settlement",
    icon: Security,
  },
  {
    name: "settings",
    title: "See and change your preferences",
    icon: Settings,
  }
] as const;

export default function Sidebar() {
  const [open, setOpen] = useSidebar();

  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
    >
      <Toolbar /> {/* Prevents content from being hidden by global-nav */}
      <Box
        className="overflow-auto"
      >
        <List>
          {tabs.map(tab =>
          <SidebarTab
            key={tab.name}
            {...tab}
          />
          )}
        </List>
      </Box>
    </SwipeableDrawer>
  );
}
