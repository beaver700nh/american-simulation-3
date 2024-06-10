"use client";

import { useState } from "react";

import { Box } from "@mui/material";

import TurnSelect from "@/app/components/turn-select";

type InnerProps = {
  maxTurn: number;
};

export default function Inner({
  maxTurn,
}: InnerProps) {
  const turn = useState(maxTurn);

  return (
    <Box>
      <TurnSelect
        state={turn}
        max={maxTurn}
      />
    </Box>
  );
}
