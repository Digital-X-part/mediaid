const SearchBar = () => {
  return (
    <div className="md:mt-14 mt-10">
      <div className="flex flex-col p-2 pt-6 pb-2 md:w-3/6 mx-auto ">
        <div
          className="bg-white items-center justify-between w-full flex rounded-full shadow-lg md:p-2 p-1.5  sticky"
          style={{ top: "5px" }}
        >
          <div>
            <div className="p-2 mr-1 rounded-full hover:bg-gray-100 cursor-pointer">
              <svg
                className="h-6 w-6 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <input
            className="font-bold uppercase px-3 rounded-full w-full md:py-4 py-3 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-slate-600  lg:text-sm text-xs"
            type="text"
            placeholder="Search"
          />

          <div className="bg-gray-600 p-2 hover:bg-blue-400 cursor-pointer mx-2 rounded-full">
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
