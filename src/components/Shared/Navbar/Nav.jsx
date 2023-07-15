import SearchBar from "@/components/Shared/SearchBar/SearchBar";
import Image from "next/image";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { IconContext } from "react-icons";
import { BiCartAdd } from "react-icons/bi";

const Nav = () => {
  return (
    <div className="grid my-1 grid-cols-11 justify-center items-center gap-4 bg-base-100 ">
      <div className="col-span-3 flex justify-center items-center ">
        <div className="mr-10">
          {" "}
          <Link href="#">
            <span className="sr-only">Workflow</span>
            <Image
              className="h-6 w-auto sm:h-10"
              src="https://i0.wp.com/mediaidbd.net/wp-content/uploads/2021/05/cropped-Mediaid-white-stroke-1.png2_-1.png?resize=200%2C51&ssl=1"
              alt=""
              width={200}
              height={200}
            />
          </Link>
        </div>
        <div className="text-slate-600 border p-1 rounded-xl bg-slate-50 hover:bg-slate-100">
          <p className="font-semibold">Deliver to</p>
          <div className="flex">
            <IconContext.Provider value={{ size: "1.5em" }}>
              <CiLocationOn />
            </IconContext.Provider>

            <p className="font-bold text-xl">Address</p>
          </div>
        </div>
      </div>
      <div className="col-span-5">
        <SearchBar />
      </div>
      <div className="col-span-3 flex gap-4 justify-center items-center">
        <div className="text-slate-600 border p-2 rounded-xl bg-slate-50 hover:bg-slate-100">
          <p className="text-xs font-semibold">Hello, User</p>
          <p className="font-bold">Account & Orders</p>
        </div>
        <div className="text-slate-600 border p-2 rounded-xl bg-slate-50 hover:bg-slate-100">
          <p className="font-semibold text-xs">Refer </p>
          <p className="font-bold">& Earn</p>
        </div>
        <div className="text-slate-600 border px-1 gap-2 flex py-3 rounded-xl bg-slate-50 hover:bg-slate-100">
          <div className="">
            <IconContext.Provider value={{ size: "2em" }}>
              <BiCartAdd />
            </IconContext.Provider>
            <p className=" absolute top-4 ml-5 rounded-full py-0.5 px-2  text-xs bg-red-500 text-slate-50">
              1
            </p>
          </div>
          <p className="font-bold ">cart</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
