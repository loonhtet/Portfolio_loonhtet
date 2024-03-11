import React from "react";

export const CareerObj = () => {
  const careerDatas = [
    {
      careertext:
        "Experienced Web Developer proficient in HTML, CSS, JavaScript, jQuery, Bootstrap, Tailwind, and React. Well-versed in version control with GitHub. Eager to contribute technical skills and creativity to create engaging and responsive web experiences. Seeking opportunities to stay abreast of industry trends and work on innovative projects.",
    },
  ];

  return (
    <section>
      {careerDatas.map((item, index) => (
        <div key={index}>
          <h3 className="text-3xl mt-10 mb-5 text-bold font-cabin">
            Career Objective
          </h3>

          <div className="text-lg tracking-wider font-conden dark:text-blue-100 bg-gray-100 dark:bg-gray-900 border border-gray-100 dark:border-blue-800 p-6 rounded-lg">
            <p>{item.careertext}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
