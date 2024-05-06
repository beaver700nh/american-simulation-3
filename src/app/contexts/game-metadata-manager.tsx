"use client";

import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";

import type { Settlement, Map } from "@prisma/client";

import { getSettlements } from "@/lib/database";

type GameDataContext = [
  data: GameMetadata | null,
  setData: Dispatch<SetStateAction<GameMetadata | null>>,
];

type GameMetadata = {
  settlements: (Settlement & { initialMap: Map })[];
};

export const GameDataContext = createContext<GameDataContext | null>(null);

export default function GameMetadataManager({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [data, setData] = useState<GameMetadata | null>(null);

  useEffect(() => {
    getSettlements()
    .then(settlements => {
      setData(old => ({ ...old, settlements }));
    });
  }, []);

  return (
    <GameDataContext.Provider
      value={[ data, setData ]}
    >
      {children}
    </GameDataContext.Provider>
  );
}

export function useGameMetadata() {
  const context = useContext(GameDataContext);

  if (!context) {
    throw new Error("useGameMetadata must be used within a GameMetadataManager");
  }

  return context;
}
