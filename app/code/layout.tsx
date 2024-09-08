import { Metadata } from "next";

export const metadata: Metadata = {
  title: "daryll.ko » Code",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex justify-center items-center mx-auto">
      <div className="w-full">{children}</div>
    </div>
  );
}
