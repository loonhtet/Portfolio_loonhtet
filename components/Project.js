"use client";

import { Link } from "next-view-transitions";
import Image from "next/image";

import Aos from "aos";
import "aos/dist/aos.css";

import { PiWaveformBold } from "react-icons/pi";
import { LuGithub } from "react-icons/lu";

import skill from "../public/skill1.jpg";
import { useEffect } from "react";

export default function Project() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });

  const projectDatas = [
    {
      image: "/lunabelle-shots.png",
      name: "Lunna Belle",
      breadcrumbs: ["React", "Tailwind CSS", "Sanity"],
      description: "",
      github: "https://github.com/loonhtet/LunaBelle-Frontend",
      live: "https://lunabelle.netlify.app/",
    },

    {
      image: "/bloodie-shots.png",
      name: "Bloodie",
      breadcrumbs: ["Tailwind CSS", "PHP", "MySQL"],
      description: "",
      github: "https://github.com/loonhtet/",
      live: "https://bloodie.000webhostapp.com/",
    },

    {
      image: "/dashboard-shots.png",
      name: "Admin Dashboard",
      breadcrumbs: ["HTML", "CSS", "jQuery", "Bootstrap", "Chart.js"],
      description: "",
      github: "https://github.com/loonhtet/Dashboard",
      live: "https://dashboard.on.fleek.co/",
    },

    {
      image: "/vesperr-shots.png",
      name: "Vesperr",
      breadcrumbs: ["HTML", "CSS", "Bootstrap"],
      description: "",
      github: "https://github.com/loonhtet/Vesperr",
      live: "https://vesperr.on.fleek.co/",
    },

    {
      image: "/planco-shots.png",
      name: "Plannco",
      breadcrumbs: ["Bootstrap", "JavaScript", "jQuery"],
      description: "",
      github: "https://github.com/loonhtet/Plannco",
      live: "https://plannco.on.fleek.co/",
    },

    {
      image: "/mention-hospital-shots.png",
      name: "Mention Hospital",
      breadcrumbs: ["Bootstrap", "JavaScript", "jQuery"],
      description: "",
      github: "https://github.com/loonhtet/Mention-Hospital",
      live: "https://mention.on.fleek.co/",
    },

    {
      image: "/quote-shots.png",
      name: "Quote",
      breadcrumbs: ["HTML", "CSS", "JavaScript", "API"],
      description: "",
      github: "https://github.com/loonhtet/quote",
      live: "https://quote.on.fleek.co/",
    },
  ];

  return (
    <section className="mt-14">
      {/* <h3 className="text-4xl font-bold font-conden mb-14 uppercase">
        Latest Projects
      </h3> */}
      {projectDatas.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 mb-6 lg:mb-16"
        >
          <div className="flex flex-col gap-4">
            <h3 className="font-conden text-3xl font-bold mt-4 lg:mt-0">
              {item.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {Array.isArray(item.breadcrumbs) &&
                item.breadcrumbs.map((breadcrumb, breadcrumbIndex) => (
                  <div
                    key={breadcrumbIndex}
                    className="text-md px-3 py-1 font-bold bg-blue-200 text-blue-900 rounded-md my-3"
                  >
                    {breadcrumb}
                  </div>
                ))}
            </div>
            {/* <p className="ms-1 font-normal text-justify text-md md:text-lg lg:text-xl leading-8 md:leading-9 lg:leading-10 font-ptsan text-gray-500 dark:text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </p> */}
            <div className="grid grid-cols-2 gap-2 mt-auto">
              <Link href={item.github} target="_blank">
                <button className="w-full flex justify-center items-center gap-x-1 py-3 bg-zinc-900 text-gray-100 dark:text-zinc-900 dark:bg-gray-100 font-conden font-semibold text-sm lg:text-md uppercase rounded-md duration-100 opacity-100 hover:opacity-90">
                  Github <LuGithub />
                </button>
              </Link>
              <Link href={item.live} target="_blank">
                <button className="w-full flex justify-center items-center gap-x-1 py-3 bg-red-500 text-gray-100 font-conden font-semibold text-sm lg:text-md uppercase rounded-md duration-100 opacity-100 hover:opacity-90">
                  Live <PiWaveformBold />
                </button>
              </Link>
            </div>
          </div>
          <Image
            className="order-first lg:order-last w-full h-auto rounded-xl border-2 border-blue-400 bg-cover bg-center"
            src={item.image}
            width={2560}
            height={1040}
            alt="Card Image"
          />

          {/* <video
            width="1280"
            height="960"
            preload="auto"
            autoPlay
            muted
            playsInline
            className="rounded-xl border-2 border-blue-400"
          >
            <source src={"/portfolio.mp4"} type="video/mp4" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video> */}
        </div>
      ))}
    </section>
  );
}
