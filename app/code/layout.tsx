import { Metadata } from "next";

export const metadata: Metadata = {
  title: "daryll.ko » Code",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="mt-52 mb-24 mx-auto">{children}</div>;
}
