"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IconContext } from "react-icons";
import { BiCartAdd } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { HiMoon, HiOutlineMenuAlt1 } from "react-icons/hi";
const TopNavbar = ({
  isDashboardSideBarExtends,
  setIsDashboardSideBarExtends,
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
                onClick={() => setOpen(!open)}>
                <span className="sr-only">Open menu</span>
                {/* Heroicon name: outline/menu */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true">
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
          }`}>
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div></div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setOpen(!open)}>
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
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
                <nav className="grid gap-y-4">
                  <Link
                    href="#"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    {/* Heroicon name: outline/chart-bar */}
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Analytics
                    </span>
                  </Link>
                  <Link
                    href="#"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    {/* Heroicon name: outline/cursor-click */}
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Engagement
                    </span>
                  </Link>
                  <Link
                    href="#"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    {/* Heroicon name: outline/shield-check */}
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Security
                    </span>
                  </Link>
                  <Link
                    href="#"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    {/* Heroicon name: outline/view-grid */}
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Integrations
                    </span>
                  </Link>
                  <Link
                    href="#"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    {/* Heroicon name: outline/refresh */}
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Automations
                    </span>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
