"use client";

import { createContext, useContext } from "react";

import { Turn } from "@/lib/definitions";

const ViewingTurnContext = createContext<Turn | null>(null);

export default function ViewingTurnProvider({
  children,
  turn,
}: Readonly<{
  children: React.ReactNode;
  turn: Turn;
}>) {
  return (
    <ViewingTurnContext.Provider value={turn}>
      {children}
    </ViewingTurnContext.Provider>
  );
}

export function useViewingTurn() {
  const context = useContext(ViewingTurnContext);

  if (!context) {
    throw new Error("useViewingTurn must be used within a ViewingTurnProvider");
  }

  return context;
}
