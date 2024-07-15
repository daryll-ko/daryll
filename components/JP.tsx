import { Klee_One } from "next/font/google";
import { ReactNode } from "react";

const kleeOne = Klee_One({ weight: "400", subsets: ["latin"] });

interface Props {
  children: ReactNode;
  className: string;
}

export default function JP({ children, className }: Props) {
  return <p className={`${kleeOne.className} ${className}`}>{children}</p>;
}
