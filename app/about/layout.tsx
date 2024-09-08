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
    <div className="mt-32 mb-12 md:mt-20 md:mb-0 mx-auto prose prose-lg dark:prose-invert prose-code:before:hidden prose-code:after:hidden">
      {children}
    </div>
  );
}
