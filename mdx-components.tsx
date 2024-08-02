import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    td: ({ children }) => (
      <td className="border border-solid border-white px-2 py-1">{children}</td>
    ),
    ...components,
  };
}
