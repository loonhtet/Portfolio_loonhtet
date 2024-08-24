import React from "react";
import { BorderBeam } from "@/components/magicui/border-beam";
import BlurFade from "@/components/magicui/blur-fade";

import { BiSolidChevronRight } from "react-icons/bi";
import { Link } from "next-view-transitions";

export const HeroAbout = () => {
  return (
    <main className="sm:w-4/5 md:w-4/6 mx-auto min-h-screen px-5 md:px-0 py-10">
      <BlurFade
        inView
        className="grid gap-2 md:gap-8 h-[80vh] mt-[20vh] lg:mt-[40vh]"
      >
        <span className="uppercase text-lg font-bold">
          A Few Things about me
        </span>

        <p className="text-2xl md:text-4xl lg:text-5xl leading-[3rem] md:leading-[4.5rem] lg:leading-[6rem] text-justify text-gray-300">
          I&apos;ve been a developer for over 3 years now, and in that time,
          I&apos;ve attended enough online classes and workshops. Currently, I
          am studying for a degree at university, and once that&apos;s done,
          I&apos;ll graduate!
        </p>
        <Link
          href={"/About"}
          className="relative w-fit h-fit px-4 py-4 overflow-hidden ms-auto rounded-lg bg-slate-950/[.30] hover:bg-blue-950/30 transition ease-linear border-2 border-blue-950 md:shadow-xl"
        >
          <span className="flex items-center gap-x-1 text-lg font-semibold">
            More About
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
      </BlurFade>
    </main>
  );
};
