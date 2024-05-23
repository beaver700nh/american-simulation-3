"use server";

import { AuthError } from "next-auth";

import { signIn, signOut } from "@/auth";

import prisma from "@/lib/prisma";
import { hashPassword } from "@/lib/password";

async function ensurePassword(username: string, password: string) {
  const settlement = await prisma.settlement.findUnique({
    where: {
      id: username
    },
    include: {
      account: true,
    },
  });

  if (settlement!.account.password != null) {
    return;
  }

  await prisma.settlement.update({
    where: {
      id: username
    },
    data: {
      account: {
        update: {
          password: await hashPassword(password),
        },
      },
    },
  });
}

export async function login(data: Record<string, any>) {
  try {
    await signIn("credentials", {
      ...data,
      redirect: false,
    });

    ensurePassword(data.username, data.password);

    return {
      success: true,
    };
  }
  catch (e) {
    if (!(e instanceof AuthError && e.type === "CredentialsSignin")) {
      throw e;
    }

    const { source, message } = e as AuthError & { source: string };

    return {
      success: false,
      error: { source, message: message.split(". Read more at")[0] },
    };
  }
}

export async function logout() {
  await signOut();
}
