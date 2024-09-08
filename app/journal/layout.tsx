import { Metadata } from "next";

export const metadata: Metadata = {
  title: "daryll.ko » Journal",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="px-10 md:px-0">{children}</main>;
}
