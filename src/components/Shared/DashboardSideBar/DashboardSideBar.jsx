import Link from "next/link";
import React from "react";

const DashboardSideBar = ({ isDashboardSideBarExtends, dashboardRouteList }) => {
  return (
    <div
      className={`shadow-lg hidden md:block z-50 fixed left-0 first:${
        isDashboardSideBarExtends
          ? "w-[180px] xl:w-[220px]"
          : "w-[80px] lg:w-[100px] xl:w-[110px]"
      } h-[100vh] border border-t-0 p-3 bg-white transition-transform duration-300 `}>
      <ul className="space-y-2">
        {dashboardRouteList.map((route) => (
          <Link
            title={route.pathName}
            key={route.pathUrl}
            href={route.pathUrl}
            className="flex gap-2 items-center cursor-pointer lg:px-2 xl:px-3 py-2 rounded hover:bg-slate-100">
            {/* <{AiOutlineMedicineBox} size={25} color="blue" /> */}
            {route.icon}
            <p
              className={` font-semibold ${
                isDashboardSideBarExtends || "hidden"
              }`}>
              {route.pathName}
            </p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default DashboardSideBar;
