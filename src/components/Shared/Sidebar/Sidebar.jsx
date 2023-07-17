import React from "react";

const Sidebar = ({ sidebarOpen }) => {
  return (
    <div
      className={`pl-10 bg-white shadow-black shadow-md overflow-hidden ${
        sidebarOpen ? "w-[250px]" : "w-[160px] z-40 "
      } h-full fixed `}>
      this is side bar 
    </div>
  );
};

export default Sidebar;
