import Navbar from "@/components/Navbar";

import Image from "next/image";
import { Link } from "next-view-transitions";

import slugify from "slugify";

import react from "react";
// import Slider from "react-slick";

import {
  BsGithub,
  BsFacebook,
  BsFileEarmarkPersonFill,
  BsTelegram,
  BsFillArrowRightCircleFill,
  BsMailbox2,
  BsLinkedin,
  BsSkype,
  BsChevronRight,
} from "react-icons/bs";

import { BiSolidChevronRight } from "react-icons/bi";

import { PiWaveformBold } from "react-icons/pi";
import { LuGithub } from "react-icons/lu";

import { AiFillMail } from "react-icons/ai";

const skillsData = [
  {
    src: "/html.svg",
    des: "HTML",
    status: "confidient",
  },
  {
    src: "/css3.svg",
    des: "CSS",
    status: "confidient",
  },
  {
    src: "/javascript.svg",
    des: "JavaScript",
    status: "confidient",
  },
  {
    src: "/jquery.svg",
    des: "jQuery",
    status: "confidient",
  },
  {
    src: "/bootstrap.svg",
    des: "Bootstrap",
    status: "confidient",
  },
  {
    src: "/tailwind.svg",
    des: "Tailwind",
    status: "confidient",
  },
  {
    src: "/github.svg",
    des: "Github",
    status: "confidient",
  },
  {
    src: "/react.svg",
    des: "React",
    status: "confidient",
  },
  {
    src: "/php.svg",
    des: "Php",
    status: "Learning",
  },
  {
    src: "/linux.svg",
    des: "Linux",
    status: "confidient",
  },
  {
    src: "/mysql.svg",
    des: "MySQL",
    status: "confidient",
  },
  {
    src: "/sql.svg",
    des: "SQL",
    status: "confidient",
  },
];

import fs from "fs";
import path from "path";
import NotFound from "@/app/not-found";

const projectDetailData = [
  {
    img: "/homepage_portfolio.png",
  },
  {
    img: "/homepage_lunnabelle.png",
  },
];

// // Helper function to read and parse the JSON file
// const getProjects = () => {
//   const filePath = path.join(process.cwd(), "data", "projects.json");
//   const jsonData = fs.readFileSync(filePath, "utf-8");
//   return JSON.parse(jsonData);
// };

// // Helper function to get a specific project by name
// const getProjectByName = (name) => {
//   const projects = getProjects();
//   return projects.find((project) => project.name === name);
// };

// // Function to generate static paths
// export async function generateStaticParams() {
//   const projects = getProjects();
//   return projects.map((project) => ({
//     name: project.name,
//   }));
// }

async function getProjects() {
  const filePath = path.join(process.cwd(), "data", "projects.json");
  const jsonData = await fs.promises.readFile(filePath, "utf-8");
  return JSON.parse(jsonData);
}

