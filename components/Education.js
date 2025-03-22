export default function Education() {
  const educationData = [
    {
      year: "2021 - 2021",
      skill: "Linux Course",
      school: "Ye Lin Aung - OpenLab",
      status: "Finished",
    },
    {
      year: "2021 - 2024",
      skill: "Web Development",
      school: "Data Land Technology",
      status: "Finished",
    },
    {
      year: "2023 - 2023",
      skill: "Level 3 NCC Diploma",
      school: "KMD Institute",
      status: "Finished",
    },
    {
      year: "2023 - 2024",
      skill: "Level 4 NCC Diploma",
      school: "KMD Institute",
      status: "Finished",
    },
    {
      year: "2024 - 2025",
      skill: "Level 5 NCC Diploma",
      school: "KMD Institute",
      status: "Progress",
    },
  ];

  return (
    <section className="mt-14">
      <h3 className="text-3xl mb-5 text-bold font-cabin">Education</h3>

      <ol className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {educationData.map((item, index) => (
          <li
            key={index}
            className="relative ml-6 p-5 border-l-2 border-blue-500 dark:border-gray-700 transform hover:scale-105 transition-transform ease-in-out duration-300"
          >
            <div className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-blue-100 bg-blue-200 dark:ring-blue-900 dark:bg-blue-800">
              <svg
                className="w-4 h-4 text-blue-800 dark:text-blue-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"></path>
              </svg>
            </div>
            <h3 className="mb-1 ms-1 text-lg font-cabin font-semibold text-gray-900 dark:text-white">
              {item.skill}
            </h3>
            <p className="text-base ms-1 font-normal font-ptsan text-gray-500 dark:text-gray-400">
              {item.school}
            </p>
            <time className="block ms-1 mt-2 text-sm font-conden font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.year}
            </time>
            <div
              className={`w-max ${
                item.status === "Finished"
                  ? "bg-teal-950 text-teal-200"
                  : "bg-yellow-950 text-yellow-200"
              } px-2 py-[2px] mt-2 ms-1 font-conden text-xs font-semibold rounded-md`}
            >
              {item.status}
            </div>
          </li>
        ))}
      </ol>

      <div className="bg-gray-100 dark:bg-slate-950/[.30] border border-gray-100 dark:border-blue-800 rounded-md p-4 mb-16 mt-3 overflow-hidden">
        <p className="text-2xl font-conden font-semibold text-center capitalize journey-animation animate-pulse tracking-wider">
          Still Going My Journey...
        </p>
      </div>
    </section>
  );
}
