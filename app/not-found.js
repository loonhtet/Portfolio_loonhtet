import Image from "next/image";

import pageNotFound from "../public/31.png";
import { Link } from "next-view-transitions";

export default function NotFound() {
  return (
    <div className="w-screen h-[100vh] flex flex-col items-center bg-transparent">
      <Image
        className="z-30"
        src={pageNotFound}
        alt={pageNotFound}
        width={500}
        height={100}
      />

      <p className="text-2xl font-ptsan">Sorry, page is not found.</p>

      <Link href={"/"} className="mt-8">
        <button
          class="select-none rounded-lg bg-gradient-to-tr from-blue-600 to-blue-700 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Home
        </button>
      </Link>
    </div>
  );
}
