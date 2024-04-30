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

    return {
      success: false,
      error: e.message,
    };
  }
}

export async function logout() {
  await signOut();
}
