import DashBoardSidebar from "@/components/DashBoardSidebar/DashBoardSidebar";
import React from "react";

const DashBoardLayout = ({ children }) => {
  return (
    <section className="flex gap-4">
      <DashBoardSidebar />
      <div>{children}</div>
    </section>
  );
};

export default DashBoardLayout;
