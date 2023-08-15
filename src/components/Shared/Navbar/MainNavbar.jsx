import Nav from "./Nav";
import MobileNav from "../MobileNav/MobileNav";
import SubNav from "./SubNav";

const MainNavbar = () => {
  return (
    <div className="md:sticky top-0 z-50">
      {/* for desktop view */}
      <div className="hidden md:block ">
        <Nav />
        <SubNav></SubNav>
      </div>
      {/* for render only mobile devices */}
      <div className="md:hidden">
        <MobileNav />
      </div>
    </div>
  );
};

export default MainNavbar;
