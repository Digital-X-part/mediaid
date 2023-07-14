import SearchBar from "@/components/Pages/Home/SearchBar/SearchBar";
import Footer from "@/components/Shared/Footer/Footer";
import BottomNavbar from "@/components/Shared/Navbar/BottomNavbar";
import TopNavbar from "@/components/Shared/Navbar/TopNavbar";

const layout = ({ children }) => {
  return (
    <div>
      <TopNavbar></TopNavbar>
      <SearchBar />
      <BottomNavbar></BottomNavbar>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default layout;
