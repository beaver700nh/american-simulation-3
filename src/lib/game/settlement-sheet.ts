"use server";

import { SettlementSheet } from "@/lib/definitions";

export async function getSettlementSheet() {
  return [
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
}
