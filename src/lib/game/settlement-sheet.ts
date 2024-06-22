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
      ],
    },
  ] satisfies SettlementSheet[];

  const result = fake.filter(sheet => sheet.turn === where.turn);

  return result.length === 0 ? null : result[0];
}
