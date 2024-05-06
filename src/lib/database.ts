"use server";

import prisma from "@/lib/prisma";

export async function getSettlements() {
  return (await prisma.settlement.findMany({
    include: {
      maps: true,
    },
  }))?.map(
    settlement => {
      const { maps, ...rest } = settlement;
      return {
        ...rest, initialMap: maps[0],
      };
    }
  ) ?? [];
}
