import React from 'react';

export const WorkExperience = () => {
  const experiences = [
    {
      title: "Intern Web Developer",
      company: "Softcomm",
      description: "Developed an employee management dashboard using Laravel. Assisted in web application development and testing to ensure functionality and usability. Performed system troubleshooting and provided technical user support.",
      currentlyWorking: false,
    },
    {
      title: "Intern API Developer",
      company: "AYA Bank",
      description: "Collaborated on performance optimization. Integrated APIs and managed dynamic content for web applications.",
      currentlyWorking: false,
    },
    {
      title: "Intern Frontend Developer",
      company: "Softnovation",
      description: "Assisted in web application development, focusing on responsive frontend design.",
      currentlyWorking: true,
    },
    {
      title: "Junior Frontend Developer",
      company: "Connected Group (Remote)",
      description: "Developed responsive websites and collaborated on UI/UX prototypes and backend APIs using NextJS. Integrated APIs into client websites, ensuring seamless functionality. Evaluated and selected frontend technologies to optimize performance and user experience.",
      currentlyWorking: true,
    }
  ];

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <h3 className="text-3xl mb-10 text-bold font-cabin">Work Experience</h3>
        {/* Creative Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 relative">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative bg-transparent backdrop-blur-3xl p-6 rounded-xl shadow-xl border border-blue-800 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                index === 0 ? 'rotate-2' : index === 1 ? '-rotate-1' : 'rotate-3'
              }`}
              style={{ zIndex: 10 - index }}
            >
              <div
                className={`absolute top-0 left-0 w-full h-2 ${'bg-blue-500'} rounded-t-xl`}
              ></div>

              <div className="relative">
                <h3 className="text-lg font-bold text-white tracking-tight">{exp.title}</h3>
                <p className="text-md font-semibold text-gray-400 italic">{exp.company}</p>
                {/* Creative Bullet List with New Diamond Design */}
                <ul className="mt-3 text-gray-500 text-sm leading-relaxed space-y-2">
                {exp.description.split('.').filter(line => line.trim()).map((line, i) => (
                    <li key={i} className="flex items-start">
                      <span className="relative mr-2 mt-1 w-2 h-2 bg-blue-500 rounded-full transform -translate-y-px">
                        <span className="absolute inset-0 bg-blue-500 rounded-full opacity-50 animate-ping"></span>
                      </span>
                      <span>{line.trim()}</span>
                    </li>
                  ))}
                </ul>

                {exp.currentlyWorking && (
                  <div className="absolute -top-[50px] right-[-10px] flex items-center">
                    <span className="relative inline-block w-3 h-3 bg-teal-400 rounded-full animate-pulse">
                      <span className="absolute inset-0 bg-teal-400 rounded-full opacity-75 animate-ping"></span>
                    </span>
                    <span className="ml-2 text-xs font-medium text-teal-300 italic">Currently Working</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};