"use client";

import Link from "next/link";
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
      image: "/lunabelle.png",
      name: "Lunna Belle",
      breadcrumbs: "Blog",
      github: "https://github.com/loonhtet/LunaBelle-Frontend",
      live: "https://lunabelle.netlify.app/",
    },

    {
      image: "/dashboard.png",
      name: "Admin Dashboard",
      breadcrumbs: "Dashboard",
      github: "https://github.com/loonhtet/Dashboard",
      live: "https://dashboard.on.fleek.co/",
    },

    {
      image: "/plannco.png",
      name: "Plannco",
      breadcrumbs: "Landing Page",
      github: "https://github.com/loonhtet/Plannco",
      live: "https://plannco.on.fleek.co/",
    },

    {
      image: "/vesperr.png",
      name: "Vesperr",
      breadcrumbs: "Landing Page",
      github: "https://github.com/loonhtet/Vesperr",
      live: "https://vesperr.on.fleek.co/",
    },

    {
      image: "/mention_laptop.png",
      name: "Mention Hospital",
      breadcrumbs: "Landing Page",
      github: "https://github.com/loonhtet/Mention-Hospital",
      live: "https://mention.on.fleek.co/",
    },

    {
      image: "/quote.png",
      name: "Quote",
      breadcrumbs: "Small Project",
      github: "https://github.com/loonhtet/quote",
      live: "https://quote.on.fleek.co/",
    },
  ];

  return (
    <section className="mt-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mb-16">
        {projectDatas.map((item, index) => (
          <div className="relative group" key={index} data-aos="fade-up">
            <Image
              src={item.image}
              width={2560}
              height={1040}
              className="w-full bg-blue-400 bg-cover object-cover rounded-md border-2 border-blue-800"
              alt=""
            />

            <div className="lg:hidden absolute inset-0 bg-blue-900 dark:bg-blue-950 bg-opacity-50 dark:bg-opacity-60"></div>

            <div className="absolute flex flex-col justify-center top-0 left-0 bottom-0 lg:top-auto lg:-bottom-5 lg:-translate-x-1/2 lg:left-1/2 w-full lg:w-3/4 lg:bg-white lg:dark:bg-gray-900 border-2 border-blue-800 rounded-md p-4 md:group-hover:-bottom-3 duration-200 ease-in-out">
              <h3 className="capitalize text-white md:text-blue-900 dark:text-blue-100 font-cabin font-bold text-lg md:text-xl">
                {item.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                <div className="w-max text-sm px-2 font-conden font-semibold bg-blue-100 text-blue-800 rounded-md my-3">
                  {item.breadcrumbs}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Link href={item.github} target="_blank">
                  <button className="w-full flex justify-center items-center gap-x-1 py-1 bg-zinc-900 text-gray-100 dark:text-zinc-900 dark:bg-gray-100 font-ptsan font-semibold text-sm lg:text-md uppercase rounded-md duration-100 opacity-100 hover:opacity-90">
                    Github
                    <LuGithub />
                  </button>
                </Link>

                <Link href={item.live} target="_blank">
                  <button className="w-full flex justify-center items-center gap-x-1 py-1 bg-red-500 text-gray-100 font-semibold text-sm lg:text-md uppercase rounded-md duration-100 opacity-100 hover:opacity-90">
                    Live
                    <PiWaveformBold />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
