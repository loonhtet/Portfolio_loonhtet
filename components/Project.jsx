"use client";

import { Link } from "next-view-transitions";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { PiWaveformBold } from "react-icons/pi";
import { LuGithub } from "react-icons/lu";
import { useEffect } from "react";
import { FlickeringGrid } from "./magicui/flickering-grid";

export default function Project() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const projectDatas = [
    {
      image: "/projects/newstyletour.png",
      name: "New Style Tour",
      breadcrumbs: [
        "Next.JS",
        "Shadcn UI",
        "Tailwind CSS",
        "TypeScript",
        "React Hook Forms",
      ],
      description:
        "Worked on connecting APIs and coordinating between UI/UX and backend teams. Helped build booking systems for various services including tours, visas, buses, cars with drivers, insurance, flights, and hotels. Added features like tracking, filtering, searching, and detailed pages. Also supported language localization for multi-language use.",
      live: "https://newstyletour.com/",
    },
    {
      image: "/projects/traderzone.png",
      name: "Traderzone",
      breadcrumbs: [
        "Next.JS",
        "MUI",
        "TypeScript",
        "Redux",
        "Laravel",
        "MySQL",
      ],
      description:
        "Built the user interface using Next.js and MUI with full responsiveness across devices. Connected APIs to sync frontend with backend services. Developed a real-time trading system where users can view live market status and perform trades instantly. Included success and failure handling to give users immediate feedback on each transaction. Also added a notification system to alert users of trade updates and system events.",
    },
    {
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
      image: "/projects/luxe.png",
      name: "LUXE Beauty BKK",
      breadcrumbs: [
        "Next.JS",
        "Tailwind CSS",
        "Magic UI",
        "Framer Motion",
        "Resend Mail",
      ],
      description:
        "Created a modern and responsive landing page using Next.js, Tailwind CSS, and ShadCN UI. Integrated Framer Motion to enhance user interaction with smooth animations. Set up a mail system with custom email templates to handle user inquiries effectively.",
      live: "https://www.luxebeautybkk.com/",
    },
    {
      image: "/projects/heaven.png",
      name: "Heaven Dispensary",
      breadcrumbs: ["Next.JS", "Tailwind CSS", "Magic UI", "Framer Motion"],
      description:
        "Built a visually engaging landing page using Next.js and styled with Tailwind and ShadCN components. Added Framer Motion to create smooth scroll and element transitions. Implemented an email handling system with custom-designed templates for user communication.",
      live: "https://havendispo.com/",
    },
    {
      image: "/projects/raven.png",
      name: "Raven Tattoo Studio",
      breadcrumbs: ["Next.JS", "Tailwind CSS", "Magic UI", "Framer Motion"],
      description:
        "Developed a sleek and minimal landing page with a strong focus on performance and responsiveness. Used Next.js, Tailwind CSS, and ShadCN UI for the interface, along with Framer Motion for subtle animated elements. Included a working mail system for contact form submissions.",
      live: "https://www.luxebeautybkk.com/",
    },
    {
      image: "/projects/lunnabella.png",
      name: "Lunna Belle",
      breadcrumbs: ["React", "Tailwind CSS", "Sanity"],
      description: "A modern blog platform with a headless CMS",
      github: "https://github.com/loonhtet/Luna Belle-Frontend",
      live: "https://lunabelle.netlify.app/",
    },
  ];

  return (
    <section className="py-16">
      <div className="md:container mx-auto ">
        <div className="grid grid-cols-1 gap-8">
          {projectDatas.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="dark:bg-slate-950/[.30] dark:border-blue-800 backdrop-blur-xl rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col md:flex-row"
            >
              {/* Image Section */}
              <div className="relative w-full md:w-1/2 h-[280px] md:h-[400px]">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={`${item.name} screenshot`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div>
                    <FlickeringGrid
                      className="relative w-full h-[280px] md:h-[400px]"
                      squareSize={4}
                      gridGap={6}
                      color="#6B7280"
                      maxOpacity={0.5}
                      flickerChance={0.1}
                    />

                    <div>
                      <p className="absolute inset-0 flex items-center justify-center text-gray-400 text-2xl font-medium">
                        Still in development...
                      </p>
                    </div>
                  </div>
                )}
              </div>
              {/* Content Section */}
              <div className="p-6 w-full md:w-1/2 flex flex-col justify-between">
                <div>
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
                </div>
                <div className="flex gap-4">
                  {item.github && (
                    <Link
                      href={item.github}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-2 text-base dark:text-black dark:bg-white rounded-md"
                    >
                      <LuGithub className="text-md" />
                      GitHub
                    </Link>
                  )}
                  {item.live && (
                    <Link
                      href={item.live}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-2 text-base bg-red-500 text-white rounded-md"
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
