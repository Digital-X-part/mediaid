import AbsoluteCart from "@/components/Shared/AbsoluteCart/AbsoluteCart";
import AbsoluteCartDetails from "@/components/Shared/AbsoluteCartDetails/AbsoluteCartDetails";
import Footer from "@/components/Shared/Footer/Footer";
import BottomNavbar from "@/components/Shared/Navbar/BottomNavbar";
import MainNavbar from "@/components/Shared/Navbar/MainNavbar";
import ShippingAddressModal from "@/components/Shared/ShippingAddressModal/ShippingAddressModal";
import Sidebar from "@/components/Shared/Sidebar/Sidebar";

const MainLayoutClient = ({children}) => {
  return (
    <div>
      <MainNavbar />
      <ShippingAddressModal />
      {/* bottom navbar only visible for mobile devices */}
      <BottomNavbar></BottomNavbar>
        <div className="right-0 fixed flex top-2/4 mr-2 z-50">
          <AbsoluteCart
          />
        </div>
        <div className="right-0 fixed mr-2 z-50 top-10 ">
          <AbsoluteCartDetails
          />
        </div>

      <div className="lg:grid lg:grid-cols-12">
        <div
          className={`${
            "sidebarOpen"
              ? "lg:col-start-1 lg:col-end-3"
              : "lg:col-start-1 lg:col-end-2"
          } hidden lg:inline-block h-screen relative`}
        >
          <Sidebar></Sidebar>
        </div>
        <div
          className={`${
            "sidebarOpen"
              ? "lg:col-start-3 lg:col-end-13"
              : "lg:col-start-2 lg:col-end-13"
          }`}
        >
          {children}
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default MainLayoutClient;
