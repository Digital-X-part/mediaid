import React from "react";

const SubNav = ({ handleSidebarOpen }) => {
  return (
    <div className="h-10 w-full grid grid-cols-3 items-center justify-between px-10 border bg-white">
      <p onClick={handleSidebarOpen}>
        category
      </p>
      <div className="flex gap-4">
        <div>div1</div>
        <div>div2</div>
      </div>
      <div>54</div>
    </div>
  );
};

export default SubNav;
