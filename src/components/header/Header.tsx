import { BiSolidHome } from "react-icons/bi";
import { FaKiwiBird } from "react-icons/fa6";
import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-black">
      <div className="max-w-7xl flex justify-between items-center px-6 py-4">
        <div className="flex flex-row">
          <h1 className="text-lg font-bold"> mirabelle feng </h1>
          <FaKiwiBird></FaKiwiBird>
        </div>
        <div className="justify-end space-x-4">
          <Link
            to={"/"}
            className="flex flex-row px-2 py-1 bg-white text-black rounded justify-center items-center place-content-end"
          >
            <>
              <p className="px-1 text-1xl font-bold">home</p>
              <BiSolidHome />
            </>
          </Link>
          <div />
        </div>
      </div>
    </header>
  );
}
