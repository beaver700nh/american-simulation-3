"use client";

import { Fragment } from "react";

import { Box, Paper } from "@mui/material";

import { SettlementSheetData } from "@/lib/definitions";
import { style } from "./style";

import { useViewingTurn } from "../components/turn-context";

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
            const cfg = style[name];

            if (cfg == null) {
              return null;
            }

            const l = cfg.label.position;
            const v = cfg.value.position;

          return <Fragment
              key={name}
          >
            <span
              className="flex justify-center items-center"
              style={cfg.label}
            >
              {label}
            </span>
            <span
              className="flex justify-center items-center"
              style={cfg.value}
            >
              {value ?? "#ERR!"}
            </span>
          </Fragment>})}
        </p>
      </Paper>
    </Box>
  );
}
