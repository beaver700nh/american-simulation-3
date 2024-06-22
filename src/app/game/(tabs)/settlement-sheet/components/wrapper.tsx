"use client";

import { useState } from "react";

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
  const maxIndex = (x => x == null ? null : TurnValues.indexOf(x))(useTurn());

  const indexState = useState<number | null>(null);
  const [index] = indexState;

  return (
    <Box
      className="absolute inset-0 flex flex-col"
    >
      <TurnSelect
        indexState={indexState}
        maxIndex={maxIndex}
      />
      <ViewingTurnProvider
        turn={index == null ? null : TurnValues[index]}
      >
        {children}
      </ViewingTurnProvider>
    </Box>
  );
}
