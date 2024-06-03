"use client";

import Image from "next/image";

import { useEffect, useState } from "react";

import { Fade, Stack } from "@mui/material";

import { Settlement } from "@prisma/client";

import { formatSettlementName } from "@/lib/string-format";

type CyclingMapsInnerProps = {
  settlements: Settlement[];
};

export default function CyclingMapsInner({
  settlements,
}: CyclingMapsInnerProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current => (current + 1) % settlements.length);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <Stack
      className="absolute inset-0"
    >
      {settlements.map((settlement, index) => <Fade
        key={settlement.id}
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
            src={`/assets/og-starting-maps/${formatSettlementName(settlement)}.jpg`}
            alt=""
            fill
          />
        </div>
      </Fade>)}
    </Stack>
  );
}
