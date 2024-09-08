import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";

const quicksand = Quicksand({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "daryll.ko",
  description: "Daryll Ko's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <TopBar />
        <main className="px-12 md:px-0">{children}</main>
      </body>
    </html>
  );
}
