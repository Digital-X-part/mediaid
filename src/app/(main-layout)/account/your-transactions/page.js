import Image from "next/image";

import { CiClock2 } from "react-icons/Ci";
const YourTransactions = () => {
  const cart = [
    {
      _id: "642c155b2c4774f05c36ee95",

      number: 1309176934,

      time: "3:48",

      icon: "https://i.ibb.co/v1jb39n/bKash.png",

      cost: 670,

      transactions: "642c155b2c4774f05c36ee95",

      orderID: 746654,

      email: "eshrakg62@gmail.com",

      verification: true,
    },

    {
      _id: "642c155b2c4774f05c36ee95",

      number: 1909174934,

      time: "1:32",

      icon: "https://i.ibb.co/NVBtd0q/nogod-icon.png",

      cost: 1365,

      transactions: "642c155b2c4774f05c36ee95",

      orderID: 684554,

      email: "eshrakg62@gmail.com",

      verification: false,
    },

    {
      _id: "642c155b2c4774f05c36ee95",

      number: 1409176534,

      time: "9:52",

      icon: "https://i.ibb.co/MVGvKb5/rocket-icon.png",

      cost: 220,

      transactions: "642c155b2c4774f05c36ee95",

      orderID: 456654,

      email: "eshrakg62@gmail.com",

      verification: true,
    },
  ];
  return (
    <div className="mt-4 pr-1">
      {cart.map((item, index) => (
        <div key={item._id}>
          {/* Image and Item name with stock */}
          <div className=" p-5 mb-4 border rounded-md  hover:border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="flex justify-between items-center">
              <div className="flex">
                <Image
                  src={item.icon}
                  alt="icon"
                  width={60}
                  height={60}
                  className="mr-5"
                />
                <div className="pr-14">
                  <div className="flex justify-center items-center gap-2 text-center">
                    <h1 className="text-base">+880{item.number}</h1>
                    <a
                      href="/your-target-url"
                      className="text-sm text-blue-300 hover:text-blue-600"
                    >
                      #{item.orderID}
                    </a>
                  </div>
                  <h3 className="text-lg">৳{item.cost}</h3>
                </div>
              </div>
              <div className="flex gap-1">
                <CiClock2 size={22} />
                <p>{item.time}</p>
              </div>
            </div>
            <div className="flex justify-between items-center  mt-5">
              <div className="flex-col md:flex-row text-sm ml-4">
                <p>Transactions number:</p>
                <p>{item.transactions}</p>
              </div>

              <p
                className={`px-2 py-1   text-slate-200 font-medium text-xs rounded-xl ${
                  item.verification ? "bg-green-600" : "bg-red-600"
                }`}
              >
                {item.verification ? "Verified" : "Not Verified"}
              </p>
            </div>
          </div>

          {/* Amount and Action part  */}
        </div>
      ))}
    </div>
  );
};

export default YourTransactions;
