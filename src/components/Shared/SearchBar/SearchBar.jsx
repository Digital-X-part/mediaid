import React, { useState, useEffect, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { BiSolidDownArrow } from "react-icons/bi";
import Image from "next/image";
import { CiCircleRemove } from "react-icons/ci";
import { GrMenu } from "react-icons/gr";


const dropDownCategoryLists = [
  "arts & crafts",
  "automotive",
  "baby",
  "beauty & personal care",
  "books",
  "boys fashion",
  "computers",
  "deals",
  "digital music",
  "electronics",
  "girls fashion",
  "health & household",
  "home & kitchen",
  "industrial & scientific",
  "kindle store",
  "luggage",
  "movies & tV",
];

const SearchBar = ({ toggleMenu }) => {
  const [selectedCategory, setSelectedCategory] = useState({
    selectedCategoryName: "All departments",
    isSelectedCategory: false,
  });
  const inputRef = useRef(null);
  const [isSearchList, setIsSearchList] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategory({
      selectedCategoryName: category,
      isSelectedCategory: true,
    });
  };

  useEffect(() => {
    if (
      selectedCategory.isSelectedCategory &&
      selectedCategory.selectedCategoryName
    ) {
      inputRef.current.focus();
    }
  }, [
    selectedCategory.isSelectedCategory,
    selectedCategory.selectedCategoryName,
  ]);

  const handleInputFocus = () => {
    setIsSearchList(true);
  };

  const handleInputBlur = () => {
    setIsSearchList(false);
  };

  return (
    <div className="mt-4 rounded-sm outline-transparent relative mb-1 lg:mb-0 ">
      <div className="flex items-center justify-between mx-1 my-2 rounded-md border-2 border-gray-600 border-opacity-70">
        {/* //! /////////////// Mobile Search bar ///////////////// */}
      
        <div className="dropdown md:hidden">
          <div
            onClick={() =>
              setSelectedCategory({
                isSelectedCategory: false,
                selectedCategoryName: selectedCategory.selectedCategoryName,
              })
            }
            tabIndex={0}
            className="flex items-center py-2 px-2 cursor-pointer gap-1 bg-red-200">
            <p className="cursor-pointer capitalize text-sm text-center w-[50px] truncate ">
              {selectedCategory.selectedCategoryName}
            </p>
            <BiSolidDownArrow size={10} />
          </div>
          {selectedCategory.isSelectedCategory === false && (
            <ul
              tabIndex={0}
              className="dropdown-content z-50 bg-white w-52 shadow-2xl">
              {dropDownCategoryLists.map((list) => (
                <li
                  onClick={() => handleCategoryChange(list)}
                  key={list}
                  className="cursor-pointer px-1 py-0.5 text-black hover:bg-blue-600 hover:text-white capitalize text-sm">
                  {list}
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* //! /////////////// tablet and desktop Search bar ///////////////// */}

        <div className="dropdown hidden md:block">
          <div
            onClick={() =>
              setSelectedCategory({
                isSelectedCategory: false,
                selectedCategoryName: selectedCategory.selectedCategoryName,
              })
            }
            tabIndex={0}
            className="flex items-center px-2 py-1 cursor-pointer gap-1 h-full w-full ">
            <p className="cursor-pointer capitalize text-sm">
              {selectedCategory.selectedCategoryName}
            </p>
            <BiSolidDownArrow className="inline-block" size={10} />
          </div>
          {selectedCategory.isSelectedCategory === false && (
            <ul
              tabIndex={0}
              className="dropdown-content z-50 bg-white w-52 shadow-2xl">
              {dropDownCategoryLists.map((list) => (
                <li
                  onClick={() => handleCategoryChange(list)}
                  key={list}
                  className="cursor-pointer px-1 py-0.5 text-black hover:bg-blue-600 hover:text-white capitalize text-sm">
                  {list}
                </li>
              ))}
            </ul>
          )}
        </div>
        <input
          tabIndex={0}
          ref={inputRef}
          className={`appearance-none bg-gray-200 text-gray-700 px-4 py-2 leading-tight outline-none focus:outline-none focus:bg-white grow`}
          type="text"
          placeholder="Search..."
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <div className="px-3 py-2 cursor-pointer bg-yellow-400">
          <FiSearch size={20} />
        </div>
      </div>
      {/* absolute position search result */}
      {isSearchList && (
        <div className="hidden absolute top-0 mt-12 bg-white shadow-teal-500 rounded-sm shadow-2xl w-full md:flex flex-col z-50">
          {[3, 43, 44, 54, 65, 34, 67].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between border-b hover:bg-gray-100 cursor-pointer mt-2">
              <div className="flex items-center gap-2">
                <Image
                  src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1240&q=80"
                  alt=""
                  width={70}
                  height={70}
                  className="object-cover"
                />
                <p className="font-semibold">Search Names</p>
              </div>
              <div className="p-1 rounded-full cursor-pointer hover:bg-red-100">
                <CiCircleRemove size={22} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
