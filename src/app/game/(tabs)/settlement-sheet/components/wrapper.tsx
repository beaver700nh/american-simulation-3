"use client";

import { useEffect, useState } from "react";

import { Box } from "@mui/material";

import { TurnValues } from "@/lib/definitions";

import { useTurn } from "@/app/contexts/turn-manager";
import TurnSelect from "@/app/components/turn-select";
import ViewingTurnProvider from "../components/turn-context";

export default function Wrapper({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  const maxTurn_ = useTurn();
  const maxTurn = maxTurn_ == null ? null : TurnValues.indexOf(maxTurn_);

  const turnState = useState(0);
  const [turn, setTurn] = turnState;

  useEffect(() => {
    if (maxTurn == null) {
      return;
    }

    setTurn(maxTurn);
  }, [setTurn, maxTurn]);

  return (
    <Box
      className="absolute inset-0 flex flex-col"
    >
      <TurnSelect
        state={turnState}
        max={maxTurn}
      />
      <ViewingTurnProvider
        turn={TurnValues[turn]}
      >
        {children}
      </ViewingTurnProvider>
    </Box>
  );
}
