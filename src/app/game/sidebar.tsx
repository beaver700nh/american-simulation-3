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
          {Object
            .entries(tabs)
            .sort(([, a], [, b]) => a.index - b.index)
            .map(([name, data]) =>
          <ListItemButton
            key={name}
            href={`/game/tabs/${camelToKebab(name)}`}
          >
            <ListItemIcon>
              <data.Icon />
            </ListItemIcon>
            <ListItemText>
              {camelToTitle(name)}
            </ListItemText>
          </ListItemButton>
          )}
        </List>
      </Box>
    </SwipeableDrawer>
  );
}