export default async function page({ params }) {
  const name = params;
  console.log(name);

  const projects = await getProjects();

  const project = projects.find((project) => project.name === name);
  console.log(project.name);

  return (
    <section className="md:w-4/6 mx-auto min-h-screen px-5 md:px-0 py-10">
      <div className="grid grid-cols-2 gap-4">
        <section className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 dark:from-blue-800 dark:via-blue-600 dark:to-blue-900 py-4 md:py-16 text-white shadow-blue-100 dark:shadow-blue-800 shadow-2xl rounded-md">
          <div className="container mx-auto text-center">
            <h1 className="text-2xl md:text-4xl font-cabin font-extrabold uppercase">
              Detail
            </h1>
          </div>
        </section>

        <section>
          <div className="h-full flex flex-col justify-center items-center border-2 border-blue-500 rounded-md ">
            <h1 className="text-2xl md:text-4xl font-cabin font-extrabold text-transparent bg-clip-text bg-gradient-to-tl from-blue-400 to-blue-200">
              {project.name}
            </h1>
          </div>
        </section>
      </div>

      <section className="mt-14">
        {/* <Slider {...settings}> */}
        <div>
          <Image
            src={projectDetailData[1].img}
            unoptimized={true}
            width="1920"
            height="1440"
            className="w-full lg:h-[36rem] rounded-md border-2 border-blue-600 object-cover"
          />
        </div>
        {/* </Slider> */}
      </section>

      <section className="mt-24">
        <div>
          <h3 className="text-3xl mb-5 text-bold font-cabin">About</h3>
          <p className="dark:text-slate-300 text-xl font-ptsan leading-10 mt-8 whitespace-pre-line indent-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <p className="dark:text-slate-300 text-xl font-ptsan leading-10 mt-8 whitespace-pre-line indent-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </section>

      <section className="mt-24">
        <h3 className="text-3xl mb-5 text-bold font-cabin">
          Technologies used
        </h3>
        <div className="grid grid-cols-4">
          <div className="bg-gray-100 dark:bg-slate-950/[.30] dark:border-blue-800 rounded-lg p-6 border border-gray-100">
            <div className="flex flex-col justify-center items-center gap-1">
              <Image
                src={skillsData[0].src}
                alt=""
                width={50}
                height={50}
                className="w-12 h-12"
              />
              <p className="text-md font-semibold tracking-wider text-center">
                {skillsData[0].des}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-24">
        <h3 className="text-3xl mb-5 text-bold font-cabin">Web Pages</h3>
        <div className="grid gap-24">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-6 xl:gap-x-6">
            <Image
              src={projectDetailData[1].img}
              unoptimized={true}
              width={50}
              height={50}
              className="w-full rounded-md col-span-2"
            />
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-6xl font-semibold mb-10 text-bold font-cabin">
                  Home page of website
                </h3>
                <p className="text-lg dark:text-slate-300 leading-8">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-7">
                <Link href="/">
                  <button className="w-full flex justify-center items-center gap-x-1 py-4 bg-zinc-900 text-gray-100 dark:text-zinc-900 dark:bg-gray-100 font-conden font-semibold text-sm lg:text-md uppercase rounded-md duration-300 hover:scale-95">
                    Github
                    <LuGithub />
                  </button>
                </Link>

                <Link href="/">
                  <button className="w-full flex justify-center items-center gap-x-1 py-4 bg-red-500 text-gray-100 font-conden font-semibold text-sm lg:text-md uppercase rounded-md duration-300 hover:scale-95">
                    Live
                    <PiWaveformBold />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-y-6 xl:gap-x-6">
            <div className="flex flex-col justify-between">
              <div className="">
                <h3 className="text-6xl font-semibold mb-10 text-bold font-cabin">
                  Home page of website
                </h3>
                <p className="text-lg dark:text-slate-300 leading-8">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-7">
                <Link href="/">
                  <button className="w-full flex justify-center items-center gap-x-1 py-4 bg-zinc-900 text-gray-100 dark:text-zinc-900 dark:bg-gray-100 font-conden font-semibold text-sm lg:text-md uppercase rounded-md duration-300 hover:scale-95">
                    Github
                    <LuGithub />
                  </button>
                </Link>

                <Link href="/">
                  <button className="w-full flex justify-center items-center gap-x-1 py-4 bg-red-500 text-gray-100 font-conden font-semibold text-sm lg:text-md uppercase rounded-md duration-300 hover:scale-95">
                    Live
                    <PiWaveformBold />
                  </button>
                </Link>
              </div>
            </div>
            <Image
              src={projectDetailData[1].img}
              unoptimized={true}
              width={50}
              height={50}
              className="w-full rounded-md col-span-2 order-first xl:order-last"
            />
          </div>
        </div>
      </section>

      <section className="mt-[200px]">
        <h3 className="text-3xl mb-5 text-bold font-cabin">Contact Me</h3>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-28">
          <div className="lg:col-span-2">
            <div className="lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 mb-12 md:mb-0">
              <Link
                href="https://github.com/loonhtet"
                className="flex items-center bg-slate-900 text-white gap-2 px-4 py-2 rounded-full"
              >
                <BsGithub className="text-2xl" />
                <p className="font-ptsan">Github</p>
              </Link>

              <Link
                href="https://join.skype.com/invite/y8bYAczycbLn"
                className="flex items-center bg-blue-500 text-white gap-2 px-4 py-2 rounded-full"
                c
              >
                <BsSkype className="text-2xl" />
                <p className="font-ptsan">Skype</p>
              </Link>

              <Link
                href="https://t.me/loonhtet"
                className="flex items-center bg-blue-500 text-white gap-2 px-4 py-2 rounded-full"
              >
                <BsTelegram className="text-2xl" />
                <p className="font-ptsan">Telegram</p>
              </Link>

              <Link
                href="https://www.linkedin.com/in/loon-htet-baa4a02b2/"
                className="flex items-center bg-blue-700 text-white gap-2 px-4 py-2 rounded-full"
              >
                <BsLinkedin className="text-2xl" />
                <p className="font-ptsan">Linkedin</p>
              </Link>

              <Link
                href="mailto:loonhtet.dev@gmail.com"
                className="flex items-center bg-slate-800 text-white gap-2 px-4 py-2 rounded-full"
              >
                <AiFillMail className="text-2xl" />
                <p className="font-ptsan">Mail</p>
              </Link>

              <a
                href={"/CV.pdf"}
                download="/Resume.pdf"
                className="flex items-center bg-cyan-700 text-white gap-2 px-4 py-2 rounded-full"
              >
                <BsFileEarmarkPersonFill className="text-2xl" />
                <p className="font-ptsan">Resume</p>
              </a>
            </div>
          </div>

          <div>
            <Link href="/">
              <button className="w-full h-full flex justify-center items-center bg-gray-100 dark:bg-blue-800 font-semibold rounded-full text-lg lg:text-2xl hover:bg-blue-800 hover:text-slate-100 dark:hover:bg-slate-100 dark:hover:text-slate-950 duration-300">
                Send Mail
                <BiSolidChevronRight className="w-6 h-6 lg:w-10 lg:h-10 ms-1" />
              </button>
            </Link>
          </div>
          <div></div>
        </div>
      </section>

      <Navbar />
    </section>
  );
}

export async function getStaticPaths() {
  const projects = await getProjects();
  console.log(projects);

  const paths = projects.map((project) => ({
    params: { name: project.name.toString() },
  }));
  console.log(paths);

  return { paths, fallback: false }; // Adjust fallback as needed
}
