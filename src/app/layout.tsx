import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { CssBaseline, PaletteMode } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import GlobalNav from "@/components/global-nav";

import "./globals.css";
import ThemeManager from "@/components/theme-manager";

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
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body className={`${inter.className} fixed inset-0 flex flex-col`}>
        <AppRouterCacheProvider>
          <ThemeManager>
            <CssBaseline />
            <GlobalNav />
            <main>
              {children}
            </main>
          </ThemeManager>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
