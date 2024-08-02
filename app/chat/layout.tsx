export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex mt-52 flex-col items-center justify-center gap-5">
      {children}
    </main>
  );
}
