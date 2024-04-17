"use client";

import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

type SidebarContext = [
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>,
];

export const SidebarContext = createContext<SidebarContext | null>(null);

export default function SidebarManager({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState(false);

  return (
    <SidebarContext.Provider
      value={[ open, setOpen ]}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("useSidebar must be used within a SidebarManager");
  }

  return context;
}
