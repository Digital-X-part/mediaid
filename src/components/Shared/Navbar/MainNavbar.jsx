import Nav from "./Nav";
import MobileNav from "../MobileNav/MobileNav";
import SubNav from "./SubNav";

const MainNavbar = ({handleSidebarOpen}) => {
  return (
    <div className="sticky top-0 z-50">
      <div className="hidden md:block ">
        <Nav />
        <SubNav handleSidebarOpen={handleSidebarOpen}></SubNav>
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>
    </div>
  );
};

export default MainNavbar;
