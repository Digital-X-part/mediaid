import Nav from "./Nav";
import MobileNav from "../MobileNav/MobileNav";

const MainNavbar = () => {
  return (
    <div>
      <div className="hidden md:block">
        <Nav />
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>
    </div>
  );
};

export default MainNavbar;
