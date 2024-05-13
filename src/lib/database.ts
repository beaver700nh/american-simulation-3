"use server";

import { hash } from "bcryptjs";

import prisma from "@/lib/prisma";

import { Prisma } from "@prisma/client";

export async function getSettlements(include: Prisma.SettlementInclude = {}) {
  return await prisma.settlement.findMany({ include });
}

export async function updatePassword(settlementId: string, password: { plain: string } | { hash: string }) {
  await prisma.settlement.update({
    where: {
      id: settlementId
    },
    data: {
      account: {
        update: {
          password: "hash" in password ? password.hash : await hash(password.plain, 10),
        }
      }
    },
  });
}
