import React from "react";

import { BorderBeam } from "@/components/magicui/border-beam";

export const CareerObj = () => {
  const careerDatas = [
    // {
    //   careertext:
    //     "I have been learning web development since 2021. An experienced front-end developer seeking a junior position to enhance my technical skills and my passion for creating user-friendly websites. Eager to learn from experienced developers and contribute to a collaborative team environment.",
    // },
    {
      careerTextOne:
        "I’m a web developer who’s all about crafting websites that look amazing and work like a charm. I’ve been diving into the world of web development since 2021.",
      careerTextTwo:
        "I'm excited to learn the new things and keep pushing my skills forward, because let's be real, the developer journey never ends!",
      careerTextThree:
        "When I'm not coding, I'm usually deep in a YouTube infinity scroll, vibing to music or just kicking back with a coffee and rain combo.",
    },
  ];

  return (
    <section>
      {careerDatas.map((item, index) => (
        <div key={index}>
          <h3 className="text-3xl mt-10 mb-5 text-bold font-cabin">About</h3>

          <div className="relative border leading-9 border-blue-950 text-lg lg:text-xl tracking-wider font-conden text-justify dark:text-blue-100 bg-gray-100 dark:bg-slate-950/[.30]  p-6 rounded-lg">
            <p className="">{item.careerTextOne}</p>
            <br />
            <p>{item.careerTextTwo}</p>
            <br />
            <p>{item.careerTextThree}</p>
            <BorderBeam
              size={300}
              duration={12}
              delay={9}
              colorFrom="#245ee0"
              colorTo="#007BFF"
            />
          </div>
        </div>
      ))}
    </section>
  );
};
