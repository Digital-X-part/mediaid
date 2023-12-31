// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import { GrMenu } from "react-icons/gr";
// import { HiMoon } from "react-icons/hi";


// const Layout = ({ children }) => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const handleDrawerClose = () => {
//     setIsDrawerOpen(false);
//   };

//   return (
//     <div className="w-full">
//       Header
//       <header className="bg-[#EDF2F9] p-2 shadow-md flex items-center justify-between w-full">
//         {/* desktop view */}

//         <Link href="/" className="hidden md:block">
//           <Image
//             width={200}
//             height={200}
//             src="https://i0.wp.com/mediaidbd.net/wp-content/uploads/2021/05/cropped-Mediaid-white-stroke-1.png2_-1.png?resize=200%2C51&ssl=1"
//             alt=""
//           />
//         </Link>

//         <input
//           className="hidden md:block w-[500px] px-2 py-1 rounded-md"
//           type="text"
//           placeholder="search"
//         />
//         {/* mobile version */}
//         <GrMenu
//           onClick={() => setIsDrawerOpen(!isDrawerOpen)}
//           className="drawer-button lg:hidden"
//           size={25}
//         />
//         <div className="flex items-center gap-4">
//           <div className="bg-[#d7e4f5] p-1 rounded-full">
//             <HiMoon size={25} color="#2C7BE5" />
//           </div>
//           <Image
//             alt=""
//             width={32}
//             height={32}
//             src="https://images.unsplash.com/photo-1564460576398-ef55d99548b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
//             className="w-8 h-8 object-cover rounded-full"
//           />
//         </div>
//       </header>
//       <div className="md:flex">
//         <div
//           className={
//             isDrawerOpen ? "drawer lg:drawer-open" : "drawer lg:drawer-open"
//           }>
//           <input
//             id="my-drawer-2"
//             type="checkbox"
//             className="drawer-toggle"
//             checked={isDrawerOpen}
//             onChange={() => setIsDrawerOpen(!isDrawerOpen)}
//           />
//           <div className="drawer-content ">
//             <main className="m-2">{children}</main>
//           </div>
//           <div className="drawer-side ">
//             <label
//               htmlFor="my-drawer-2"
//               className="drawer-overlay"
//               onClick={() => setIsDrawerOpen(false)}></label>
//             <ul className="menu w-full h-full bg-base-200 text-base-content p-0">
//               {/* Sidebar content here */}
//               {dashboardRouteList.map((route) => (
//                 <Link
//                   className="flex items-center bg-slate-200 py-2 mb-1 px-8 gap-1 lg:gap-2 text-base font-semibold"
//                   key={route.pathUrl}
//                   onClick={handleDrawerClose}
//                   href={route.pathUrl}>
//                   {route.icon}
//                   {route.pathName}
//                 </Link>
//               ))}
//             </ul>
//             <button
//               onClick={() => setIsDrawerOpen(false)}
//               className="md:hidden absolute bottom-0 py-2 w-full bg-red-600 text-white text-lg font-medium tracking-wider">
//               Close Drawer
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;
"use client";
import DashboardSideBar from "@/components/Shared/DashboardSideBar/DashboardSideBar";
import DashboardNavbar from "@/components/Shared/Navbar/DashboardNavbar";
import React from "react";
import { useState } from "react";
import { BiCategory } from "react-icons/bi";
import { BsFileMedical } from "react-icons/bs";
import {
  FaRegListAlt,
  FaRegEdit,
} from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
const dashboardRouteList = [
  {
    icon: <FaRegListAlt className="w-5 h-5" />,
    pathUrl: "/dashboard/product-list",
    pathName: "Product list",
  },
  {
    icon: <FaRegEdit className="w-5 h-5" />,
    pathUrl: "/dashboard/add-product",
    pathName: "Add Product",
  },
  {
    icon: <BsFileMedical className="w-5 h-5" />,
    pathUrl: "/dashboard/order-list",
    pathName: "Order List",
  },
  {
    icon: <HiOutlineUsers className="w-5 h-5" />,
    pathUrl: "/dashboard/customers",
    pathName: "Customers",
  },
  {
    icon: <BiCategory className="w-5 h-5" />,
    pathUrl: "/dashboard/category",
    pathName: "Category",
  },
];


const DashboardLayout = ({ children }) => {
  const [isDashboardSideBarExtends, setIsDashboardSideBarExtends] =
    useState(false);

  return (
    <div>
      <DashboardNavbar
        isDashboardSideBarExtends={isDashboardSideBarExtends}
        setIsDashboardSideBarExtends={setIsDashboardSideBarExtends}
        dashboardRouteList={dashboardRouteList}
      />
      <div className="mt-[72px] lg:grid lg:grid-cols-12">
        <div
          className={`w-[100px] xl:w-[100px] transition-transform duration-500 ${
            isDashboardSideBarExtends ? "lg:col-start-1 lg:col-end-3"
            : "lg:col-start-1 lg:col-end-2"
          } `}>
          <DashboardSideBar
            isDashboardSideBarExtends={isDashboardSideBarExtends}
            dashboardRouteList={dashboardRouteList}
          />
        </div>
        <div className={` ${isDashboardSideBarExtends ? "lg:col-start-3 lg:col-end-13"
              : "lg:col-start-2 lg:col-end-13"}`}>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
