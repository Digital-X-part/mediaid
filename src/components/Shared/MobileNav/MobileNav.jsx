import SearchBar from "@/components/Shared/SearchBar/SearchBar";
import Image from "next/image";
import Link from "next/link";
import { IconContext } from "react-icons";
import { BiCartAdd, BiSolidOffer } from "react-icons/bi";
import { BsChevronDown, BsPersonCircle } from "react-icons/bs";

const MobileNav = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center mx-2 mt-3 mb-2">
        <div>
          <div className="">
            {" "}
            <Link href="#">
              <span className="sr-only">Workflow</span>
              <Image
                className="h-8 mb-2 w-auto sm:h-10"
                src="https://i0.wp.com/mediaidbd.net/wp-content/uploads/2021/05/cropped-Mediaid-white-stroke-1.png2_-1.png?resize=200%2C51&ssl=1"
                alt=""
                width={200}
                height={200}
              />
            </Link>
          </div>
          <div className="flex items-center bg-slate-100 hover:bg-slate-200 rounded-xl p-1 mt-1 ">
            <p className="mr-1">
              Deliver To <span className="font-bold">Bangladesh</span>{" "}
            </p>
            <BsChevronDown />
          </div>
        </div>
        <div className="flex justify-around items-center mt-7 gap-2">
          <div>
            <IconContext.Provider value={{ size: "2em" }}>
              <BiSolidOffer />
            </IconContext.Provider>
          </div>
          <div>
            <IconContext.Provider value={{ size: "2em" }}>
              <BiCartAdd />
            </IconContext.Provider>
          </div>
          <p className=" absolute top-8 ml-0 rounded-full py-0.5 px-2  text-xs bg-red-500 text-slate-50">
            1
          </p>

          {/* account login */}
          <div className="px-3 py-1 rounded-xl bg-slate-100">
            <IconContext.Provider value={{ size: "2em" }}>
              <BsPersonCircle />
            </IconContext.Provider>
          </div>
        </div>
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
};

export default MobileNav;
