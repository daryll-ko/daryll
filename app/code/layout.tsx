import { Metadata } from "next";

export const metadata: Metadata = {
  title: "daryll.ko » Code",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="mx-auto mt-52 mb-28">{children}</main>;
}
