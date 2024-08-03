import { Metadata } from "next";

export const metadata: Metadata = {
  title: "daryll.ko » Journal",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
