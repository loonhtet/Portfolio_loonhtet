"use client";

import Image from "next/image";
import Link from "next/link";

import Aos from "aos";
import "aos/dist/aos.css";

import { PiWaveformBold } from "react-icons/pi";
import { LuGithub } from "react-icons/lu";
import { useEffect } from "react";

export default function SmallProject() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });

  const smallProjectData = [
    {
      name: "small project",
      image: "/small1.png",
      github: "/",
      live: "/",
    },

    {
      name: "small project",
      image: "/small2.png",
      github: "/",
      live: "/",
    },

    {
      name: "small project",
      image: "/small3.png",
      github: "/",
      live: "/",
    },

    {
      name: "small project",
      image: "/small4.png",
      github: "/",
      live: "/",
    },
  ];

  return (
    <section className="mb-16 mt-14 border-t-2 border-gray-800 dark:border-blue-300 pt-5">
      <h3 className="text-3xl mb-5 text-bold">Small Projects</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {smallProjectData.map((item, index) => (
          <div className="" key={index} data-aos="zoom-in">
            <Image
              className="rounded-t-lg border-t-4 border-blue-800"
              src={item.image}
              alt={`${item.image} photo`}
              width={1980}
              height={1080}
            />

            <div className="border-b-4 border-blue-800 rounded-b-lg p-2 bg-gray-100 dark:bg-gray-900">
              <h1 className="capitalize text-blue-900 dark:text-blue-100 font-semibold text-sm md:text-md mb-1">
                {item.name}
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                <Link href={item.github}>
                  <button className="w-full flex justify-center items-center gap-x-1 py-1 bg-zinc-900 text-gray-100 dark:text-zinc-900 dark:bg-gray-100 font-semibold text-sm lg:text-md uppercase rounded-md duration-100 opacity-100 hover:opacity-90">
                    Github
                    <LuGithub />
                  </button>
                </Link>

                <Link href={item.live}>
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
