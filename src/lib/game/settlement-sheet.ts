"use server";

import { SettlementSheet } from "@/lib/definitions";

export async function getSettlementSheet(_: unknown, where: { turn?: number } = {}) {
  const fake = [
    {
      turn: 1860,
      data: [
        {
          name: "earnings",
          label: "Earnings",
        },
        {
          name: "debtToEarnings",
          label: "D to E Ratio",
        },
        {
          name: "population",
          label: "Population",
        },
        {
          name: "votes",
          label: "Votes",
        },
        {
          name: "unrest",
          label: "Unrest",
        },
      ],
    },
  ] satisfies SettlementSheet[];

  const result = fake.filter(sheet => sheet.turn === where.turn);

  return result[0] ?? null;
}
