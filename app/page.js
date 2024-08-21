import Navbar from "@/components/Navbar";
import Image from "next/image";

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

import {
  MdOutlineDarkMode,
  MdOutlineFileDownload,
  MdSchool,
  MdLocationOn,
  MdDateRange,
  MdCode,
} from "react-icons/md";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

// import avatar from "../public/avatar.jpg";
import avatar from "../public/profile-pic.jpg";
// import coding from "../public/coding.png";

import { Link } from "next-view-transitions";

import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { FadeText } from "@/components/magicui/fade-text";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import BlurFade from "@/components/magicui/blur-fade";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";

export default function Home() {
  return (
    // <section className="xl:w-4/6 flex flex-col md:flex-row justify-center items-center mx-auto min-h-screen px-5 py-10 md:p-10">
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
    //     <div className="order-last md:order-first mx-auto flex flex-col justify-center  gap-3 px-3 py-10 md:p-10">
    //       <div className="relative text-justify hyphens-auto text-md md:text-xl rounded-md font-conden">
    //         {/* <FaQuoteLeft className="absolute left-0 md:-left-5 -top-5 text-xl md:text-3xl" /> */}
    //         {/* Programming is more about not giving up. */}
    //         <h1 className="text-5xl lg:text-6xl font-conden font-bold text-center md:text-left">
    //           Loon Htet
    //         </h1>
    //         <h2 className="text-2xl mt-4 font-ptsan text-center md:text-left">
    //           Web Developer
    //         </h2>
    //         {/* <FaQuoteRight className="absolute right-0 md:-right-5 -bottom-5 text-xl md:text-3xl" /> */}
    //       </div>
    // <div className="flex flex-wrap gap-x-5 gap-y-3 mt-5 mb-12 md:mb-0">
    //   <Link
    //     href="https://github.com/loonhtet"
    //     className="flex items-center bg-slate-900 text-white gap-2 px-4 py-2 rounded-full"
    //   >
    //     <BsGithub className="text-2xl" />
    //     <p className="hidden md:block font-ptsan">Github</p>
    //   </Link>

    //   <Link
    //     href="https://join.skype.com/invite/y8bYAczycbLn"
    //     className="flex items-center bg-blue-500 text-white gap-2 px-4 py-2 rounded-full"
    //   >
    //     <BsSkype className="text-2xl" />
    //     <p className="hidden md:block font-ptsan">Skype</p>
    //   </Link>

    //   <Link
    //     href="https://t.me/loonhtet"
    //     className="flex items-center bg-blue-500 text-white gap-2 px-4 py-2 rounded-full"
    //   >
    //     <BsTelegram className="text-2xl" />
    //     <p className="hidden md:block font-ptsan">Telegram</p>
    //   </Link>

    //   <Link
    //     href="https://www.linkedin.com/in/loon-htet-baa4a02b2/"
    //     className="flex items-center bg-blue-700 text-white gap-2 px-4 py-2 rounded-full"
    //   >
    //     <BsLinkedin className="text-2xl" />
    //     <p className="hidden md:block font-ptsan">Linkedin</p>
    //   </Link>

    //   <Link
    //     href="mailto:loonhtet.dev@gmail.com"
    //     className="flex items-center bg-slate-800 text-white gap-2 px-4 py-2 rounded-full"
    //   >
    //     <AiFillMail className="text-2xl" />
    //     <p className="hidden md:block font-ptsan">Mail</p>
    //   </Link>

    //   <a
    //     href={"/CV.pdf"}
    //     download="/Resume.pdf"
    //     className="flex items-center bg-cyan-700 text-white gap-2 px-4 py-2 rounded-full"
    //   >
    //     <BsFileEarmarkPersonFill className="text-2xl" />
    //     <p className="hidden md:block font-ptsan">Resume</p>
    //   </a>
    // </div>
    //     </div>

    //     <div className="flex flex-col justify-start items-center gap-2">
    //       <Image
    //         className="w-48 h-48 md:w-72 md:h-72 border-4 border-blue-700 rounded-full object-cover"
    //         src={avatar}
    //         alt="avatar"
    //       />
    //       {/* <h1 className="capitalize text-5xl font-cabin">Loon Htet</h1>
    //       <p className="capitalize text-xl font-cabin">
    //         Front-end Web Developer
    //       </p> */}
    //     </div>
    //   </div>
    // </section>
    <section className="sm:w-4/5 md:w-4/6 mx-auto min-h-screen px-5 md:px-0 py-10">
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
          className="font-display text-center uppercase text-[2.3em] xs:text-[2.6em] md:text-[5em] lg:text-[6em] xl:text-[8em] font-bold font-conden text-black dark:text-white"
          text="Web Developer"
        />
        <FadeText
          className="text-md lg:text-2xl text-dark dark:text-gray-400 font-ptsan"
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
        {/* <div className="w-full flex justify-center items-center absolute bottom-0 left-1/2 -translate-x-1/2">
          <div className="flex flex-wrap gap-x-4 md:gap-x-5 gap-y-3 mt-5 mb-12 md:mb-0">
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
        </div> */}

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
    </section>
  );
}
