// "use client";
// import userimg from "../../../assests/userprofile.png";
// import Image from "next/image";
// import { FaShoppingCart } from "react-icons/fa";

// const UserDashBoard = () => {
//   return (
//     <div>
//       <div className="mx-5">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center">
//             <Image src={userimg} alt="" className="" />
//             <div className="flex flex-col">
//               <p>Hello,</p>
//               <h1 className="text-3xl">Eshrak G</h1>
//             </div>
//           </div>
//           <div className="flex">
//           <div className="text-center mr-4">
//             <p className="border-l-2 border-r-2 w-32">Star Points</p>
//             <p className="text-orange-500 font-bold text-2xl">0</p>
//           </div>
//           <div className="text-center mr-4">
//             <p className="border-l-2 border-r-2 w-32">Star Points</p>
//             <p className="text-orange-500 font-bold text-2xl">0</p>
//           </div>
//           </div>
//         </div>
//       </div>
//       <div className="grid grid-cols-3 md:grid-cols-4">
//         <div className=" py-10 px-5  flex flex-col items-center " >
//         <FaShoppingCart></FaShoppingCart>
//           <p>Orders</p>
//         </div>
//         <div className=" py-10 px-5 flex flex-col items-center " >
//         <FaShoppingCart></FaShoppingCart>
//           <p>Orders</p>
//         </div>
//         <div className=" py-10 px-5 flex flex-col items-center" >
//         <FaShoppingCart></FaShoppingCart>
//           <p>Orders</p>
//         </div>
//         <div className=" py-10 px-5 flex flex-col items-center" >
//         <FaShoppingCart></FaShoppingCart>
//           <p>Orders</p>
//         </div>
//         <div className=" py-10 px-5 flex flex-col items-center" >
//         <FaShoppingCart></FaShoppingCart>
//           <p>Orders</p>
//         </div>
//         <div className=" py-10 px-5 flex flex-col items-center" >
//         <FaShoppingCart></FaShoppingCart>
//           <p>Orders</p>
//         </div>
//         <div className=" py-10 px-5 flex flex-col items-center" >
//         <FaShoppingCart></FaShoppingCart>
//           <p>Orders</p>
//         </div>
//         <div className=" py-10 px-5 flex flex-col items-center" >
//         <FaShoppingCart></FaShoppingCart>
//           <p>Orders</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDashBoard;

import userimg from "../../../assests/userprofile.png";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import './dashbord.css'

const UserDashBoard = () => {
  return (
    <div>
      <div className="mx-5">
        <div className="flex items-center justify-between">
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
      <div className="grid grid-cols-3 md:grid-cols-4 gap-5">
        {/* Add "group" to each card to enable hover styles */}
        <div className="group py-10 px-5 flex flex-col items-center user-card">
          <FaShoppingCart className="mb-2"></FaShoppingCart>
          <p>Orders</p>
        </div>
        <div className="group py-10 px-5 flex flex-col items-center user-card">
          <FaShoppingCart className="mb-2"></FaShoppingCart>
          <p>Orders</p>
        </div>
        <div className="group py-10 px-5 flex flex-col items-center user-card">
          <FaShoppingCart className="mb-2"></FaShoppingCart>
          <p>Orders</p>
        </div>
        <div className="group py-10 px-5 flex flex-col items-center user-card">
          <FaShoppingCart className="mb-2"></FaShoppingCart>
          <p>Orders</p>
        </div>
        <div className="group py-10 px-5 flex flex-col items-center user-card">
          <FaShoppingCart className="mb-2"></FaShoppingCart>
          <p>Orders</p>
        </div>
        <div className="group py-10 px-5 flex flex-col items-center user-card">
          <FaShoppingCart className="mb-2"></FaShoppingCart>
          <p>Orders</p>
        </div>
        <div className="group py-10 px-5 flex flex-col items-center user-card">
          <FaShoppingCart className="mb-2"></FaShoppingCart>
          <p>Orders</p>
        </div>
        <div className="group py-10 px-5 flex flex-col items-center user-card">
          <FaShoppingCart className="mb-2"></FaShoppingCart>
          <p>Orders</p>
        </div>
        {/* Add more cards here */}
      </div>
    </div>
  );
};

export default UserDashBoard;
