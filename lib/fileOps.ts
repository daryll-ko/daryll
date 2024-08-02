import fs from "fs";
import path from "path";

const writingDirectory = path.join(process.cwd(), "notes");

function formFilename(slug: string, directory: string = writingDirectory) {
  return path.join(directory, `${slug}.mdx`);
}

export function getFileContents(
  slug: string,
  directory: string = writingDirectory,
) {
  return fs.readFileSync(formFilename(slug, directory), "utf-8");
}

export function getSlugs(directory: string = writingDirectory) {
  const filenames = fs.readdirSync(directory);
  return filenames.map((filename) => filename.replace(/\.mdx$/, ""));
}
