import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import localFont from "next/font/local";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryClientProvider } from "@/components/ReactQueryClientProvider";
import { headers } from "next/headers";

const FSRail = localFont({
  src: [
    {
      path: "./fonts/FSRAIL_Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/FSRAIL_Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

const RuRail = localFont({
  src: [
    {
      path: "./fonts/RuRailG_ExtendBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/RuRailG_Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/RuRailG_Extend.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/RuRailG_Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/RuRailG_Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Анализатор служебных переговоров",
  description:
    "Анализатор служебных переговоров РЖД для хакатона Цифровой прорыв",
};
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={"flex flex-col bg-[--bg]" + " " + RuRail.className}>
        <ReactQueryClientProvider>
          <Navigation />
          <main className="px-[--page-x-padding] pt-[--page-top-padding] grow">
            {children}
          </main>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
