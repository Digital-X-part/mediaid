"use client";
import React from "react";
import { FaFilter, FaSortAmountDown } from "react-icons/fa";

const TopFilterMobile = () => {
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
        <div className="text-slate-500 flex items-center justify-center text-sm font-semibold gap-1  py-2">
          <p>Filter</p>
          <FaFilter className="w-[14px] h-[14px] text-gray-500"></FaFilter>
        </div>
      </div>
      <dialog id="short_modal_1" className="modal">
        <form method="dialog" className="modal-box p-0 rounded-sm text-gray-600">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-base p-5 pb-0">Short Options: </h3>
          <div className="mt-2 space-y-1 px-5 py-2">
            <div className="text-base  flex items-center gap-1">
              <input
                type="radio"
                name="shortOption"
                value={"default"}
                className="h-4 w-4 text-slate-500"
              ></input>
              <p>Default</p>
            </div>
            <div className="text-base  flex items-center gap-1">
              <input
                type="radio"
                name="shortOption"
                value={"Low to High (Price)"}
                className="h-4 w-4 text-slate-500"
              ></input>
              <p>Low to High (Price)</p>
            </div>
            <div className="text-base  flex items-center gap-1">
              <input
                type="radio"
                name="shortOption"
                value={"High to Low (Price)"}
                className="h-4 w-4 text-slate-500"
              ></input>
              <p>High to Low (Price)</p>
            </div>
            <div className="text-base  flex items-center gap-1">
              <input
                type="radio"
                name="shortOption"
                value={"Low to High (Discount)"}
                className="h-4 w-4 text-slate-500"
              ></input>
              <p>Low to High (Discount)</p>
            </div>
            <div className="text-base  flex items-center gap-1">
              <input
                type="radio"
                name="shortOption"
                value={"High to Low (Discount)"}
                className="h-4 w-4 text-slate-500"
              ></input>
              <p>High to Low (Discount)</p>
            </div>
          </div>
          <div className="w-full h-10 border grid grid-cols-2 mt-3">
            <button className="border-r">Cancel</button>
            <button className="">Apply</button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default TopFilterMobile;
