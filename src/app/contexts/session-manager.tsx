"use client";

import { useEffect, useState } from "react";

import { Session } from "next-auth";
import { SessionProvider, getSession } from "next-auth/react";

export default function SessionManager({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    getSession().then(setSession);
  }, [setSession]);

  return (
    <SessionProvider
      session={session}
    >
      {children}
    </SessionProvider>
  );
}
