import Image from "next/image";

import { FaTrash } from "react-icons/fa";

export const metadata = {
  title: "Wish List | Mediaid BD",
  description:
    "An e-commerce build by the doctors, run by the doctors and serve to the doctors",
};


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

const WishList = () => {
  return (
    <div className="mt-4 pr-1">
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
                <p className="text-2xl text-orange-700 font-semibold">
                  ৳{item.price}
                </p>
              </div>
              <div className="flex items-center">
                <button className="mr-5 inline-block px-5 h-11 font-semibold text-lg rounded text-center border border-blue-800 shadow-lg transition-all duration-300 bg-blue-800 text-white ">
                  Buy
                </button>
                <FaTrash></FaTrash>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishList;
