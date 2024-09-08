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
    <div className="mt-52 md:mt-40 mb-20 mx-auto prose prose-lg min-h-screen dark:prose-invert prose-code:before:hidden prose-code:after:hidden">
      {children}
    </div>
  );
}
