"use server";

import { auth } from "@/auth";

import { Prisma } from "@prisma/client";

import prisma from "@/lib/prisma";
import { hashPassword } from "@/lib/password";

export async function getSettlements(include: Prisma.SettlementInclude = {}, where: Prisma.SettlementWhereInput = {}) {
  return await prisma.settlement.findMany({ include, where });
}

export async function updateOwnPassword(password: { plain: string } | { hash: string | null }) {
  const session = await auth();

  if (session == null || session.user == null || session.user.name == null) {
    throw new Error("Unauthorized");
  }

  await prisma.settlement.update({
    where: {
      id: session.user.name
    },
    data: {
      account: {
        update: {
          password: "hash" in password ? password.hash : await hashPassword(password.plain),
        }
      }
    },
  });
}
