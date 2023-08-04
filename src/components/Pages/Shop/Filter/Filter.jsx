import Categories from "@/components/Shared/Sidebar/categories";
import React from "react";
import PriceFilter from "./priceFilter";
import RatingFilter from "./ratingFilter";

const Filter = ({ sidebarOpen }) => {
  return (
    <div>
      <div className="flex justify-between items-center bg-[#60B8A6] px-3 py-[2px] text-white">
        <h1 className="font-semibold">Filter by</h1>
        {sidebarOpen && <h1 className="text-sm cursor-pointer">Reset</h1>}
      </div>
      <div className="px-3">
        <PriceFilter sidebarOpen={sidebarOpen}></PriceFilter>
        {sidebarOpen && (
          <div className="flex items-center gap-1 py-2 border-b">
            <input type="checkbox" name="excludestock" id="" />
            <p className="text-sm text-gray-600">
              Exclude Out of Stock Products
            </p>
          </div>
        )}
        <RatingFilter></RatingFilter>
        <div className="mt-1">
          {/* <Categories sidebarOpen={sidebarOpen}></Categories> */}
        </div>
      </div>
    </div>
  );
};

export default Filter;
