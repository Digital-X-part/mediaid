import SearchBar from "@/components/Shared/SearchBar/SearchBar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IconContext } from "react-icons";
import { BiCartAdd, BiSolidOffer } from "react-icons/bi";
import { BsChevronDown, BsPersonCircle } from "react-icons/bs";
import { MdMenuOpen } from "react-icons/md";
import { FaBars, IcoFaBars, FaRegHeart } from "react-icons/fa";

const MobileNav = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <div>
      <div className="flex justify-between items-center px-3 lg:px-0 pt-3 ">
        <div className="flex items-center">
          <div className="flex flex-col items-center">
            {" "}
            <Link href="/">
              <span className="sr-only">Workflow</span>
              <Image
                className="h-8 mb-2 w-auto sm:h-10"
                src="https://i0.wp.com/mediaidbd.net/wp-content/uploads/2021/05/cropped-Mediaid-white-stroke-1.png2_-1.png?resize=200%2C51&ssl=1"
                alt=""
                width={200}
                height={200}
              />
            </Link>
          <div className="flex items-center rounded-md  ">
            <p className="mr-1 text-[10px] md:text-base">
              Deliver To <span className="font-semibold">Bangladesh</span>{" "}
            </p>
            <BsChevronDown className="text-[10px]"/>
          </div>
          </div>
        </div>
        <div className="flex justify-around items-center gap-4 mr-2 relative">
          <div>
            <IconContext.Provider value={{ size: "18px"}}>
              <FaRegHeart className="text-slate-500"/>
            </IconContext.Provider>
          </div>
          <div className="relative">
            <IconContext.Provider value={{ size: "1.5em" }}>
              <BiCartAdd className="text-slate-500"/>
            </IconContext.Provider>
            <p className=" absolute -top-2 -right-2 rounded-full  px-1  text-[10px] bg-indigo-500 text-slate-50">
              1
            </p>
          </div>

          {/* account login */}
          <div className="px-3 py-1 rounded-xl bg-slate-100 hidden md:inline-block">
            <IconContext.Provider value={{ size: "1.5em" }}>
              <BsPersonCircle className="text-slate-500"/>
            </IconContext.Provider>
          </div>
        </div>
      </div>
      <div>
        <SearchBar toggleMenu={toggleMenu} />
      </div>
      {/* drawer for mobile devices */}
      {isOpenMenu && (
        <>
          <label
            onClick={toggleMenu}
            className="fixed h-screen z-[59] top-0  w-full bg-black bg-opacity-20 lg:hidden"
          ></label>
          {/* mobile sidebar */}
          <div className="fixed h-screen z-[60] -top-1 left-0 w-fit bg-white duration-200 lg:hidden ">
            <div className="w-full h-fit p-3 bg-slate-100">
              <div className="px-3 py-1 rounded-xl flex items-center gap-3">
                <IconContext.Provider value={{ size: "1.5em" }}>
                  <BsPersonCircle className="text-slate-500"/>
                </IconContext.Provider>
                <p className="text-sm font-semibold">User Name</p>
              </div>
            </div>
            <div className="w-full h-full pl-2 pr-5 pt-4 bg-white">
              <ul onClick={toggleMenu} className="space-y-2">
                <li className="flex gap-2 items-center cursor-pointer px-3 py-2 rounded hover:bg-slate-100">
                  <Image
                    src="https://i.ibb.co/drbWhjJ/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-Jj-YXRl-Z29ye-Vwv-MTMuc-G5n-Iiwi-ZWRpd-HMi-Oltdf-Q.png"
                    alt="icon1"
                    width={25}
                    height={25}
                  ></Image>
                  <p className="text-sm">Covid-19 Special</p>
                </li>
                <li className="flex gap-2 items-center cursor-pointer px-3 py-2 rounded hover:bg-slate-100">
                  <Image
                    src="https://i.ibb.co/HPLZFGf/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-Jj-YXRl-Z29ye-Vwv-MTQuc-G5n-Iiwi-ZWRpd-HMi-Oltdf-Q.png"
                    alt="icon2"
                    width={25}
                    height={25}
                  ></Image>
                  <p className="text-sm">Devices</p>
                </li>
                <li className="flex gap-2 items-center cursor-pointer px-3 py-2 rounded hover:bg-slate-100">
                  <Image
                    src="https://i.ibb.co/gSM5dGM/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-Jj-YXRl-Z29ye-Vwv-MTcuc-G5n-Iiwi-ZWRpd-HMi-Oltdf-Q.png"
                    alt="icon2"
                    width={25}
                    height={25}
                  ></Image>
                  <p className="text-sm">Personal Care</p>
                </li>
                <li className="flex gap-2 items-center cursor-pointer px-3 py-2 rounded hover:bg-slate-100">
                  <Image
                    src="https://i.ibb.co/drbWhjJ/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-Jj-YXRl-Z29ye-Vwv-MTMuc-G5n-Iiwi-ZWRpd-HMi-Oltdf-Q.png"
                    alt="icon1"
                    width={25}
                    height={25}
                  ></Image>
                  <p className="text-sm">Covid-19 Special</p>
                </li>
                <li className="flex gap-2 items-center cursor-pointer px-3 py-2 rounded hover:bg-slate-100">
                  <Image
                    src="https://i.ibb.co/HPLZFGf/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-Jj-YXRl-Z29ye-Vwv-MTQuc-G5n-Iiwi-ZWRpd-HMi-Oltdf-Q.png"
                    alt="icon2"
                    width={25}
                    height={25}
                  ></Image>
                  <p className="text-sm">Devices</p>
                </li>
                <li className="flex gap-2 items-center cursor-pointer px-3 py-2 rounded hover:bg-slate-100">
                  <Image
                    src="https://i.ibb.co/gSM5dGM/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-Jj-YXRl-Z29ye-Vwv-MTcuc-G5n-Iiwi-ZWRpd-HMi-Oltdf-Q.png"
                    alt="icon2"
                    width={25}
                    height={25}
                  ></Image>
                  <p className="text-sm">Personal Care</p>
                </li>
                <li className="flex gap-2 items-center cursor-pointer px-3 py-2 rounded hover:bg-slate-100">
                  <Image
                    src="https://i.ibb.co/drbWhjJ/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-Jj-YXRl-Z29ye-Vwv-MTMuc-G5n-Iiwi-ZWRpd-HMi-Oltdf-Q.png"
                    alt="icon1"
                    width={25}
                    height={25}
                  ></Image>
                  <p className="text-sm">Covid-19 Special</p>
                </li>
                <li className="flex gap-2 items-center cursor-pointer px-3 py-2 rounded hover:bg-slate-100">
                  <Image
                    src="https://i.ibb.co/HPLZFGf/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-Jj-YXRl-Z29ye-Vwv-MTQuc-G5n-Iiwi-ZWRpd-HMi-Oltdf-Q.png"
                    alt="icon2"
                    width={25}
                    height={25}
                  ></Image>
                  <p className="text-sm">Devices</p>
                </li>
                <li className="flex gap-2 items-center cursor-pointer px-3 py-2 rounded hover:bg-slate-100">
                  <Image
                    src="https://i.ibb.co/gSM5dGM/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-Jj-YXRl-Z29ye-Vwv-MTcuc-G5n-Iiwi-ZWRpd-HMi-Oltdf-Q.png"
                    alt="icon2"
                    width={25}
                    height={25}
                  ></Image>
                  <p className="text-sm">Personal Care</p>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileNav;
