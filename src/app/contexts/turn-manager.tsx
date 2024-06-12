"use client";

import { useEffect, useState } from "react";

import { Turn } from "@/lib/definitions";
import { getCurrentTurn } from "@/lib/game/turn";

export function useTurn() {
  const [turn, setTurn] = useState<Turn | null>(null);

  useEffect(() => {
    getCurrentTurn().then(setTurn);
  }, [setTurn]);

  return turn;
}
