import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading() {
  return (
    <div className="h-screen flex justify-center items-center overflow-hidden">
      <ul className="flex gap-3">
        <li className="loading-animate w-12 h-12 border-4 border-blue-400 dark:border-blue-600 bg-blue-800 rounded-full"></li>
        <li className="loading-animate w-12 h-12 border-4 border-blue-400 dark:border-blue-600 bg-blue-800 rounded-full"></li>
        <li className="loading-animate w-12 h-12 border-4 border-blue-400 dark:border-blue-600 bg-blue-800 rounded-full"></li>
        <li className="loading-animate w-12 h-12 border-4 border-blue-400 dark:border-blue-600 bg-blue-800 rounded-full"></li>
        <li className="loading-animate w-12 h-12 border-4 border-blue-400 dark:border-blue-600 bg-blue-800 rounded-full"></li>
      </ul>
    </div>
  );
}
