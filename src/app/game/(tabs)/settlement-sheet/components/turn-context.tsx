"use client";

import { ReactNode, createContext, useContext } from "react";

import { Turn } from "@/lib/definitions";

const ViewingTurnContext = createContext<Turn | null>(null);

type ViewingTurnProviderProps = {
  children: ReactNode;
  turn: Turn | null;
};

export default function ViewingTurnProvider({
  children,
  turn,
}: ViewingTurnProviderProps) {
  return (
    <ViewingTurnContext.Provider value={turn}>
      {children}
    </ViewingTurnContext.Provider>
  );
}

export function useViewingTurn() {
  const context = useContext(ViewingTurnContext);

  if (!context && context !== null) {
    throw new Error("useViewingTurn must be used within a ViewingTurnProvider");
  }

  return context;
}
