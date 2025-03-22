"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { Link } from "next-view-transitions";
import {
  BiHomeAlt2,
  BiUser,
  BiRocket,
  BiSolidMoon,
  BiSolidSun,
} from "react-icons/bi";

import { HiOutlineHome } from "react-icons/hi2";
import { HiHome } from "react-icons/hi";
import { RiUser3Fill } from "react-icons/ri";
import { HiUser } from "react-icons/hi";
import { HiCodeBracketSquare } from "react-icons/hi2";
import { HiMail } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const toggleDarkMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    // <nav className={theme}>
    //   <div
    //     className={`fixed z-50 flex justify-center items-center -translate-x-1/2 left-1/2 bottom-0`}
    //   >
    //     <ul
    //       className={`flex justify-center items-center gap-2 p-2 mb-3 m-3 me-1 md:me-2 border-2 border-blue-600 rounded-full backdrop-blur supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75`}
    //     >
    //       <Link href="/" prefetch>
    //         <li className="bg-blue-600 text-white px-4 py-2 rounded-full">
    //           <BiHomeAlt2 className="text-2xl" />
    //         </li>
    //       </Link>

    // <Link href="/about" prefetch>
    //   <li className="bg-blue-600 text-white px-4 py-2 rounded-full">
    //     <BiUser className="text-2xl" />
    //   </li>
    // </Link>

    // <Link href="/projects" prefetch>
    //   <li className="bg-blue-600 text-white px-4 py-2 rounded-full">
    //     <BiRocket className="text-2xl" />
    //   </li>
    // </Link>

    // <Link href="/contact" prefetch>
    //   <li className="bg-blue-600 text-white px-4 py-2 rounded-full">
    //     <AiOutlineMail className="text-2xl" />
    //   </li>
    // </Link>
    //     </ul>

    //     <button
    //       onClick={toggleDarkMode}
    //       className="bg-gray-700 text-blue-100 dark:bg-blue-100 dark:text-gray-900 px-3 py-3 text-2xl rounded-full"
    //     >
    //       {theme === "dark" ? <BiSolidSun /> : <BiSolidMoon />}
    //     </button>
    //   </div>
    // </nav>

    <div
      className={`fixed z-50 flex justify-center items-center -translate-x-1/2 left-1/2 bottom-6`}
    >
      <Dock
        direction="middle"
        magnification="40"
        distance="100"
        className="rounded-full py-4 px-2"
      >
        {/* <DockIcon className="bg-black/10 dark:bg-white/10 p-1 ">
          <Link href="/" prefetch>
            <BiHomeAlt2 className="size-12" />
          </Link>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-1">
          <Link href="/about" prefetch>
            <BiUser className="size-full" />
          </Link>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-1">
          <Link href="/projects" prefetch className="">
            <BiRocket className="size-full" />
          </Link>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-1">
          <Link href="/contact" prefetch>
            <AiOutlineMail className="size-full" />
          </Link>
        </DockIcon> */}

        <Link href="/" prefetch>
          <button className="bg-blue-950/20  text-white p-3 rounded-full">
            <HiHome className="text-2xl" />
          </button>
        </Link>

        <Link href="/about" prefetch>
          <button className="bg-blue-950/20  text-white p-3 rounded-full">
            <HiUser className="text-2xl" />
          </button>
        </Link>

        <Link href="/projects" prefetch>
          <button className="bg-blue-950/20  text-white p-3 rounded-full">
            <HiCodeBracketSquare className="text-2xl" />
          </button>
        </Link>

        <Link href="/contact" prefetch>
          <button className="bg-blue-950/20  text-white p-3 rounded-full">
            <HiMail className="text-2xl" />
          </button>
        </Link>
      </Dock>
    </div>
  );
}

// sticky top-0 z-40 w-full  flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10

// dark:border-slate-50/[0.06] bg-white
