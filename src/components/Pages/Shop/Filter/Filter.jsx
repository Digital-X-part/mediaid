import React from "react";
import { FaMinus } from "react-icons/fa";

const Filter = () => {
  return (
    <div>
      <div className="flex justify-between items-center bg-[#60B8A6] px-3 py-[2px] text-white">
        <h1 className="font-semibold">Filter by</h1>
        <h1 className="text-sm cursor-pointer">Reset</h1>
      </div>
      <div className="px-3">
        <div className="flex items-center py-2">
          <p className="font-semibold text-black text-sm w-[50px]">Price</p>
          <div className="flex items-center justify-between w-full">
            <input type="checkbox" name="filterbyprice" id="" />
            <FaMinus className="w-3 h-3 text-gray-500"></FaMinus>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
