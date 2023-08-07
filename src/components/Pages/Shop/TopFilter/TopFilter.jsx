import {
  FaThList,
  FaThLarge,
} from "react-icons/fa";
import TopFilterMobile from "./TopFilterMobile";

const TopFilter = () => {
  return (
    <div className="h-fit lg:border mt-2 w-full px-1 lg:px-3 lg:py-2 shadow-sm lg:flex items-center justify-between ">
      {/*Text for desktop view */}
      <div className="lg:flex items-end gap-1 hidden">
        <p className="text-lg font-bold text-gray-600">
          All Products Price in Bangladesh
        </p>
        <p className="text-sm  text-gray-500">(239 products found)</p>
      </div>
      {/* Filtering for desktop view */}
      <div className="hidden lg:flex items-center w-[40%] justify-between lg:pr-5">
        <div className="flex items-center gap-5">
          <p className="text-sm font-semibold">Sort By:</p>
          <select className="border px-3 py-[1px] text-sm rounded outline-none">
            <option value="default" selected>
              Default
            </option>
            <option value="low to high price">Low to High (Price)</option>
            <option value="high to low price">High to Low (Price)</option>
            <option value="low to high discount">Low to High (Discount)</option>
            <option value="high to low discount">High to Low (Discount)</option>
          </select>
        </div>
        <div className="flex items-center gap-5">
          <p className="text-sm font-semibold">View:</p>
          <div className="flex items-center gap-3">
            <FaThLarge className="w-4 h-4 cursor-pointer"></FaThLarge>
            <FaThList className="w-4 h-4 cursor-pointer"></FaThList>
          </div>
        </div>
      </div>
      {/* Mobile view components below */}
        <TopFilterMobile></TopFilterMobile>
    </div>
  );
};

export default TopFilter;
