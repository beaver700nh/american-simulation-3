"use client";

import { CSSProperties, Fragment } from "react";

import { Box, Paper } from "@mui/material";

import { SettlementSheetData } from "@/lib/definitions";

import { useViewingTurn } from "../components/turn-context";

type GridPosition = {
  rs: number;
  cs: number;
  re: number;
  ce: number;
};

type CellProperties = {
  position: GridPosition;
  style: CSSProperties;
};

const arrangement: {
  [key: string]: {
    label: CellProperties;
    value: CellProperties;
  },
} = {
  "earnings": {
    label: {
      position: { rs: 1, cs: 4, re: 3, ce: 6 },
      style: {
        fontSize: "160%",
      },
    },
    value: {
      position: { rs: 1, cs: 6, re: 3, ce: 8 },
      style: {
        fontSize: "160%",
        fontStyle: "italic",
      },
    },
  }
};

type InnerProps = {
  data: SettlementSheetData[];
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
          {sheet?.data.map(({ name, label, value }) => {
            const cfg = arrangement[name];

            if (cfg == null) {
              return null;
            }

            const l = cfg.label.position;
            const v = cfg.value.position;

          return <Fragment
              key={name}
          >
            <span
              style={{
                ...cfg.label.style,
                gridArea: `${l.rs} / ${l.cs} / ${l.re} / ${l.ce}`,
              }}
            >
              {label}
            </span>
            <span
              style={{
                ...cfg.value.style,
                gridArea: `${v.rs} / ${v.cs} / ${v.re} / ${v.ce}`,
              }}
            >
              {value ?? "#ERR!"}
            </span>
          </Fragment>})}
        </p>
      </Paper>
    </Box>
  );
}
