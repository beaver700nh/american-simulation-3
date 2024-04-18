import Link from "next/link";

import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import { camelToKebab, camelToTitle } from "@/app/lib/case-convert";

type SidebarTabProps = {
  name: string;
  title: string;
  icon: React.ComponentType;
};

export default function SidebarTab({
  name,
  title,
  icon: Icon
}: SidebarTabProps) {
  return (
    <Link
      href={`/game/tabs/${camelToKebab(name)}`}
    >
      <ListItemButton>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText
          primary={camelToTitle(name)}
          secondary={title}
        />
      </ListItemButton>
    </Link>
  );
}
