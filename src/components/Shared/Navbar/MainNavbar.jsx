import Nav from "./Nav";
import MobileNav from "../MobileNav/MobileNav";
import SubNav from "./SubNav";

const MainNavbar = ({ handleSidebarOpen, setIsCartClicked }) => {
  return (
    <div className="md:sticky top-0 z-50">
      {/* for desktop view */}
      <div className="hidden md:block ">
        <Nav setIsCartClicked={setIsCartClicked} />
        <SubNav handleSidebarOpen={handleSidebarOpen}></SubNav>
      </div>
      {/* for render only mobile devices */}
      <div className="md:hidden">
        <MobileNav setIsCartClicked={setIsCartClicked} />
      </div>
    </div>
  );
};

export default MainNavbar;
