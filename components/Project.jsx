"use client";

import { Link } from "next-view-transitions";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { PiWaveformBold } from "react-icons/pi";
import { LuGithub } from "react-icons/lu";
import { useEffect } from "react";

export default function Project() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const projectDatas = [
    {
      image: "/lunabelle-shots.png",
      name: "Lunna Belle",
      breadcrumbs: ["React", "Tailwind CSS", "Sanity"],
      description: "A modern e-commerce platform with a headless CMS",
      github: "https://github.com/loonhtet/Luna Belle-Frontend",
      live: "https://newstyletour.com/",
    },
    {
      image: "/bloodie-shots.png",
      name: "New Style Tour",
      breadcrumbs: [
        "Next.JS",
        "Tailwind CSS",
        "TypeScript",
        "React Hook Forms",
      ],
      description:
        "Worked on connecting APIs and coordinating between UI/UX and backend teams. Helped build booking systems for various services including tours, visas, buses, cars with drivers, insurance, flights, and hotels. Added features like tracking, filtering, searching, and detailed pages. Also supported language localization for multi-language use.",
      live: "https://newstyletour.com/",
    },
    {
      image: "/skywardshift-shots.png",
      name: "Cognito",
      breadcrumbs: [
        "Next.JS",
        "Tailwind CSS",
        "Daisy UI",
        "React Hook Forms",
        "Prisma",
        "PostgreSQL",
      ],
      description:
        "Developed a web-based learning platform to share and access educational content. Built features such as course and lesson creation, video uploads, and user management. Focused on making the platform easy to use, with a clean interface and responsive design. Also worked on organizing content by category and improving the overall user experience.",
    },
    {
      image: "/dashboard-shots.png",
      name: "Admin Dashboard",
      breadcrumbs: ["HTML", "CSS", "jQuery", "Bootstrap", "Chart.js"],
      description: "A responsive admin dashboard with data visualization.",
      github: "https://github.com/loonhtet/Dashboard",
      live: "https://dashboard.on.fleek.co/",
    },
    {
      image: "/vesperr-shots.png",
      name: "Vesperr",
      breadcrumbs: ["HTML", "CSS", "Bootstrap"],
      description: "A sleek business landing page.",
      github: "https://github.com/loonhtet/Vesperr",
      live: "https://vesperr.on.fleek.co/",
    },
    {
      image: "/planco-shots.png",
      name: "Plannco",
      breadcrumbs: ["Bootstrap", "JavaScript", "jQuery"],
      description: "A project management tool UI.",
      github: "https://github.com/loonhtet/Plannco",
      live: "https://plannco.on.fleek.co/",
    },
    {
      image: "/mention-hospital-shots.png",
      name: "Mention Hospital",
      breadcrumbs: ["Bootstrap", "JavaScript", "jQuery"],
      description: "A hospital management system interface.",
      github: "https://github.com/loonhtet/Mention-Hospital",
      live: "https://mention.on.fleek.co/",
    },
    {
      image: "/quote-shots.png",
      name: "Quote",
      breadcrumbs: ["HTML", "CSS", "JavaScript", "API"],
      description: "A dynamic quote display with API integration.",
      github: "https://github.com/loonhtet/quote",
      live: "https://quote.on.fleek.co/",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectDatas.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="dark:bg-slate-950/[.30] dark:border-blue-800 backdrop-blur-xl h-fit rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={`${item.name} screenshot`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {item.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.breadcrumbs.map((breadcrumb, breadcrumbIndex) => (
                    <span
                      key={breadcrumbIndex}
                      className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-2.5 py-1 rounded-full"
                    >
                      {breadcrumb}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {item.github && (
                    <Link
                      href={item.github}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 py-1 px-2 text-sm  dark:text-black dark:bg-white rounded-md"
                    >
                      <LuGithub className="text-md" />
                      GitHub
                    </Link>
                  )}
                  {item.live && (
                    <Link
                      href={item.live}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 py-1 px-2 text-sm bg-red-500 text-white rounded-md"
                    >
                      <PiWaveformBold className="text-md" />
                      Live
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
