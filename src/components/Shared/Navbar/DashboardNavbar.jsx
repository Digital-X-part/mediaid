"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IconContext } from "react-icons";
import { BiCartAdd } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { HiMoon, HiOutlineMenuAlt1 } from "react-icons/hi";
const DashboardNavbar = ({
  isDashboardSideBarExtends,
  setIsDashboardSideBarExtends,
  dashboardRouteList,
}) => {
  const [open, setOpen] = useState(false);
  const handleDashBoardSideBarExtends = () => {
    setIsDashboardSideBarExtends(!isDashboardSideBarExtends);
    setOpen(!open);
  };

  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div className=" bg-white z-50 fixed top-0 left-0 block w-full h-auto md:mb-16 mb-14 ">
        <div className="max-w-full mx-auto px-4 sm:px-6 ">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-3 md:py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start items-center lg:w-0 lg:flex-1 md:gap-x-8">
              <div>
                {open ? (
                  <HiOutlineMenuAlt1
                    onClick={handleDashBoardSideBarExtends}
                    className="hidden md:block cursor-pointer"
                    size={30}
                  />
                ) : (
                  <FiMenu
                    onClick={handleDashBoardSideBarExtends}
                    className="hidden md:block cursor-pointer"
                    size={30}
                  />
                )}
              </div>
              <Link href="/">
                <span className="sr-only">MediAID</span>
                <Image
                  className="h-8 w-auto sm:h-10"
                  src="https://i0.wp.com/mediaidbd.net/wp-content/uploads/2021/05/cropped-Mediaid-white-stroke-1.png2_-1.png?resize=200%2C51&ssl=1"
                  alt=""
                  width={80}
                  height={60}
                />
              </Link>
            </div>
            {/* moblie menu */}
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open menu</span>
                {/* Heroicon name: outline/menu */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            {/* menu */}

            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <div className="flex items-center gap-4">
                <div className="bg-[#d7e4f5] p-1 rounded-full">
                  <HiMoon size={25} color="#2C7BE5" />
                </div>
                <Image
                  alt=""
                  width={32}
                  height={32}
                  src="https://images.unsplash.com/photo-1564460576398-ef55d99548b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                  className="w-8 h-8 object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className={` transition transform md:hidden absolute duration-200 origin-top-right top-0 inset-x-0 p-2 ${
            open
              ? "opacity-100 visible scale-100  ease-out   "
              : "opacity-0 invisible scale-95   "
          }`}
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div></div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="space-y-2">
                    {dashboardRouteList.map((route) => (
                      <Link
                        className="flex items-center bg-slate-50 py-2 mb-1 px-8 gap-3 lg:gap-2 text-base font-semibold"
                        key={route.pathUrl}
                        onClick={handleDashBoardSideBarExtends}
                        href={route.pathUrl}
                      >
                        {route.icon}
                        {route.pathName}
                      </Link>
                    ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardNavbar;
