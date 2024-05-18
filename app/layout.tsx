import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Анализатор служебных переговоров",
  description:
    "Анализатор служебных переговоров РЖД для хакатона Цифровой прорыв",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Navigation />
        <div className="bg-[--bg]">{children}</div>
      </body>
    </html>
  );
}
