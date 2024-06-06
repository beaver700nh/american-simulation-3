"use client";

import { Stack } from "@mui/material";

import { useDropShadow } from "@/lib/theme-sx";

export default function InfoOuter({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sxDropShadow = useDropShadow();

  return (
    <Stack
      className="m-auto p-10 text-center"
      sx={{
        ...sxDropShadow,
      }}
    >
      {children}
    </Stack>
  );
}
