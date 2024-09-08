"use client";

import Link from "next/link";
import { ReactElement } from "react";
import { FaCode, FaQuestion } from "react-icons/fa6";
import { IoIosJournal, IoIosMove } from "react-icons/io";
import { IoChatbubble } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function TopBar() {
  const buttons: { text: string; link: string; icon: ReactElement }[] = [
    {
      text: "About",
      link: "/about",
      icon: <FaQuestion className="h-8 w-8" />,
    },
    {
      text: "Chat",
      link: "/chat",
      icon: <IoChatbubble className="h-8 w-8" />,
    },
    {
      text: "Code",
      link: "/code",
      icon: <FaCode className="h-8 w-8" />,
    },
    {
      text: "Journal",
      link: "/journal",
      icon: <IoIosJournal className="h-8 w-8" />,
    },
  ];
  const date = new Date().toLocaleDateString();
  return (
    <div className="z-10 fixed mx-auto top-0 w-full flex flex-col items-center gap-10">
      <div className="text-white bg-gray-800 rounded-b-full px-14 pt-1 pb-2 flex flex-row items-center gap-10 shadow-lg">
        <Link href="/">
          <h1 className="text-2xl">daryll.ko</h1>
        </Link>
        <p className="text-lg">{date}</p>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="hover:bg-gray-600 p-2 rounded-lg transition-all">
              <IoIosMove className="h-8 w-8" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-28 shadow-lg">
            <DropdownMenuLabel>Where to?</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gray-600" />
            {buttons.map(({ text, link, icon }, i) => (
              <DropdownMenuItem key={i} className="rounded-md p-0">
                <Link
                  href={link}
                  className="h-full w-full flex flex-row p-2 justify-start gap-2 items-center"
                >
                  {icon}
                  <p>{text}</p>
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
