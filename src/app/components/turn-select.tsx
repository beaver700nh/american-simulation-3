"use client";

import { Dispatch, SetStateAction, useMemo } from "react";

import { Divider, IconButton, MenuItem, Stack, TextField } from "@mui/material";
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

  const handleSelect = useMemo(
    () => (event: React.ChangeEvent<HTMLInputElement>) => {
      // No bounds check necessary, just trust the Select to provide valid values
      setIndex(parseInt(event.target.value, 10));
    },
    [setIndex],
  );

  return (
    <Stack
      direction="row"
      className="justify-stretch items-center p-1"
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
        className="grow !mx-2"
      >
        <TextField
          variant="standard"
          value={index}
          onChange={handleSelect}
          select
        >
          {TurnValues
            .filter((_, index) => index <= max)
            .map((turn, index) => <MenuItem
              key={index}
              value={index}
            >
              {turn}
          </MenuItem>)}
        </TextField>
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
