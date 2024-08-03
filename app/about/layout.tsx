import { Metadata } from "next";

export const metadata: Metadata = {
  title: "daryll.ko » About",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mx-auto mt-52 mb-28 prose lg:prose-lg min-h-screen dark:prose-invert prose-code:before:hidden prose-code:after:hidden">
      {children}
    </main>
  );
}
