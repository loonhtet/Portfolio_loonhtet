import Navbar from "@/components/Navbar";
import Image from "next/image";

import {
  BsGithub,
  BsFacebook,
  BsFileEarmarkPersonFill,
  BsTelegram,
  BsFillArrowRightCircleFill,
  BsMailbox2,
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

import avatar from "../public/avatar.jpg";

import Link from "next/link";
export default function Home() {
  return (
    <section className="xl:w-4/6 flex flex-col md:flex-row justify-center items-center mx-auto min-h-screen px-5 py-10 md:p-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <div className="order-last md:order-first mx-auto flex flex-col justify-center  gap-3 px-3 py-10 md:p-10">
          <div className="relative text-justify hyphens-auto text-md md:text-xl rounded-md font-conden">
            {/* <FaQuoteLeft className="absolute left-0 md:-left-5 -top-5 text-xl md:text-3xl" /> */}
            {/* Programming is more about not giving up. */}
            <h1 className="text-6xl md:text-7xl font-conden font-bold">
              Loon Htet
            </h1>
            <h2 className="text-2xl mt-4 font-ptsan">Front-end Developer</h2>
            {/* <FaQuoteRight className="absolute right-0 md:-right-5 -bottom-5 text-xl md:text-3xl" /> */}
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-3 mt-5 mb-12 md:mb-0">
            <Link
              href="https://github.com/loonhtet"
              className="flex items-center bg-slate-900 text-white gap-2 px-4 py-2 rounded-full"
            >
              <BsGithub className="text-2xl" />
              <p className="hidden md:block font-ptsan">Github</p>
            </Link>

            <Link
              href=""
              className="flex items-center bg-blue-500 text-white gap-2 px-4 py-2 rounded-full"
            >
              <BsFacebook className="text-2xl" />
              <p className="hidden md:block font-ptsan">Facebook</p>
            </Link>

            <Link
              href="https://t.me/loonhtet"
              className="flex items-center bg-indigo-800 text-white gap-2 px-4 py-2 rounded-full"
            >
              <BsTelegram className="text-2xl" />
              <p className="hidden md:block font-ptsan">Telegram</p>
            </Link>

            <Link
              href=""
              className="flex items-center bg-zinc-700 text-white gap-2 px-4 py-2 rounded-full"
            >
              <AiFillMail className="text-2xl" />
              <p className="hidden md:block font-ptsan">Mail</p>
            </Link>

            <a
              href=""
              download={"../public/CV.pdf"}
              className="flex items-center bg-emerald-700 text-white gap-2 px-4 py-2 rounded-full"
            >
              <BsFileEarmarkPersonFill className="text-2xl" />
              <p className="hidden md:block font-ptsan">Resume</p>
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-start items-center gap-2">
          <Image
            className="w-48 h-48 md:w-72 md:h-72 border-4 border-blue-700 rounded-full object-cover"
            src={avatar}
            alt="avatar"
          />
          {/* <h1 className="capitalize text-5xl font-cabin">Loon Htet</h1>
          <p className="capitalize text-xl font-cabin">
            Front-end Web Developer
          </p> */}
        </div>
      </div>
    </section>
  );
}
