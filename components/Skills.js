import Image from "next/image";

export default function Skills() {
  const FrontendSkills = [
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
      src: "/react.svg",
      des: "React",
      status: "confidient",
    },

    {
      src: "/nextjs.svg",
      des: "Next.JS",
      status: "confidient",
    },

    {
      src: "/framer.svg",
      des: "Framer",
      status: "confidient",
    },
  ];

  const BackendSkills = [
    {
      src: "/php.svg",
      des: "Php",
      status: "Learning",
    },
    {
      src: "/sanity.svg",
      des: "Sanity CMS",
      status: "Learning",
    },
  ];

  const DatabaseSkills = [
    {
      src: "/mysql.svg",
      des: "MySQL",
      status: "confidient",
    },
    {
      src: "/sql.svg",
      des: "SQL",
      status: "confidient",
    },
    {
      src: "/prisma.svg",
      des: "Prisma",
      status: "confidient",
    },
  ];

  const AdditionaleSkills = [
    {
      src: "/github.svg",
      des: "Github",
      status: "confidient",
    },
    {
      src: "/git.svg",
      des: "Git",
      status: "confidient",
    },
    {
      src: "/Figma.svg",
      des: "Figma",
      status: "confidient",
    },
    {
      src: "/csharp.svg",
      des: "C#",
      status: "confidient",
    },
    {
      src: "/linux.svg",
      des: "Linux",
      status: "confidient",
    },
  ];

  const styles = {
    animatedLine: {
      height: "2px",
      width: "100%",
      background:
        "linear-gradient(to right, transparent, #1e40af, transparent)",
      backgroundSize: "200% 100%",
      animation: "moveGradient 4s linear infinite",
    },
  };
  const keyframes = `
    @keyframes moveGradient {
      0% { background-position: 100% 0; }
      50% { background-position: 0 0; }
      100% { background-position: 100% 0; }
    }
  `;
  return (
    <section className="mt-14 ">
      <style>{keyframes}</style>
      <div className="container mx-auto">
        <h3 className="text-3xl mb-5 text-bold font-cabin">Capabilities</h3>

        <div className="grid gap-4">
          <div className="flex">
            <h1 className="w-1/3 md:w-1/2 text-2xl">Frontend</h1>
            <div className="w-2/3 md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-4">
              {FrontendSkills.map((item, index) => (
                <div
                  key={index}
                  className={`bg-gray-100 dark:bg-slate-950/[.30] dark:border-blue-800 rounded-lg p-6 border border-gray-100`}
                >
                  <div className="flex flex-col justify-center items-center gap-1">
                    <Image
                      src={item.src}
                      alt=""
                      width={50}
                      height={50}
                      className="w-12 h-12"
                    />
                    <p className="text-md font-semibold tracking-wider text-center">
                      {item.des}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.animatedLine} className="rounded-full my-4"></div>

          <div className="flex">
            <h1 className="w-1/3 md:w-1/2 text-2xl">Backend</h1>
            <div className="w-2/3 md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-4">
              {BackendSkills.map((item, index) => (
                <div
                  key={index}
                  className={`bg-gray-100 dark:bg-slate-950/[.30] dark:border-blue-800 rounded-lg p-6 border border-gray-100`}
                >
                  <div className="flex flex-col justify-center items-center gap-1">
                    <Image
                      src={item.src}
                      alt=""
                      width={50}
                      height={50}
                      className="w-12 h-12"
                    />
                    <p className="text-md font-semibold tracking-wider text-center">
                      {item.des}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={styles.animatedLine} className="rounded-full my-4"></div>

          <div className="flex">
            <h1 className="w-1/3 md:w-1/2 text-2xl">Database</h1>
            <div className="w-2/3 md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-4">
              {DatabaseSkills.map((item, index) => (
                <div
                  key={index}
                  className={`bg-gray-100 dark:bg-slate-950/[.30] dark:border-blue-800 rounded-lg p-6 border border-gray-100`}
                >
                  <div className="flex flex-col justify-center items-center gap-1">
                    <Image
                      src={item.src}
                      alt=""
                      width={50}
                      height={50}
                      className="w-12 h-12"
                    />
                    <p className="text-md font-semibold tracking-wider text-center">
                      {item.des}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.animatedLine} className="rounded-full my-4"></div>

          <div className="flex">
            <h1 className="w-1/3 md:w-1/2 text-2xl">Additional</h1>
            <div className="w-2/3 md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-4">
              {AdditionaleSkills.map((item, index) => (
                <div
                  key={index}
                  className={`bg-gray-100 dark:bg-slate-950/[.30] dark:border-blue-800 rounded-lg p-6 border border-gray-100`}
                >
                  <div className="flex flex-col justify-center items-center gap-1">
                    <Image
                      src={item.src}
                      alt=""
                      width={50}
                      height={50}
                      className="w-12 h-12"
                    />
                    <p className="text-md font-semibold tracking-wider text-center">
                      {item.des}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
