import SearchBar from "@/components/Shared/SearchBar/SearchBar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IconContext } from "react-icons";
import { BiCartAdd, BiSolidOffer } from "react-icons/bi";
import { BsChevronDown, BsPersonCircle } from "react-icons/bs";

const MobileNav = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
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
        {/* <SearchBar toggleMenu={toggleMenu} /> */}
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
            <IconContext.Provider value={{ size: "2em" }}>
              <BsPersonCircle />
            </IconContext.Provider>
            <p className="text-sm font-semibold">User Name</p>
          </div>
            </div>
            <div className="w-full h-full pl-2 pr-5 pt-4 bg-white">
            <ul onClick={toggleMenu} className='space-y-2'>
                <li className='flex gap-2 items-center cursor-pointer px-3 py-2 rounded hover:bg-slate-100'>
                    <Image src="https://i.ibb.co/drbWhjJ/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-Jj-YXRl-Z29ye-Vwv-MTMuc-G5n-Iiwi-ZWRpd-HMi-Oltdf-Q.png" alt='icon1' width={25} height={25}></Image>
                    <p className="text-sm">Covid-19 Special</p>
                </li>
                <li className='flex gap-2 items-center cursor-pointer px-3 py-2 rounded hover:bg-slate-100'>
                    <Image src="https://i.ibb.co/HPLZFGf/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-Jj-YXRl-Z29ye-Vwv-MTQuc-G5n-Iiwi-ZWRpd-HMi-Oltdf-Q.png" alt='icon2' width={25} height={25}></Image>
                    <p className="text-sm">Devices</p>
                </li>
                <li className='flex gap-2 items-center cursor-pointer px-3 py-2 rounded hover:bg-slate-100'>
                    <Image src="https://i.ibb.co/gSM5dGM/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-Jj-YXRl-Z29ye-Vwv-MTcuc-G5n-Iiwi-ZWRpd-HMi-Oltdf-Q.png" alt='icon2' width={25} height={25}></Image>
                    <p className="text-sm">Personal Care</p>
                </li>
                <li className='flex gap-2 items-center cursor-pointer px-3 py-2 rounded hover:bg-slate-100'>
                    <Image src="https://i.ibb.co/drbWhjJ/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-Jj-YXRl-Z29ye-Vwv-MTMuc-G5n-Iiwi-ZWRpd-HMi-Oltdf-Q.png" alt='icon1' width={25} height={25}></Image>
                    <p className="text-sm">Covid-19 Special</p>
                </li>
                <li className='flex gap-2 items-center cursor-pointer px-3 py-2 rounded hover:bg-slate-100'>
                    <Image src="https://i.ibb.co/HPLZFGf/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-Jj-YXRl-Z29ye-Vwv-MTQuc-G5n-Iiwi-ZWRpd-HMi-Oltdf-Q.png" alt='icon2' width={25} height={25}></Image>
                    <p className="text-sm">Devices</p>
                </li>
                <li className='flex gap-2 items-center cursor-pointer px-3 py-2 rounded hover:bg-slate-100'>
                    <Image src="https://i.ibb.co/gSM5dGM/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-Jj-YXRl-Z29ye-Vwv-MTcuc-G5n-Iiwi-ZWRpd-HMi-Oltdf-Q.png" alt='icon2' width={25} height={25}></Image>
                    <p className="text-sm">Personal Care</p>
                </li>
                <li className='flex gap-2 items-center cursor-pointer px-3 py-2 rounded hover:bg-slate-100'>
                    <Image src="https://i.ibb.co/drbWhjJ/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-Jj-YXRl-Z29ye-Vwv-MTMuc-G5n-Iiwi-ZWRpd-HMi-Oltdf-Q.png" alt='icon1' width={25} height={25}></Image>
                    <p className="text-sm">Covid-19 Special</p>
                </li>
                <li className='flex gap-2 items-center cursor-pointer px-3 py-2 rounded hover:bg-slate-100'>
                    <Image src="https://i.ibb.co/HPLZFGf/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-Jj-YXRl-Z29ye-Vwv-MTQuc-G5n-Iiwi-ZWRpd-HMi-Oltdf-Q.png" alt='icon2' width={25} height={25}></Image>
                    <p className="text-sm">Devices</p>
                </li>
                <li className='flex gap-2 items-center cursor-pointer px-3 py-2 rounded hover:bg-slate-100'>
                    <Image src="https://i.ibb.co/gSM5dGM/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-Jj-YXRl-Z29ye-Vwv-MTcuc-G5n-Iiwi-ZWRpd-HMi-Oltdf-Q.png" alt='icon2' width={25} height={25}></Image>
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
