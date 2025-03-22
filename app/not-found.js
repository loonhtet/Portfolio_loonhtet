import Image from "next/image";

import pageNotFound from "../public/31.png";
import { Link } from "next-view-transitions";

export default function NotFound() {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center">
      <h1 className="absolute z-20 sm:top-10 text-blue-500 text-[200px] sm:text-[400px] font-bold font-cabin">
        404
      </h1>
      <Image
        className="z-30"
        src={pageNotFound}
        alt={pageNotFound}
        width={768}
        height={280}
      />

      <Link href={"/"} className="z-30">
        <button className="border-b-2 border-white px-6 py-1 font-semibold text-xl hover:border-blue-500 hover:text-blue-500 duration-100">
          Go Back
        </button>
      </Link>
    </div>
  );
}
