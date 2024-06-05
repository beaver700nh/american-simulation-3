"use server";

import { readdir } from "fs/promises";
import path from "path";

export async function getSettlements() {
  return (await readdir(
    path.resolve("public/assets/og-starting-maps")
  ))
    .filter(name => name !== "index.ts");
}
