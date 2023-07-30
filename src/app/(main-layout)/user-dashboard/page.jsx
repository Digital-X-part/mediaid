import userImg from "../../../assests/userprofile.png";
import Image from "next/image";
import { FaShoppingCart, FaTrash, FaUserAlt } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import { AiFillStar, AiOutlineTransaction } from "react-icons/ai";
import { IoMdBookmarks, IoMdWallet } from "react-icons/io";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { GiSelfLove } from "react-icons/Gi";

const UserDashBoard = () => {
  const cardData = [
    {
      icon: <FaShoppingCart color="blue" size={20} />,
      title: "Orders",
    },
    {
      icon: <FaUserAlt color="blue" />,
      title: "Edit Profile",
    },
    {
      icon: <MdLock color="blue" size={22} />,
      title: "Password ",
    },
    {
      icon: <IoMdBookmarks color="blue" size={22} />, //IoMdBookmarks
      title: "Addresses",
    },
    {
      icon: <GiSelfLove color="blue" size={22} />, // GiEternalLove
      title: "Whish list",
    },

    {
      icon: <AiFillStar color="blue" size={22} />,
      title: "Start Points",
    },
    {
      icon: <IoMdWallet color="blue" size={22} />,
      title: "Transactions",
    },
    {
      icon: <RiLogoutBoxRLine color="blue" size={22} />, // FaComputer
      title: "Log Out",
    },
    // Add more card data objects here
  ];

  const cart = [
    {
      _id: "642c155b2c4774f05c36ee95",

      name: "Asus ROG MAXIMUS Z690 HERO DDR5 12th Gen ATX Motherboard",

      stock: "In stock",

      image: "https://i.ibb.co/fS3GqXG/rog-maximus-z690-hero-01-500x500.jpg",

      price: 65500,

      email: "eshrakg62@gmail.com",
    },
    {
      _id: "642c155b2c4774f05c36ee94",

      name: "Intel 12th Gen Core i5-12600K Alder Lake Processor",

      stock: "In stock",

      image: "https://i.ibb.co/cTFJqwm/i5-12600k-01-500x500.jpg",

      price: 32500,

      email: "eshrakg62@gmail.com",
    },
  ];

  return (
    <>
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
            <div
              key={index}
              className="group py-2 px-2 md:py-10 md:px-5 flex flex-col items-center justify-center  border rounded-md  hover:border-blue-800 shadow-lg transition-all duration-300"
            >
              <span className="w-11 h-11 rounded-full bg-[#EBEDF8] flex items-center justify-center mb-2">
                {card.icon}
              </span>
              <p className="text-sm md:text-lg">{card.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div>
          {/* head */}

          <>
            {cart.map((item, index) => (
              <div key={item._id}>
                <div className="flex flex-col md:flex-row justify-between  items-center p-5 mb-4 border rounded-md  hover:border-gray-200 hover:shadow-lg transition-all duration-300  ">
                  {/* Image and Item name with stock */}
                  <div className="flex items-center">
                    <div>
                      <Image
                        src={item.image}
                        alt=""
                        width={40}
                        height={40}
                        className="mr-5"
                      />
                    </div>
                    <div className="pr-14">
                      <h1 className="text-xl">{item.name}</h1>
                      <h3 className="text-lg">{item.stock}</h3>
                    </div>
                  </div>

                  {/* Amount and Action part  */}
                  <div className="flex items-center ">
                    <div className="pr-8">
                      <p className="text-2xl text-orange-700 font-semibold">৳{item.price}</p>
                    </div>
                    <div className="flex items-center">
                      <button className="mr-5 inline-block px-5 h-11 font-semibold text-lg rounded text-center border border-blue-800 shadow-lg transition-all duration-300 bg-blue-800 text-white ">Buy</button>
                      <FaTrash></FaTrash>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        </div>
      </div>
    </>
  );
};

export default UserDashBoard;
