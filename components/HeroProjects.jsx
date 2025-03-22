import React from "react";
import BlurFade from "./magicui/blur-fade";

const projects = [
  {
    name: "Project 1",
    image: "/lunnabelle_macbook.png",
  },
  {
    name: "Project 1",
    image: "/lunnabelle_macbook.png",
  },
  {
    name: "Project 1",
    image: "/lunnabelle_macbook.png",
  },
  {
    name: "Project 1",
    image: "/lunnabelle_macbook.png",
  },
];

export const HeroProjects = () => {
  return (
    <main className="sm:w-4/5 md:w-4/6 mx-auto min-h-screen px-5 md:px-0 py-10">
      <div className="grid gap-12">
        <span className="uppercase text-lg font-bold">My Works</span>

        <div className="relative shadow-4xl shadow-blue-400">
          <div className="grid gap-y-24">
            {projects.map((item, index) => (
              <BlurFade
                delay={0.4}
                key={index}
                className="sticky top-6 group overflow-hidden rounded-xl shadow-lg bg-white hover:bg-opacity-90 transition"
              >
                <img
                  src={item.image}
                  alt="Project 3"
                  className="w-full h-[80vh] aspect-square object-cover bg-gradient-to-t from-slate-950 to-slate-950 transform group-hover:scale-105 transition duration-300 ease-in-out rounded-xl"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex justify-center items-center">
                  <div className="text-center">
                    <h3 className="text-4xl font-semibold text-white mb-4">
                      Project 2
                    </h3>
                    <p className="text-gray-300">
                      Description of the project goes here.
                    </p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
