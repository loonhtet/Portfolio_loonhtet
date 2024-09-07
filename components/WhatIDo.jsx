import React from "react";
import { BiSolidChevronRight } from "react-icons/bi";

import { BorderBeam } from "@/components/magicui/border-beam";
import BlurFade from "@/components/magicui/blur-fade";

import { Link } from "next-view-transitions";

export const WhatIDo = () => {
  return (
    <main className="sm:w-4/5 md:w-4/6 mx-auto min-h-screen px-5 md:px-0 py-10">
      <BlurFade inView className="grid gap-8 p-4">
        <span className="uppercase text-lg font-bold ">What I do</span>
        <div className="isolate rounded-xl bg-blue-950/20 shadow-lg ring-1 ring-black/5 h-[650px]"></div>
        <div className="flex items-center justify-between">
          <p className="text-center text-2xl font-semibold">Web Development</p>
          <Link
            href={"/Projects"}
            className="relative w-fit h-fit px-4 py-4 overflow-hidden ms-auto rounded-lg bg-slate-950/[.30] hover:bg-blue-950/30 transition ease-linear border-2 border-blue-950 md:shadow-xl"
          >
            <span className="flex items-center gap-x-1 text-lg font-semibold">
              More Projects
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
        </div>
      </BlurFade>
    </main>
  );
};
