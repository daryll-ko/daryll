import Link from "next/link";
import { ReactElement } from "react";
import { FaCode, FaQuestion } from "react-icons/fa6";
import { IoIosJournal, IoIosSettings } from "react-icons/io";
import { IoChatbubble } from "react-icons/io5";
import { LuPopcorn } from "react-icons/lu";

export default function TopBar() {
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
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="text-white bg-yellow-500/80 rounded-full px-3 py-1 flex flex-row gap-10 shadow-md">
        <p>daryll.ko</p>
        <p>07/09/24</p>
        <button>open (icon)</button>
      </div>
      <div className="bg-yellow-500/60 rounded-md p-3 grid grid-cols-3 grid-rows-2">
        {buttons.map(({ text, link, icon }, i) => (
          <div
            key={i}
            className="h-20 w-20 hover:bg-yellow-500/80 rounded-md transition-all"
          >
            <Link
              href={link}
              className="h-full flex flex-col justify-center gap-1 items-center"
            >
              {icon}
              <p>{text}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
