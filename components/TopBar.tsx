"use client";

import Link from "next/link";
import { ReactElement, useState } from "react";
import { FaCode, FaQuestion } from "react-icons/fa6";
import { IoIosJournal, IoIosMove, IoIosSettings } from "react-icons/io";
import { IoChatbubble } from "react-icons/io5";
import { LuPopcorn } from "react-icons/lu";
import { MdOutlineWindow, MdWindow } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function TopBar() {
  const [windowOpen, setWindowOpen] = useState(false);
  const buttons: { text: string; link: string; icon: ReactElement }[] = [
    {
      text: "About",
      link: "/about",
      icon: <FaQuestion className="h-8 w-8" />,
    },
    {
      text: "Anime",
      link: "/anime",
      icon: <LuPopcorn className="h-8 w-8" />,
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
    {
      text: "Settings",
      link: "/settings",
      icon: <IoIosSettings className="h-8 w-8" />,
    },
  ];
  const date = new Date().toLocaleDateString();
  return (
    <div className="fixed w-full top-20 flex flex-col items-center gap-10">
      <div className="text-white bg-gray-800 rounded-full px-6 py-1 flex flex-row items-center gap-10 shadow-lg">
        <h1 className="text-xl">daryll.ko</h1>
        <p>{date}</p>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div
              onClick={() => setWindowOpen((cur) => !cur)}
              className="hover:bg-gray-600 p-2 rounded-lg transition-all"
            >
              <IoIosMove className="h-8 w-8" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-28 border-gray-600 text-white bg-gray-800 shadow-lg rounded-md">
            <DropdownMenuLabel>Where to?</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gray-600" />
            {buttons.map(({ text, link, icon }, i) => (
              <DropdownMenuItem key={i} className="rounded-md">
                <Link
                  href={link}
                  className="h-full w-full flex flex-row justify-start gap-2 items-center"
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
