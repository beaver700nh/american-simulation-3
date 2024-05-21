"use server";

import { auth } from "@/auth";

import { hash } from "bcryptjs";

import prisma from "@/lib/prisma";

import { Prisma } from "@prisma/client";

export async function getSettlements(include: Prisma.SettlementInclude = {}, where: Prisma.SettlementWhereInput = {}) {
  return await prisma.settlement.findMany({ include, where });
}

// TODO update to restrict access
export async function updatePassword(settlementId: string, password: { plain: string } | { hash: string | null }) {
  const session = await auth();

  if (session == null) {
    throw new Error("Unauthorized");
  }

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

export async function updateOwnPassword(password: { plain: string } | { hash: string | null }) {
  const session = await auth();

  if (session == null || session.user == null || session.user.id == null) {
    throw new Error("Unauthorized");
  }

  await prisma.settlement.update({
    where: {
      id: session.user.id
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
