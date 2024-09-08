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
    <div className="mt-32 mb-20 flex flex-row items-center justify-center gap-10 text-lg md:text-xl">
      {children}
    </div>
  );
}
