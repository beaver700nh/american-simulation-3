"use client";

import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

import type { Settlement } from "@prisma/client";

type GameDataContext = [
  data: GameMetadata;
];

type GameMetadata = {
  game: 
}

export default async function GameMetadataManager({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  // This seems to work as a workaround: useSession always returnes an undefined
  //   session so we use auth() instead
  // console.log("Manager updated:", session);

  return (
    <SessionProvider
      session={session}
    >
      {children}
    </SessionProvider>
  );
}
