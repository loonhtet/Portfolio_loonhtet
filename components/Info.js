import Link from "next/link";

import {
  BsFacebook,
  BsFileEarmarkPersonFill,
  BsTelegram,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const infoDatas = [
  {
    info: "name",
    description: "Loon Htet",
  },

  {
    info: "age",
    description: 18,
  },

  {
    info: "address",
    description: "Dagon Township",
  },

  {
    info: "e-mail",
    description: "loonhtet.dev@gmail.com",
  },

  {
    info: "phone",
    description: "09951180654",
  },
];

import { AiFillMail } from "react-icons/ai";
import { CareerObj } from "./CareerObj";

export default function Info() {
  return (
    <section className="mt-14">
      <h3 className="text-3xl mb-5 text-bold font-cabin">Personal Info</h3>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {infoDatas.map((item, index) => (
          <li key={index}>
            <p className="inline w-max font-semibold font-ptsan capitalize px-2 py-1 me-2 rounded-md text-blue-800 dark:text-blue-100 bg-blue-100 dark:bg-blue-800">
              {item.info}
            </p>
            <span className="font-semibold font-conden">
              {item.description}
            </span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-x-5 gap-y-3 mt-10">
        <Link
          href=""
          className="flex items-center bg-blue-500 text-white gap-2 px-4 py-2 rounded-full"
        >
          <BsFacebook className="text-2xl" />
        </Link>

        <Link
          href=""
          className="flex items-center bg-indigo-800 text-white gap-2 px-4 py-2 rounded-full"
        >
          <BsTelegram className="text-2xl" />
        </Link>

        <Link
          href=""
          className="flex items-center bg-zinc-700 text-white gap-2 px-4 py-2 rounded-full"
        >
          <AiFillMail className="text-2xl" />
        </Link>

        <Link
          href=""
          className="flex items-center bg-emerald-700 text-white gap-2 px-4 py-2 rounded-full"
        >
          <BsFileEarmarkPersonFill className="text-2xl" />
        </Link>
      </div>

      <CareerObj />
    </section>
  );
}
