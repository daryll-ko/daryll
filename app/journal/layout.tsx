import { Metadata } from "next";

export const metadata: Metadata = {
  title: "daryll.ko » Journal",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="mt-52 mb-24">{children}</div>;
}
