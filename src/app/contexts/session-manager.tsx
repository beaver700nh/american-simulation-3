import { SessionProvider } from "next-auth/react";

import { auth } from "@/auth";

export default async function SessionManager({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  // This seems to work but useSession is always undefined so we use auth() instead
  // console.log("Manager updated:", session);

  return (
    <SessionProvider
      session={session}
    >
      {children}
    </SessionProvider>
  );
}
