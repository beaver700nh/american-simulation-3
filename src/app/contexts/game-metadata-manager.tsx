"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { Settlement } from "@prisma/client";

import { getSettlements } from "@/lib/database";

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

export function useSettlements() {
  const [data, setData] = useState<Settlement[]>([]);

  useEffect(() => {
    getSettlements({
      maps: true
    })
    .then(settlements => {
      setData(settlements);
    });
  }, []);

  return data;
}
