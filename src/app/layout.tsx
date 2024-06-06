import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import ThemeManager from "@/app/contexts/theme-manager";
import SidebarManager from "@/app/contexts/sidebar-manager";
import SessionManager from "@/app/contexts/session-manager";
import GameMetadataManager from "@/app/contexts/game-metadata-manager";
import TurnManager from "@/app/contexts/turn-manager";

import GlobalNav from "./components/global-nav";

import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Sim",
  description: "Mr. White's US I American Sim",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <head>
        <meta
          name="apple-mobile-web-app-capable"
          content="yes"
        />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="mobile-web-app-capable"
          content="yes"
        />
      </head>
      <body
        className={`fixed inset-0 flex flex-col overflow-auto ${inter.className}`}
      >
        <AppRouterCacheProvider>
          <ThemeManager>
          <SidebarManager>
          <SessionManager>
          <GameMetadataManager>
          <TurnManager>
            <CssBaseline />
            <GlobalNav />
            <main
              className="flex flex-col grow"
            >
              {children}
            </main>
          </TurnManager>
          </GameMetadataManager>
          </SessionManager>
          </SidebarManager>
          </ThemeManager>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
