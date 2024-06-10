"use client";

import { Dispatch, SetStateAction, useMemo } from "react";

import { Divider, IconButton, Stack } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight, KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from "@mui/icons-material";

import { Turn, TurnValues } from "@/lib/definitions";

type TurnSelectProps = {
  state: [Turn, Dispatch<SetStateAction<Turn>>];
  max: Turn;
};

export default function TurnSelect({
  state: [turn, setTurn],
  max,
}: TurnSelectProps) {
  const handleMin = useMemo(
    () => () => setTurn(TurnValues[0]),
    [setTurn],
  );
  const handleMax = useMemo(
    () => () => setTurn(TurnValues[TurnValues.length - 1]),
    [setTurn],
  );
  const handleDec = useMemo(
    () => () => setTurn(turn => TurnValues[Math.max(0, TurnValues.indexOf(turn) - 1)]),
    [setTurn],
  );
  const handleInc = useMemo(
    () => () => setTurn(turn => TurnValues[Math.min(TurnValues.length, TurnValues.indexOf(turn) + 1)]),
    [setTurn],
  );

  return (
    <Stack
      direction="row"
      className="justify-stretch p-1"
    >
      <IconButton
        size="small"
        onClick={handleMin}
      >
        <KeyboardDoubleArrowLeft />
      </IconButton>
      <IconButton
        size="small"
        onClick={handleDec}
      >
        <KeyboardArrowLeft />
      </IconButton>
      <Divider
        className="grow items-center !mx-2"
      >
        { turn }
      </Divider>
      <IconButton
        size="small"
        onClick={handleInc}
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        size="small"
        onClick={handleMax}
      >
        <KeyboardDoubleArrowRight />
      </IconButton>
    </Stack>
  );
}
