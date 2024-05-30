import Link from "next/link";
import NotFoundIcon from "../public/svg/not-found-icon.svg";

function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-gray-900 text-center text-gray-300">
      <div className="pb-10">
        <NotFoundIcon />
      </div>
      <div className="pb-10">
        <p className="text-xl">
          The page you are looking for could not be found.
        </p>
      </div>
      <Link href="/">
        <button className="rounded-lg bg-gray-800/50 px-6 py-3 text-lg font-semibold text-gray-400 transition duration-300 ease-in-out hover:bg-gray-800">
          Return to HomePage
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
