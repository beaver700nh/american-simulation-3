"use client";

import Image from "next/image";

import { useEffect, useState } from "react";

import { Fade, Stack, Typography } from "@mui/material";

import { getSettlements } from "@/../public/assets/og-starting-maps";

export default function CyclingMaps() {
  const [current, setCurrent] = useState<number | null>(null);
  const [names, setNames] = useState<string[]>([]);

  useEffect(() => {
    getSettlements().then(setNames);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(Math.floor(Math.random() * names.length));
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [names.length]);

  return (
    <Stack
      className="absolute inset-0"
    >
      {names.map((name, index) => <Fade
        key={index}
        in={index === current}
        timeout={5000}
        unmountOnExit
      >
        <div
          // Wrapper so that image opacity can be changed
          className="absolute inset-0"
        >
          <Image
            className="object-cover -z-10 blur-sm opacity-20"
            src={`/assets/og-starting-maps/${name}`}
            alt=""
            fill
            priority={index === 0}
          />
        </div>
      </Fade>)}
      <Typography
        className="absolute right-0 bottom-0 !m-3 opacity-25"
        sx={{
          filter: "drop-shadow(0 0 0.5rem black)",
        }}
        variant="caption"
      >
        {
          current
            ? `${names[current].replace(/\.\w+$/, "")}`
            : null
        }
      </Typography>
    </Stack>
  );
}
