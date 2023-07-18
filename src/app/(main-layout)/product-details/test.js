
import Footer from "@/components/Shared/Footer/Footer";
import BottomNavbar from "@/components/Shared/Navbar/BottomNavbar";
import MainNavbar from "@/components/Shared/Navbar/MainNavbar";

const layout = ({ children }) => {
  return (
    <div>
    <MainNavbar/>
    
      <BottomNavbar></BottomNavbar>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default layout;
