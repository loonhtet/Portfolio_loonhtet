import Image from "next/image";

export default function Skills() {
  const skillsData = [
    {
      src: "/html.svg",
      des: "HTML",
      status: "confidient",
    },
    {
      src: "/css3.svg",
      des: "CSS",
      status: "confidient",
    },
    {
      src: "/javascript.svg",
      des: "JavaScript",
      status: "confidient",
    },
    {
      src: "/jquery.svg",
      des: "jQuery",
      status: "confidient",
    },
    {
      src: "/bootstrap.svg",
      des: "Bootstrap",
      status: "confidient",
    },
    {
      src: "/tailwind.svg",
      des: "Tailwind",
      status: "confidient",
    },
    {
      src: "/github.svg",
      des: "Github",
      status: "confidient",
    },
    {
      src: "/react.svg",
      des: "React",
      status: "confidient",
    },
    {
      src: "/php.svg",
      des: "Php",
      status: "Learning",
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
              className={`bg-gray-100 dark:bg-slate-950/[.30] dark:border-blue-800 rounded-lg p-6 border border-gray-100`}
            >
              <div className="flex flex-col justify-center items-center gap-1">
                <Image
                  src={skill.src}
                  alt=""
                  width={50}
                  height={50}
                  className="w-12 h-12"
                />
                <p className="text-md font-semibold tracking-wider text-center">
                  {skill.des}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
