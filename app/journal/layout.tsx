import "katex/dist/katex.min.css";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="mx-auto prose lg:prose-lg dark:prose-invert prose-code:before:hidden prose-code:after:hidden ">
      {children}
    </div>
  );
}
