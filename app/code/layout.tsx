import { Metadata } from "next";

export const metadata: Metadata = {
  title: "daryll.ko » Code",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="mx-auto">{children}</div>;
}
