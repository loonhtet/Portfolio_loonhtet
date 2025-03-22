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

import avatar from "../public/profile-pic.jpg";
import { Link } from "next-view-transitions";

import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { FadeText } from "@/components/magicui/fade-text";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import BlurFade from "@/components/magicui/blur-fade";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { HeroAbout } from "@/components/HeroAbout";
import { HeroContact } from "@/components/HeroContact";
import { Hero } from "@/components/Hero";
import { HeroProjects } from "@/components/HeroProjects";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <HeroAbout /> */}
      {/* <HeroProjects /> */}
      {/* <HeroContact /> */}
    </main>
  );
}
