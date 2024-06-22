"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { Prisma, Settlement } from "@prisma/client";

import { getSettlements } from "@/lib/game/settlement";

type GameMetadataContext = {
};

export const GameMetadataContext = createContext<GameMetadataContext | null>(null);

export default function GameMetadataManager({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [data, setData] = useState<GameMetadataContext | null>(null);

  useEffect(() => {
  }, []);

  return (
    <GameMetadataContext.Provider
      value={data}
    >
      {children}
    </GameMetadataContext.Provider>
  );
}

export function useGameMetadata() {
  const context = useContext(GameMetadataContext);

  if (!context) {
    throw new Error("useGameMetadata must be used within a GameMetadataManager");
  }

  return context;
}

export function useSettlements(include: Prisma.SettlementInclude | null = null) {
  const [data, setData] = useState<Settlement[]>([]);

  useEffect(() => {
    getSettlements(include ?? {}).then(setData);
  }, [include, setData]);

  return data;
}
