import userImg from "../../../assests/userprofile.png";
import Image from "next/image";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { IoMdBookmarks, IoMdWallet } from "react-icons/io";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { GiSelfLove } from "react-icons/Gi";
import Link from "next/link";

const UserDashBoard = () => {
  const cardData = [
    {
      icon: <FaShoppingCart color="blue" size={20} />,
      title: "Orders",
      href: "/orders",
    },
    {
      icon: <FaUserAlt color="blue" />,
      title: "Edit Profile",
      href: "/edit-profile",
    },
    {
      icon: <IoMdBookmarks color="blue" size={22} />, //IoMdBookmarks
      title: "Addresses",
      href: "/addresses",
    },
    {
      icon: <GiSelfLove color="blue" size={22} />, // GiEternalLove
      title: "Wish list",
      href: "/wishlist",
    },

    {
      icon: <AiFillStar color="blue" size={22} />,
      title: "Start Points",
      href: "/star-points",
    },
    {
      icon: <IoMdWallet color="blue" size={22} />,
      title: "Transactions",
      href: "/your-transition",
    },
    {
      icon: <RiLogoutBoxRLine color="blue" size={22} />, // FaComputer
      title: "Log Out",
    },
    // Add more card data objects here
  ];

  return (
    <div>
      <div className="mx-5 flex flex-col ">
        <div className="flex flex-col md:flex-row justify-between items-center ">
          <div className="flex items-center">
            <Image src={userImg} alt="" className="" />
            <div className="flex flex-col">
              <p>Hello,</p>
              <h1 className="text-3xl">Eshrak G</h1>
            </div>
          </div>
          <div className="flex">
            <div className="text-center mr-4">
              <p className="border-l-2 border-r-2 w-32">Star Points</p>
              <p className="text-orange-500 font-bold text-2xl">0</p>
            </div>
            <div className="text-center mr-4">
              <p className="border-l-2 border-r-2 w-32">Star Points</p>
              <p className="text-orange-500 font-bold text-2xl">0</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-5 m-4">
        {cardData.map((card, index) => (
          <Link
            href={`/account${card.href}`}
            key={index}
            className="group py-2 px-2 md:py-10 md:px-5 flex flex-col items-center justify-center  border rounded-md  hover:border-blue-800 shadow-lg transition-all duration-300">
            <span className="w-11 h-11 rounded-full bg-[#EBEDF8] flex items-center justify-center mb-2">
              {card.icon}
            </span>
            <p className="text-sm md:text-lg">{card.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserDashBoard;
