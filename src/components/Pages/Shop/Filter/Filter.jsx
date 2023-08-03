import Categories from "@/components/Shared/Sidebar/categories";
import React from "react";
import { FaMinus } from "react-icons/fa";

const Filter = ({ sidebarOpen }) => {
  return (
    <div>
      <div className="flex justify-between items-center bg-[#60B8A6] px-3 py-[2px] text-white">
        <h1 className="font-semibold">Filter by</h1>
        {sidebarOpen && <h1 className="text-sm cursor-pointer">Reset</h1>}
      </div>
      <div className="px-3">
        <div>
          <div className="flex items-center pt-2 pb-1 border-b gap-1">
            <p className="font-semibold text-black text-sm w-[50px]">Price</p>
            <div className="flex items-center justify-between w-full">
              <input type="checkbox" name="filterbyprice" id="" />
              <FaMinus className="w-3 h-3 text-gray-500"></FaMinus>
            </div>
          </div>
          <div className="w-full">
            <div
              className={`pt-3 flex gap-2 w-full  ${
                sidebarOpen
                  ? "flex-row items-center justify-center"
                  : "flex-col"
              }`}
            >
              <input
                type="number"
                className="border text-sm font-medium outline-none px-1 py-[2px] rounded w-[80px]"
                placeholder="Min"
              ></input>
              <input
                type="number"
                className="border text-sm font-medium outline-none px-1 py-[2px] rounded w-[80px]"
                placeholder="Max"
              ></input>
            </div>
            <div className="border-b pb-3 shadow-sm">
              <input
                type="range"
                class="transparent h-[3px] w-full cursor-pointer
  appearance-none border-transparent bg-neutral-200 dark:bg-[#60B8A6]"
                min="0"
                max="5"
                step="0.5"
              />
            </div>
          </div>
          {sidebarOpen && (
            <div className="flex items-center gap-1 py-2 border-b">
              <input type="checkbox" name="excludestock" id="" />
              <p className="text-sm text-gray-600">
                Exclude Out of Stock Products
              </p>
            </div>
          )}
          <div className="mt-1">
            <Categories sidebarOpen={sidebarOpen}></Categories>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
