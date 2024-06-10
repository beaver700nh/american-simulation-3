"use client";

import { useState } from "react";

import { Box } from "@mui/material";

import TurnSelect from "@/app/components/turn-select";

type WrapperProps = {
  maxTurn: number;
};

export default function Wrapper({
  maxTurn,
}: WrapperProps) {
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
