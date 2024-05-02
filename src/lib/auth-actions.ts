"use server";

import { AuthError } from "next-auth";

import { signIn, signOut } from "@/auth";

export async function login(data: Record<string, any>) {
  try {
    await signIn("credentials", {
      ...data,
      redirect: false,
    });
    return {
      success: true,
    };
  }
  catch (e) {
    if (!(e instanceof AuthError)) {
      throw e;
    }
    if (e.type !== "CredentialsSignin") {
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
