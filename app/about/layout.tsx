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
    <div className="mx-auto prose prose-lg min-h-screen dark:prose-invert prose-code:before:hidden prose-code:after:hidden">
      {children}
    </div>
  );
}
