"use client"
import React from "react";
import Categories from "./categories";
import { usePathname } from "next/navigation";
import Filter from "@/components/Pages/Shop/Filter/Filter";


const Sidebar = ({ sidebarOpen }) => {
  const path = usePathname();
  return (
    <div
      className={`shadow-lg first:${
        sidebarOpen ? "lg:w-[180px] xl:w-[240px]" : "lg:w-[80px] xl:w-[100px]"
      } h-[90vh] fixed border border-t-0 ${path == '/shop' || 'lg:p-1 xl:p-3'}`}>
      {path == '/shop' && <Filter sidebarOpen={sidebarOpen}></Filter>}
      {path == '/shop' || <Categories sidebarOpen={sidebarOpen}></Categories>}
    </div>
  );
};

export default Sidebar;
