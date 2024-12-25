"use server";

import { Turn, SettlementSheet } from "@/lib/definitions";

export async function getSettlementSheet(_: unknown, turn: Turn) {
  const fake: SettlementSheet[] = [
    {
      turn: 1855,
      data: [
        {
          name: "earnings",
          label: "Earnings",
        },
      ],
    },
    {
      turn: 1860,
      data: [
        {
          name: "earnings",
          label: "Earnings",
        },
      ],
    },
  ];

  const result = fake.filter(sheet => sheet.turn === turn);

  return result.length === 0 ? null : result[0];
}
