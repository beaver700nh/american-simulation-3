"use server";

import { signIn, signOut } from "@/auth";

export async function login(data: Record<string, any>) {
  return await signIn("credentials", data);
}

export async function logout() {
  await signOut();
}
