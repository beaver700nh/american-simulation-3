"use server";

import { SettlementSheetData } from "@/lib/definitions";

export async function getSettlementSheetData() {
  return [
    {
      turn: 1759,
      data: [
        {
          name: "earnings",
          label: "Earnings",
          value: null,
        },
      ],
    },
  ] satisfies SettlementSheetData[];
}
