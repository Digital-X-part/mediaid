"use client";
import AbsoluteCart from "@/components/Shared/AbsoluteCart/AbsoluteCart";
import AbsoluteCartDetails from "@/components/Shared/AbsoluteCartDetails/AbsoluteCartDetails";
import Footer from "@/components/Shared/Footer/Footer";
import BottomNavbar from "@/components/Shared/Navbar/BottomNavbar";
import MainNavbar from "@/components/Shared/Navbar/MainNavbar";
import ShippingAddressModal from "@/components/Shared/ShippingAddressModal/ShippingAddressModal";

import Sidebar from "@/components/Shared/Sidebar/Sidebar";

import { useState } from "react";

const MainLayout = ({ children }) => {
  const [isCartClicked, setIsCartClicked] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isUserAddressModalOpen, setIsUserAddressModalOpen] = useState(false);
  const handleSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const handleAbsoluteCartItemOpen = () => {
    setIsCartClicked(!isCartClicked);
  };
  return (
    <div>
      <MainNavbar
        setIsCartClicked={setIsCartClicked}
        handleSidebarOpen={handleSidebarOpen}
      />
           <ShippingAddressModal />
      {/* bottom navbar only visible for mobile devices */}
      <BottomNavbar></BottomNavbar>
      {isCartClicked === false && (
        <div className="right-0 fixed flex top-2/4 mr-2 z-50">
          <AbsoluteCart
            handleAbsoluteCartItemOpen={handleAbsoluteCartItemOpen}
          />
        </div>
      )}
      {isCartClicked && (
        <div className="right-0 fixed mr-2 z-50 top-10 ">
          <AbsoluteCartDetails
            setIsUserAddressModalOpen={setIsUserAddressModalOpen}
            setIsCartClicked={setIsCartClicked}
          />
        </div>
      )}

 

      <div className="lg:grid lg:grid-cols-12">
        <div
          className={`${
            sidebarOpen
              ? "lg:col-start-1 lg:col-end-3"
              : "lg:col-start-1 lg:col-end-2"
          } hidden lg:inline-block h-screen relative`}>
          <Sidebar sidebarOpen={sidebarOpen}></Sidebar>
        </div>
        <div
          className={`${
            sidebarOpen
              ? "lg:col-start-3 lg:col-end-13"
              : "lg:col-start-2 lg:col-end-13"
          }`}>
          {children}
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
