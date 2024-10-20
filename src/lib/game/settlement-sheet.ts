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
        {
          name: "propertyRate",
          label: "Property Rate",
        },
        {
          name: "tariffRate",
          label: "Tariff Rate",
        },
        {
          name: "exciseRate",
          label: "Excise Rate",
        },
        {
          name: "plantationValue",
          label: "Plantation M/V",
        },
        {
          name: "farmingValue",
          label: "Farming M/V",
        },
        {
          name: "industryValue",
          label: "Industry M/V",
        },
        {
          name: "commerceValue",
          label: "Commerce M/V",
        },
        {
          name: "propertyCollection",
          label: "Tax Collection",
        },
        {
          name: "tariffCollection",
          label: "Tariff Collection",
        },
        {
          name: "exciseCollection",
          label: "Excise Collection",
        },
        {
          name: "tradeFleet",
          label: "Trade Fleet",
        },
        {
          name: "debt",
          label: "Debt",
        },
        {
          name: "smuggling",
          label: "Smuggling",
        },
        {
          name: "societyLevel",
          label: "Society Level",
        },
        {
          name: "dividend",
          label: "Dividend",
        },
        {
          name: "triangularTrade",
          label: "Triangular Trade",
        },
      ],
    },
  ] satisfies SettlementSheet[];

  const result = fake.filter(sheet => sheet.turn === where.turn);

  return result[0] ?? null;
}
