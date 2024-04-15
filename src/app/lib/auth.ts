"use server";

import { LoginSchema } from "@/app/lib/schema";

export async function login(formData: LoginSchema) {
  console.log(formData);
}
