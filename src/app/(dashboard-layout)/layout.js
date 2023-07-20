"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const dashboardRouteList = [
  {
    pathUrl: "/dashboard/product-list",
    pathName: "Product list",
  },
  {
    pathUrl: "/dashboard/customers",
    pathName: "Customers",
  },
];

const Layout = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  return (
    <div>
      <div className={isDrawerOpen ? "drawer lg:drawer-open" : "drawer"}>
        <input
          id="my-drawer-2"
          type="checkbox"
          className="drawer-toggle"
          checked={isDrawerOpen}
          onChange={() => setIsDrawerOpen(!isDrawerOpen)}
        />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            className="drawer-overlay"
            onClick={() => setIsDrawerOpen(false)}></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}

            {dashboardRouteList.map((route) => (
              <Link
                onClick={handleDrawerClose}
                key={route.pathUrl}
                href={route.pathUrl}>
                {route.pathName}
              </Link>
            ))}
          </ul>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
