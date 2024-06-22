"use server";

import { Prisma } from "@prisma/client";

import prisma from "@/lib/prisma";

export async function getSettlements(include: Prisma.SettlementInclude = {}, where: Prisma.SettlementWhereInput = {}) {
  return await prisma.settlement.findMany({ include, where });
}
