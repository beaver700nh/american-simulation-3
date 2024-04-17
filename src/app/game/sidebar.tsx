"use client";

import Link from "next/link";

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
          <Link
            key={name}
            href={`/game/tabs/${camelToKebab(name)}`}
          >
            <ListItemButton>
              <ListItemIcon>
                {/* <data.Icon /> */}
                <span>Foo</span>
              </ListItemIcon>
              <ListItemText
                primary={camelToTitle(name)}
              />
            </ListItemButton>
          </Link>
          )}
        </List>
      </Box>
    </SwipeableDrawer>
  );
}
