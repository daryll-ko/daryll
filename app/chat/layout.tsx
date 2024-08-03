import { Metadata } from "next";

export const metadata: Metadata = {
  title: "daryll.ko » Chat",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mt-52 mb-28 flex flex-row items-center justify-center gap-5">
      {children}
    </main>
  );
}
