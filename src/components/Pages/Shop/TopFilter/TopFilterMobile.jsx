"use client";
import React from "react";
import { FaFilter, FaSortAmountDown } from "react-icons/fa";
import ShortFilterModal from "./ShortFilterModal";
import AllFilterModal from "./AllFilterModal";
import { useState } from "react";

const TopFilterMobile = () => {
    const [allFilterModalOpen, setAllFilterModalOpen] = useState(false);
  return (
    <>
      <div className="lg:hidden border w-full  rounded-md grid grid-cols-2">
        <button
          onClick={() => window.short_modal_1.showModal()}
          className="text-slate-500 flex items-center justify-center text-sm font-semibold gap-1 border-r py-2"
        >
          <p>Short</p>
          <FaSortAmountDown className="w-[14px] h-[14px] text-gray-500"></FaSortAmountDown>
        </button>
        <button onClick={()=> setAllFilterModalOpen(!allFilterModalOpen)} className="text-slate-500 flex items-center justify-center text-sm font-semibold gap-1  py-2">
          <p>Filter</p>
          <FaFilter className="w-[14px] h-[14px] text-gray-500"></FaFilter>
        </button>
      </div>
      <ShortFilterModal></ShortFilterModal>
      <AllFilterModal allFilterModalOpen={allFilterModalOpen} setAllFilterModalOpen={setAllFilterModalOpen}></AllFilterModal>
    </>
  );
};

export default TopFilterMobile;
