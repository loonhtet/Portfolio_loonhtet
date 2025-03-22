import { Link } from "next-view-transitions";

import {
  BsGithub,
  BsFacebook,
  BsFileEarmarkPersonFill,
  BsTelegram,
  BsFillArrowRightCircleFill,
  BsLinkedin,
  BsSkype,
} from "react-icons/bs";

const infoDatas = [
  {
    info: "name",
    description: "Loon Htet",
  },

  {
    info: "age",
    description: 20,
  },

  {
    info: "address",
    description: "Bangkok, Thailand",
  },

  {
    info: "e-mail",
    description: "loonhtet.dev@gmail.com",
  },

  {
    info: "phone",
    description: "+959951180654, +66917303800",
  },
];

import { AiFillMail } from "react-icons/ai";
import { CareerObj } from "./CareerObj";
import Image from "next/image";

import avatar from "/public/avatar.jpg";

export default function Info() {
  return (
    <section className="mt-14">
      <h3 className="text-3xl mb-5 text-bold font-cabin">Personal Info</h3>

      <ul className="grid grid-cols-1 md:grid-cols-2 justify-between gap-4">
        <div className="grid gap-y-4">
          {infoDatas.map((item, index) => (
            <li key={index}>
              <p className="inline w-max font-semibold capitalize px-2 py-1 me-2 rounded-md text-blue-900 dark:text-blue-100 bg-blue-100 dark:bg-blue-800">
                {item.info}
              </p>
              <span className="font-semibold">{item.description}</span>
            </li>
          ))}
        </div>
        <Image
          src={avatar}
          width={200}
          height={200}
          className="w-56 h-56 border-2 object-cover border-blue-800 ms-auto rounded-full"
        />
      </ul>

      <div className="flex flex-wrap gap-x-5 gap-y-3 mt-10">
        <Link
          href="https://github.com/loonhtet"
          className="flex items-center bg-slate-900 text-white gap-2 px-4 py-2 rounded-full"
        >
          <BsGithub className="text-2xl" />
        </Link>

        <Link
          href="https://join.skype.com/invite/y8bYAczycbLn/"
          className="flex items-center bg-blue-500 text-white gap-2 px-4 py-2 rounded-full"
        >
          <BsSkype className="text-2xl" />
        </Link>

        <Link
          href="https://t.me/loonhtet"
          className="flex items-center bg-blue-500 text-white gap-2 px-4 py-2 rounded-full"
        >
          <BsTelegram className="text-2xl" />
        </Link>

        <Link
          href="https://www.linkedin.com/in/loon-htet-baa4a02b2/"
          className="flex items-center bg-blue-700 text-white gap-2 px-4 py-2 rounded-full"
        >
          <BsLinkedin className="text-2xl" />
        </Link>

        <Link
          href="mailto:loonhtet.dev@gmail.com"
          className="flex items-center bg-slate-800 text-white gap-2 px-4 py-2 rounded-full"
        >
          <AiFillMail className="text-2xl" />
        </Link>

        <a
          href={"/CV.pdf"}
          download="/Resume.pdf"
          className="flex items-center bg-cyan-700 text-white gap-2 px-4 py-2 rounded-full"
        >
          <BsFileEarmarkPersonFill className="text-2xl" />
        </a>
      </div>

      {/* <CareerObj /> */}
    </section>
  );
}
