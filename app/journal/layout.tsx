export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="prose dark:prose-invert prose-code:before:hidden prose-code:after:hidden ">
      {children}
    </div>
  );
}
