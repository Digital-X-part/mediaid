import Link from "next/link";
import { useState } from "react";
import { BsPerson, BsBag, BsHouseDoor, BsTags } from "react-icons/bs";
import {
  AiFillHome,
  AiFillShopping,
  AiFillGift,
  AiFillUser,
} from "react-icons/ai";
import { MdSwitchAccount } from "react-icons/md";

const BottomNavbar = () => {
  const [activeIcon, setActiveIcon] = useState(0);

  const navItems = [
    {
      icon:
        activeIcon === 0 ? (
          <AiFillHome className="text-black" />
        ) : (
          <BsHouseDoor className="text-slate-600" />
        ),
      label: "Home",
      link: "/",
    },
    {
      icon:
        activeIcon === 1 ? (
          <AiFillShopping className="text-black" />
        ) : (
          <BsBag className="text-slate-600" />
        ),
      label: "Shop",
      link: "/",
    },
    {
      icon:
        activeIcon === 2 ? (
          <AiFillGift className="text-black" />
        ) : (
          <BsTags className="text-slate-600" />
        ),
      label: "Offer",
      link: "/",
    },
    {
      icon:
        activeIcon === 3 ? (
          <MdSwitchAccount className="text-black" />
        ) : (
          <BsPerson className="text-slate-600" />
        ),
      label: "My Account",
      link: "/account",
    },
  ];

  return (
    <div className="w-full md:hidden py-2 px-8 z-[80] bg-white fixed bottom-0 flex items-center justify-between">
      {navItems.map((item, index) => (
        <Link key={index} href={item?.link}>
          <div
            className={`flex flex-col items-center justify-center cursor-pointer relative ${
              activeIcon === index ? "text-teal-900" : "text-slate-500"
            }`}
            onClick={() => setActiveIcon(index)}
          >
            {activeIcon === index && (
              <div className="w-16 h-[2px] bg-black absolute top-[-8px]" />
            )}
            {item.icon}
            <p className="text-[10px] font-medium">{item.label}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BottomNavbar;
