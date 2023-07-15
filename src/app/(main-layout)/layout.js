"use client";
// import SearchBar from "@/components/Pages/Home/SearchBar/SearchBar";
import AbsoluteCart from "@/components/Shared/AbsoluteCart/AbsoluteCart";
import AbsoluteCartDetails from "@/components/Shared/AbsoluteCartDetails/AbsoluteCartDetails";
import Footer from "@/components/Shared/Footer/Footer";
import BottomNavbar from "@/components/Shared/Navbar/BottomNavbar";
import Nav from "@/components/Shared/Navbar/Nav";
import TopNavbar from "@/components/Shared/Navbar/TopNavbar";
import { useState } from "react";

const layout = ({ children }) => {
  const [isCartClicked, setIsCartClicked] = useState(false);
  const handleAbsoluteCartItemOpen = () => {
    setIsCartClicked(!isCartClicked);
  };
  return (
    <div>
      {/* <TopNavbar></TopNavbar> */}
      <div className="hidden md:block">
        <Nav />
      </div>
      <BottomNavbar></BottomNavbar>
      {isCartClicked === false && (
        <div className="right-0 fixed flex top-2/4 mr-2 z-50">
          <AbsoluteCart
            handleAbsoluteCartItemOpen={handleAbsoluteCartItemOpen}
          />
        </div>
      )}
      {isCartClicked && (
        <div className="right-0 fixed mr-2 z-20 top-10 ">
          <AbsoluteCartDetails setIsCartClicked={setIsCartClicked} />
        </div>
      )}
      {children}
      <Footer></Footer>
    </div>
  );
};

export default layout;
