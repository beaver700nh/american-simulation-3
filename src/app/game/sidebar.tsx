"use client";

import Link from "next/link";

import { Box, List, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer, Toolbar } from "@mui/material";

import { useSidebar } from "@/components/sidebar-manager";
import * as tabs from "@/app/game/tabs/aggregation";

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
          {Object.entries(tabs).map(([name, data]) =>
          <ListItemButton
            key={name}
            href={`/game/${name}`}
          >
            <ListItemIcon>
              <data.Icon />
            </ListItemIcon>
            <ListItemText>
              {name}
            </ListItemText>
          </ListItemButton>
          )}
        </List>
      </Box>
    </SwipeableDrawer>
  );
}
