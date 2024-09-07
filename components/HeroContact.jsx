import React from "react";

import { GoArrowDownRight } from "react-icons/go";
import { BiSolidChevronRight } from "react-icons/bi";
import {
  BsGithub,
  BsFacebook,
  BsFileEarmarkPersonFill,
  BsTelegram,
  BsFillArrowRightCircleFill,
  BsMailbox2,
  BsLinkedin,
  BsSkype,
  BsChevronDown,
} from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";

import { BorderBeam } from "@/components/magicui/border-beam";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import BlurFade from "@/components/magicui/blur-fade";

import { Link } from "next-view-transitions";

export const HeroContact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <BlurFade inView className="mt-[20vh] lg:mt-[40vh] mb-24 lg:mb-36">
      <div className="mb-[15vh] lg:mb-[35vh]">
        <VelocityScroll
          text="Let's Connect -->"
          default_velocity={1}
          className="font-jetbrain text-center text-5xl font-bold text-black drop-shadow-sm dark:text-gray-200 md:text-8xl md:leading-[8rem]"
        />
      </div>
      <div className="grid gap-12 md:gap-16 lg:gap-24 sm:w-4/5 md:w-4/6 mx-auto px-5 md:px-0 py-10">
        {/* <div className="flex justify-between">
          <div className="text-2xl font-semibold flex items-center gap-x-4">
            Feel Free to Contact Me
            <GoArrowDownRight size={30} />
          </div>
          <Link
            href={"/Contact"}
            className="relative w-fit h-fit px-4 py-4 overflow-hidden ms-auto rounded-lg bg-slate-950/[.30] hover:bg-blue-950/30 transition ease-linear border-2 border-blue-950 md:shadow-xl"
          >
            <span className="flex items-center gap-x-1 text-lg font-semibold">
              Mail Me
              <BiSolidChevronRight size={28} />
            </span>
            <BorderBeam
              size={100}
              borderWidth={2.5}
              duration={6}
              delay={5}
              colorFrom="#245ee0"
              colorTo="#007BFF"
            />
          </Link>
        </div> */}

        <h1 className="text-center text-4xl lg:text-5xl xl:text-6xl">
          Let&apos;s have a chat!
        </h1>
        {/* 
        <div className="w-full grid place-content-center">
          <Link
            href={"/Contact"}
            className="relative w-fit h-fit px-4 py-4 overflow-hidden ms-auto rounded-lg bg-slate-950/[.30] hover:bg-blue-950/30 transition ease-linear border-2 border-blue-950 md:shadow-xl"
          >
            <span className="flex items-center gap-x-1 text-lg font-semibold">
              Mail Me
              <BiSolidChevronRight size={28} />
            </span>
            <BorderBeam
              size={100}
              borderWidth={2.5}
              duration={6}
              delay={5}
              colorFrom="#245ee0"
              colorTo="#007BFF"
            />
          </Link>
        </div> */}

        <div className="w-full flex justify-center">
          <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-4 md:gap-x-5 gap-y-3 mt-5 mb-12 md:mb-0">
            <Link
              href="https://github.com/loonhtet"
              className="flex items-center bg-slate-900 text-white gap-2 px-4 py-2 rounded-full"
            >
              <BsGithub className="text-2xl" />
              <p className="hidden md:block font-ptsan">Github</p>
            </Link>

            <Link
              href="https://join.skype.com/invite/y8bYAczycbLn"
              className="flex items-center bg-blue-500 text-white gap-2 px-4 py-2 rounded-full"
            >
              <BsSkype className="text-2xl" />
              <p className="hidden md:block font-ptsan">Skype</p>
            </Link>

            <Link
              href="https://t.me/loonhtet"
              className="flex items-center bg-blue-500 text-white gap-2 px-4 py-2 rounded-full"
            >
              <BsTelegram className="text-2xl" />
              <p className="hidden md:block font-ptsan">Telegram</p>
            </Link>

            <Link
              href="https://www.linkedin.com/in/loon-htet-baa4a02b2/"
              className="flex items-center bg-blue-700 text-white gap-2 px-4 py-2 rounded-full"
            >
              <BsLinkedin className="text-2xl" />
              <p className="hidden md:block font-ptsan">Linkedin</p>
            </Link>

            <Link
              href="mailto:loonhtet.dev@gmail.com"
              className="flex items-center bg-slate-800 text-white gap-2 px-4 py-2 rounded-full"
            >
              <AiFillMail className="text-2xl" />
              <p className="hidden md:block font-ptsan">Mail</p>
            </Link>

            <a
              href={"/CV.pdf"}
              download="/Resume.pdf"
              className="flex items-center bg-cyan-700 text-white gap-2 px-4 py-2 rounded-full"
            >
              <BsFileEarmarkPersonFill className="text-2xl" />
              <p className="hidden md:block font-ptsan">Resume</p>
            </a>
          </div>
        </div>

        {/* <h2 className="uppercase text-xl text-center font-bold">
          {currentYear} © Loon Htet
        </h2> */}
      </div>
    </BlurFade>
  );
};
