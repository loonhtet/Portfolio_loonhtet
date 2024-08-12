import React from "react";

export const CareerObj = () => {
  const careerDatas = [
    {
      careertext:
        "I have been learning web development since 2021. An experienced front-end developer seeking a junior position to enhance my technical skills and my passion for creating user-friendly websites. Eager to learn from experienced developers and contribute to a collaborative team environment.",
    },
  ];

  return (
    <section>
      {careerDatas.map((item, index) => (
        <div key={index}>
          <h3 className="text-3xl mt-10 mb-5 text-bold font-cabin">
            Career Objective
          </h3>

          <div className="text-lg tracking-wider font-conden dark:text-blue-100 bg-gray-100 dark:bg-slate-950/[.30] border border-gray-100 dark:border-blue-800 p-6 rounded-lg">
            <article className="prose-lg">
              <p>{item.careertext}</p>
            </article>
          </div>
        </div>
      ))}
    </section>
  );
};
