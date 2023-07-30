import DashboardSideBar from "@/components/Shared/DashboardSideBar/DashboardSideBar";

import React from "react";



const DashBoardLayout = ({ children }) => {
  return (
    <section className="flex gap-4">
      <DashboardSideBar />
      <div>{children}</div>
    </section>
  );
};

export default DashBoardLayout;
