"use client";
import Link from "next/link";
import React, { useState } from "react";

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
      {/* Header */}
      <header className="bg-base-500 p-4">
        {/* Open drawer button */}
        <button
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          className="btn btn-primary drawer-button lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-menu-2"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#fff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>
      </header>

      {/* Drawer */}
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
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            className="drawer-overlay"
            onClick={() => setIsDrawerOpen(false)}></label>
          <ul className="menu p-4 w-full h-full bg-base-200 text-base-content">
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
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="absolute bottom-0 py-2 w-full bg-red-600 text-white text-lg font-medium tracking-wider">
            Close Drawer
          </button>
        </div>
      </div>

      {/* Content */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
