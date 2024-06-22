"use client";

import { Box, Paper } from "@mui/material";

import { SettlementSheet } from "@/lib/definitions";

import { useViewingTurn } from "../components/turn-context";
import Cell from "../components/cell";

type InnerProps = {
  data: SettlementSheet[];
};

export default function Inner({
  data,
}: InnerProps) {
  const turn = useViewingTurn();
  const sheet = data.find(sheet => sheet.turn === turn);

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
          {sheet?.data.map(Cell)}
        </p>
      </Paper>
    </Box>
  );
}
