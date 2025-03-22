import React from "react";
import { BorderBeam } from "@/components/magicui/border-beam";
import BlurFade from "@/components/magicui/blur-fade";

import { BiSolidChevronRight } from "react-icons/bi";
import { Link } from "next-view-transitions";

export const HeroAbout = () => {
  return (
    <main className="sm:w-4/5 md:w-4/6 mx-auto min-h-screen flex justify-center items-center px-5 md:px-0 py-10">
      <div className="grid gap-y-12">
        <BlurFade delay={0.25} inView>
          <span className="uppercase text-lg font-bold">
            A Few Things about me
          </span>
        </BlurFade>

        <BlurFade delay={0.25 * 2} inView>
          <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading:[2.5rem] md:leading-[3rem] lg:leading-[4.5rem] xl:leading-[5rem] text-justify text-gray-300">
            I&apos;ve been a developer for over 3 years now, and in that time,
            I&apos;ve attended enough online classes and workshops. Currently, I
            am studying for a degree at university, and once that&apos;s done,
            I&apos;ll graduate!
          </p>
        </BlurFade>

        <BlurFade delay={0.25 * 3} inView className="w-full flex justify-end">
          <Link
            href={"/About"}
            className="relative w-fit px-4 py-4 overflow-hidden ms-auto rounded-lg bg-slate-950/[.30] hover:bg-blue-950/30 transition ease-linear border-2 border-blue-950 md:shadow-xl"
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
      </div>
    </main>
  );
};
