import { IconContext } from "react-icons";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { HiSearch } from "react-icons/hi";
import { MdMenuOpen } from "react-icons/md";

const SearchBar = () => {
  return (
    <div className="">
      <div className="flex flex-col p-2 pb-2 md:w-full mx-auto ">
        <div className="bg-white items-center justify-between w-full flex rounded-full shadow-lg md:p-2 p-1.5  sticky">
          <div>
            <div className="hidden md:block p-2 mr-1 rounded-full hover:bg-gray-100 cursor-pointer">
              
              <IconContext.Provider value={{ size: "1.5em" }}>
              <HiArrowNarrowLeft />

              </IconContext.Provider>
            </div>
            <div className="md:hidden p-2 mr-1 rounded-full hover:bg-gray-100 cursor-pointer">
              <IconContext.Provider value={{ size: "1.5em" }}>
                <MdMenuOpen />
              </IconContext.Provider>
            </div>
          </div>

          <input
            className="font-bold uppercase px-3 rounded-full w-full md:py-4 py-3 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-slate-600  lg:text-sm text-xs"
            type="text"
            placeholder="Search"
          />

          <div className="bg-gray-600 p-2 hover:bg-blue-400 cursor-pointer mx-2 rounded-full text-white ">
        
            <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
              <HiSearch />
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
