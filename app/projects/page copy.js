import Navbar from "@/components/Navbar";
import Image from "next/image";

import skill1 from "../../public/skill1.jpg";
import sketch3 from "../../public/sketch3.png";

import Link from "next/link";

import { PiWaveformBold } from "react-icons/pi";
import { LuGithub } from "react-icons/lu";
import Project from "@/components/Project";
import SmallProject from "@/components/SmallProject";
import { TestProject } from "@/components/TestProject";

const projectDatas = [
  {
    image: "/skill1.jpg",
    name: "Website Name",
    breadcrumbs: "E-commance",
    github: "/",
    live: "/",
  },
];

export default function Projects() {
  return (
    <section className="md:w-4/5 lg:w-4/6 mx-auto min-h-screen px-5 md:px-0 py-10">
      <section className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 dark:from-blue-800 dark:via-blue-600 dark:to-blue-900 py-4 md:py-16 text-white shadow-blue-100 dark:shadow-blue-800 shadow-2xl rounded-md">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl md:text-4xl font-cabin font-extrabold uppercase">
            Projects
          </h1>
        </div>
      </section>

      <Project />
      {/* <TestProject /> */}
      {/* <SmallProject /> */}
    </section>
  );
}
