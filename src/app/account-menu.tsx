"use client";

import { useMemo, useState } from "react";

import { signOut } from "next-auth/react";

import { IconButton, Menu, MenuItem } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

export default function AccountMenu() {
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);

  const openMenu = useMemo(() => (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  }, []);

  const closeMenu = useMemo(() => () => {
    setMenuAnchor(null);
  }, []);

  const handleSignOut = useMemo(() => async () => {
    closeMenu();
    await signOut();
  }, [closeMenu]);

  return (
    <>
      <IconButton
        edge="end"
        title="Account Info"
        onClick={openMenu}
      >
        <AccountCircle />
      </IconButton>
      <Menu
        anchorEl={menuAnchor}
        open={menuAnchor != null}
        onClose={closeMenu}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
      >
        <MenuItem
          onClick={handleSignOut}
        >
          Sign Out
        </MenuItem>
      </Menu>
    </>
  );
}
