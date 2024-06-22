"use client";

import { Dispatch, SetStateAction, useEffect, useMemo } from "react";

import { Divider, IconButton, MenuItem, Stack, TextField } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight, KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from "@mui/icons-material";

import { TurnValues } from "@/lib/definitions";

type TurnSelectProps = {
  indexState: [number | null, Dispatch<SetStateAction<number | null>>];
  maxIndex: number | null;
};

export default function TurnSelect({
  indexState: [index, setIndex],
  maxIndex,
}: TurnSelectProps) {
  useEffect(() => {
    if (maxIndex != null) {
      setIndex(maxIndex);
    }
  }, [setIndex, maxIndex]);

  const handleMin = useMemo(() => () => setIndex(index => index == null ? null : 0),
    [setIndex]);
  const handleMax = useMemo(() => () => setIndex(index => index == null ? null : maxIndex),
    [setIndex, maxIndex]);
  const handleDec = useMemo(() => () => setIndex(index => index == null ? null : Math.max(0, index - 1)),
    [setIndex]);
  const handleInc = useMemo(() => () => setIndex(index => index == null ? null : Math.min(maxIndex!, index + 1)),
    [setIndex, maxIndex]);

  const handleSelect = useMemo(() => (event: React.ChangeEvent<HTMLInputElement>) => {
    // No bounds check necessary, just trust the Select to provide valid values
    setIndex(parseInt(event.target.value, 10));
  }, [setIndex]);

  return (
    <nav
      className="flex flex-row justify-stretch items-center p-1 shadow-md"
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
        {index == null ? null : <TextField
          variant="standard"
          value={index}
          onChange={handleSelect}
          select
        >
          {TurnValues
            .filter((_, index) => index <= maxIndex!)
            .map((turn, index) => <MenuItem
              key={index}
              value={index}
            >
              {turn}
          </MenuItem>)}
        </TextField>}
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
    </nav>
  );
}
