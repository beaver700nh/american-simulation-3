import Sidebar from "@/app/game/components/sidebar";
import React from "react";

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <>
      <Sidebar />
      {modal}
      {children}
    </>
  )
}
