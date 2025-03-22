import React from "react";

import { BsChevronDown } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

import { Link } from "next-view-transitions";

import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { FadeText } from "@/components/magicui/fade-text";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import BlurFade from "@/components/magicui/blur-fade";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import ShimmerButton from "./magicui/shimmer-button";
import ShinyButton from "./magicui/shiny-button";

export const Hero = () => {
  return (
    <main className="sm:w-4/5 md:w-4/6 mx-auto min-h-screen px-5 md:px-0 py-10">
      <div className="relative w-full h-[80vh] grid place-content-center text-center gap-4">
        <BlurFade delay={0.4}>
          <div
            className={cn(
              "w-fit mx-auto rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-zinc-200 dark:border-white/5 dark:bg-slate-900 dark:hover:bg-slate-800"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center cursor-default gap-x-3 px-4 py-1 transition ease-out hover:text-zinc-600 hover:duration-300 hover:dark:text-zinc-400">
              <span className="relative flex h-auto w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
              </span>
              <span className="text-md md:text-xl font-bold uppercase cursor-default">
                avaliable
              </span>
            </AnimatedShinyText>
          </div>
        </BlurFade>
        <GradualSpacing
          className="text-center tracking-tighter uppercase text-[2.3em] xs:text-[2.6em] md:text-[5em] lg:text-[6em] xl:text-[8em] font-bold text-black dark:text-white"
          text="Web Developer"
        />
        <FadeText
          className="text-md lg:text-2xl text-dark dark:text-gray-400  font-ptsan"
          direction="up"
          framerProps={{
            show: { transition: { delay: 0.4 } },
          }}
          text={
            <>
              I&apos;m <b>Loon Htet</b> and I develop fully functional and
              responsive websites.
            </>
          }
        />

        {/* <ShinyButton text="Download Resume" className={"w-fit mx-auto mt-5"} /> */}

        <BlurFade delay={0.4} className={"mt-12"}>
          {/* <BsChevronDown className=" animate-bounce" /> */}
          <a
            href="/Loon Htet's CV.pdf"
            class="flex items-center gap-x-2 uppercase border border-slate-700 text-slate-300 rounded-md w-fit mx-auto text-sm px-3 py-1.5 md:px-5 md:py-2 hover:bg-slate-950/40 hover:text-white duration-500"
            download="Loon Htet's CV.pdf"
          >
            Resume
            <HiDownload class="text-md" />
          </a>
        </BlurFade>

        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[0%] h-[100%] skew-y-12"
          )}
        />
      </div>
    </main>
  );
};
