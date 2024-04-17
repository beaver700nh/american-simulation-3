"use client";

import { Box, List, SwipeableDrawer, Toolbar } from "@mui/material";
import { Article, House, Map, Security } from "@mui/icons-material";

import { useSidebar } from "@/app/sidebar-manager";
import SidebarTab from "@/app/game/sidebar-tab";

const tabs = [
  {
    name: "mainMenu",
    icon: House,
  },
  {
    name: "settlementMap",
    icon: Map,
  },
  {
    name: "settlementSheet",
    icon: Article,
  },
  {
    name: "settlementChange",
    icon: Security,
  },
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
