import { auth } from "@/auth";

import GlobalNavInner from "./global-nav-inner";

export default async function GlobalNav() {
  const session = await auth();

  return (
    <GlobalNavInner
      session={session}
    />
  );
}
