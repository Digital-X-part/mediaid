import userimg from "../../../assests/userprofile.png";
import Image from "next/image";
import { FaBookmark, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import "./dashbord.css";
import { MdLock } from "react-icons/md";
import { AiFillStar, AiOutlineTransaction } from "react-icons/ai";

const UserDashBoard = () => {
  const cardData = [
    {
      icon: <FaShoppingCart color="blue" />,
      title: "Orders",
    },
    {
      icon: <FaUserAlt color="blue" />,
      title: "Edit Profile",
    },
    {
      icon: <MdLock color="blue" />,
      title: "Password ",
    },
    {
      icon: <FaBookmark color="blue" />, //IoMdBookmarks
      title: "Addresses",
    },
    {
      icon: <FaShoppingCart color="blue" />, // GiEternalLove
      title: "Whish list",
    },
    {
      icon: <FaBookmark color="blue" />, // FaComputer
      title: "Saved Pc",
    },
    {
      icon: <AiFillStar color="blue" />,
      title: "Start Points",
    },
    {
      icon: <AiOutlineTransaction color="blue" />,
      title: "Transactions",
    },
    // Add more card data objects here
  ];

  return (
    <div>
      <div className="mx-5 flex flex-col ">
        <div className="flex flex-col md:flex-row justify-between items-center ">
          <div className="flex items-center">
            <Image src={userimg} alt="" className="" />
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
       <div
       key={index}
       className="group py-2 px-2 md:py-10 md:px-5 flex flex-col items-center justify-center user-card border border-transparent hover:border-blue-800 shadow-lg transition-all duration-400"
     >
       <span className="w-11 h-11 rounded-full bg-[#EBEDF8] flex items-center justify-center mb-2">
         {card.icon}
       </span>
       <p className="text-sm md:text-lg">{card.title}</p>
     </div>
     
        ))}
      </div>
    </div>
  );
};

export default UserDashBoard;
