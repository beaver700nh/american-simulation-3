"use client";

import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";

import { Turn } from "@/lib/definitions";
import { getCurrentTurn } from "@/lib/game/turn";

// TODO:
// - this might not be necessary

type TurnContext = [
  turn: Turn,
  setMode: Dispatch<SetStateAction<Turn>>,
];

export const TurnContext = createContext<TurnContext | null>(null);

export default function TurnManager({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [turn, setTurn] = useState<Turn | null>(null);

  useEffect(() => {
    getCurrentTurn().then(setTurn);
  }, [setTurn]);

  return (
    <TurnContext.Provider
      value={turn == null ? null : [turn, setTurn] as TurnContext}
    >
      {children}
    </TurnContext.Provider>
  );
}

export function useTurn() {
  const context = useContext(TurnContext);

  if (!context) {
    throw new Error("useTurn must be used within a TurnManager");
  }

  return context;
}
