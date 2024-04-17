"use client";

import { Box, List, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer, Toolbar } from "@mui/material";

import { camelToKebab, camelToTitle } from "@/app/lib/case-convert";

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
          <ListItemButton
            href="/game/tabs/main-menu"
          >
            <ListItemIcon>
              {/* <tabs.MainMenu.Icon /> */}
            </ListItemIcon>
            <ListItemText>
              Main Menu
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            href="/game/tabs/settlement-map"
          >
            <ListItemIcon>
              {/* <tabs.SettlementMap.Icon /> */}
            </ListItemIcon>
            <ListItemText>
              Settlement Map
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            href="/game/tabs/settlement-sheet"
          >
            <ListItemIcon>
              {/* <tabs.SettlementSheet.Icon /> */}
            </ListItemIcon>
            <ListItemText>
              Settlement Sheet
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            href="/game/tabs/settlement-change"
          >
            <ListItemIcon>
              {/* <tabs.SettlementChange.Icon /> */}
            </ListItemIcon>
            <ListItemText>
              Settlement Change
            </ListItemText>
          </ListItemButton>
        </List>
      </Box>
    </SwipeableDrawer>
  );
}
