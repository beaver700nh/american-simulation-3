"use client";

import { Box, Paper } from "@mui/material";

import { useViewingTurn } from "../components/turn-context";

export default function Inner() {
  const turn = useViewingTurn();

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
          className="grid absolute inset-0"
          style={{
            fontSize: "calc((1vw + 1vh) * 0.75)",
            gridTemplate: "repeat(50, 1fr) / repeat(11, 1fr)",
          }}
        >
          {turn}
        </p>
      </Paper>
    </Box>
  );
}
