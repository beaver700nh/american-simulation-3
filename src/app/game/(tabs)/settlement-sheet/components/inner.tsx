"use client";

import { useState, useEffect } from "react";

import { Box, Paper } from "@mui/material";

import { SettlementSheet, SettlementSheetData } from "@/lib/definitions";
import { getSettlementSheet } from "@/lib/game/settlement-sheet";

import { Settlement } from "@prisma/client";

import { useViewingTurn } from "../components/turn-context";
import Cell from "../components/cell";

type InnerProps = {
  settlement: Settlement;
};

export default function Inner({
  settlement,
}: InnerProps) {
  const turn = useViewingTurn();
  const [sheet, setSheet] = useState<SettlementSheet | null>(null);

  useEffect(() => {
    if (turn == null) {
      return;
    }

    getSettlementSheet(null, { turn }).then(setSheet);
  }, [turn]);

  return (
    <Box
      className="grow overflow-y-auto flex flex-row justify-center"
    >
      <Paper
        className="grow-0 shrink mt-2 mb-4 relative"
        sx={{
          flexBasis: "calc(50vw + 50vh)",
          paddingBottom: "calc(11.0 / 8.5 * 100%)",
        }}
        elevation={24}
        square
      >
        <p
          className="grid gap-[1px] absolute inset-5"
          style={{
            fontSize: "calc((1vw + 1vh) * 0.75)",
            gridTemplate: "repeat(50, 1fr) / repeat(11, 1fr)",
          }}
        >
          {
            ([
              ...(sheet?.data ?? []),
              {
                "name": "settlement",
                "value": settlement.name,
              },
              {
                "name": "turn",
                "label": "Year",
              },
            ] satisfies SettlementSheetData[]).map(Cell)
          }
        </p>
      </Paper>
    </Box>
  );
}
