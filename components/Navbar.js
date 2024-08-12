"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import {
  BiHomeAlt2,
  BiUser,
  BiRocket,
  BiSolidMoon,
  BiSolidSun,
} from "react-icons/bi";
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
    <nav className={theme}>
      <div
        className={`fixed z-50 flex justify-center items-center -translate-x-1/2 left-1/2 bottom-0`}
      >
        <ul
          className={`flex justify-center items-center gap-2 p-2 mb-3 m-3 me-1 md:me-2 border-2 border-blue-600 rounded-full backdrop-blur supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75`}
        >
          <Link href="/" prefetch>
            <li className="bg-blue-600 text-white px-4 py-2 rounded-full">
              <BiHomeAlt2 className="text-2xl" />
            </li>
          </Link>

          <Link href="/about" prefetch>
            <li className="bg-blue-600 text-white px-4 py-2 rounded-full">
              <BiUser className="text-2xl" />
            </li>
          </Link>

          <Link href="/projects" prefetch>
            <li className="bg-blue-600 text-white px-4 py-2 rounded-full">
              <BiRocket className="text-2xl" />
            </li>
          </Link>

          <Link href="/contact" prefetch>
            <li className="bg-blue-600 text-white px-4 py-2 rounded-full">
              <AiOutlineMail className="text-2xl" />
            </li>
          </Link>
        </ul>

        <button
          onClick={toggleDarkMode}
          className="bg-gray-700 text-blue-100 dark:bg-blue-100 dark:text-gray-900 px-3 py-3 text-2xl rounded-full"
        >
          {theme === "dark" ? <BiSolidSun /> : <BiSolidMoon />}
        </button>
      </div>
    </nav>
  );
}

// sticky top-0 z-40 w-full  flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10

// dark:border-slate-50/[0.06] bg-white
