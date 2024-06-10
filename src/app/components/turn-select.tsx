"use client";

import { Dispatch, SetStateAction, useMemo } from "react";

import { Divider, IconButton, Stack } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight, KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from "@mui/icons-material";

import { TurnValues } from "@/lib/definitions";

type TurnSelectProps = {
  state: [number, Dispatch<SetStateAction<number>>];
  max: number;
};

export default function TurnSelect({
  state: [index, setIndex],
  max,
}: TurnSelectProps) {
  const handleMin = useMemo(
    () => () => setIndex(0),
    [setIndex],
  );
  const handleMax = useMemo(
    () => () => setIndex(max),
    [setIndex, max],
  );
  const handleDec = useMemo(
    () => () => setIndex(index => Math.max(0, index - 1)),
    [setIndex],
  );
  const handleInc = useMemo(
    () => () => setIndex(index => Math.min(max, index + 1)),
    [setIndex, max],
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
        { TurnValues[index] }
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
