import "@/styles/github-dark.css";
import "katex/dist/katex.min.css";

import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

import { getFileContents, getSlugs } from "@/lib/fileOps";
import { MDXRemote } from "next-mdx-remote/rsc";
import JP from "@/components/JP";

export default async function Note({ params }: { params: { slug: string } }) {
  const source = getFileContents(params.slug);

  return (
    <main className="mx-auto mt-52 prose lg:prose-lg dark:prose-invert prose-code:before:hidden prose-code:after:hidden">
      <MDXRemote
        source={source}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkMath],
            rehypePlugins: [rehypeKatex, rehypeHighlight],
          },
        }}
        components={{ JP }}
      />
    </main>
  );
}

export async function generateStaticParams() {
  return getSlugs().map((slug) => ({ slug }));
}
