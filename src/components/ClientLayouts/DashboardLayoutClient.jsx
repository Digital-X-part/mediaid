"use client";
import DashboardSideBar from "@/components/Shared/DashboardSideBar/DashboardSideBar";
import DashboardNavbar from "@/components/Shared/Navbar/DashboardNavbar";

import { useState } from "react";
import { BiCategory } from "react-icons/bi";
import { BsFileMedical } from "react-icons/bs";
import { FaRegListAlt, FaRegEdit } from "react-icons/fa";
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

const DashboardLayoutClient = ({children}) => {
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
            isDashboardSideBarExtends
              ? "lg:col-start-1 lg:col-end-3"
              : "lg:col-start-1 lg:col-end-2"
          } `}
        >
          <DashboardSideBar
            isDashboardSideBarExtends={isDashboardSideBarExtends}
            dashboardRouteList={dashboardRouteList}
          />
        </div>
        <div
          className={` ${
            isDashboardSideBarExtends
              ? "lg:col-start-3 lg:col-end-13"
              : "lg:col-start-2 lg:col-end-13"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
    );
};

export default DashboardLayoutClient;