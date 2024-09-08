import { getSlugs } from "@/lib/fileOps";
import Link from "next/link";

function getLinks() {
  const slugs = getSlugs();

  return slugs.map((slug, index) => (
    <Link href={`/journal/${slug}`} key={index}>
      <p className="rounded-md text-lg hover:bg-gray-700 px-4 py-2">{slug}</p>
    </Link>
  ));
}

export default function Journal() {
  const links = getLinks();

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="flex flex-col gap-1 w-full md:w-[50%]">{links}</div>
    </div>
  );
}
