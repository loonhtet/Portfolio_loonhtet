import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Link } from "next-view-transitions";

// import { Timeline, TimelineItem } from "tailwind-elements";

import { AiFillMail } from "react-icons/ai";

import html from "../../public/html.png";
import css from "../../public/css3.png";
import javascript from "../../public/javascript.png";
import bootstrap from "../../public/bootstrap.png";
import tailwind from "../../public/tailwind.png";
import react from "../../public/react.png";
import github from "../../public/github.png";

import socialMedia from "../../public/socialMedia-icon.png";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Info from "@/components/Info";
import { WorkExperience } from "@/components/WorkExperience";

export default function About() {
  return (
    <section className="md:w-4/5 lg:w-4/6 mx-auto min-h-screen px-5 md:px-0 py-10">
      <section className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 dark:from-blue-800 dark:via-blue-600 dark:to-blue-900 py-4 md:py-16 text-white shadow-blue-100 dark:shadow-blue-800 shadow-2xl rounded-md">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl md:text-4xl font-cabin font-extrabold uppercase">
            About Me
          </h1>
        </div>
      </section>

      <Info />
      <WorkExperience />
      <Skills />
      <Education />
    </section>
  );
}
