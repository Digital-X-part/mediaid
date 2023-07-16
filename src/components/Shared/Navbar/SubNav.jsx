import React from "react";
import { FaBars, FaPhoneAlt, FaRegHeart, FaStore, FaRegFile } from "react-icons/fa";

const SubNav = ({ handleSidebarOpen }) => {
  return (
    <div className="h-10 w-full  -mt-2 grid grid-cols-12 border-y bg-slate-100">
      <div className="col-start-1 col-end-3">
        <button
          onClick={handleSidebarOpen}
          className="w-full h-full text-left flex items-center gap-2 pl-4"
        >
          <FaBars className="w-4 h-4" />
          <p className="font-semibold">Categories</p>
        </button>
      </div>
      <div className="col-start-3 col-end-13 flex w-full justify-between">
        <div className="flex items-center gap-7">
          <div className="cursor-pointer flex items-center gap-1">
            <FaPhoneAlt className="w-3 h-3" />
            <p className="text-sm font-medium">Call To Order</p>
          </div>
          <div className="cursor-pointer flex items-center gap-1">
            <FaRegHeart className="w-3 h-3" />
            <p className="text-sm font-medium">Healthcare Product</p>
          </div>
          <div className="cursor-pointer flex items-center gap-1">
            <FaStore className="w-3 h-3" />
            <p className="text-sm font-medium">Pharmacy Register</p>
          </div>
        </div>
        <div className="flex items-center gap-7">
          <div className="cursor-pointer flex items-center gap-1">
            <p className="text-sm font-medium">Career</p>
          </div>
          <div className="cursor-pointer flex items-center gap-1">
            <p className="text-sm font-medium">To quick order</p>
          </div>
          <div className="cursor-pointer flex items-center gap-1">
            <FaRegFile className="w-3 h-3" />
            <p className="text-sm font-medium">Upload Prescription</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNav;
