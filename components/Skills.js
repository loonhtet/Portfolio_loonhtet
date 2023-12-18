import Image from "next/image";

export default function Skills() {
  const skillsData = [
    {
      src: "/html.svg",
    },
    {
      src: "/css3.svg",
    },
    {
      src: "/javascript.svg",
    },
    {
      src: "/jquery.svg",
    },
    {
      src: "/bootstrap.svg",
    },
    {
      src: "/tailwind.svg",
    },
    {
      src: "/github.svg",
    },
    {
      src: "/react.svg",
    },
  ];

  return (
    <section className="mt-14 ">
      <div className="container mx-auto">
        <h3 className="text-3xl mb-5 text-bold font-cabin">Skills</h3>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-900 rounded-lg p-6 border border-gray-100 dark:border-blue-800 transition-transform ease-in-out duration-300 transform hover:scale-105"
            >
              <div className="flex justify-center items-center">
                <Image src={skill.src} alt="" width={50} height={50} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
