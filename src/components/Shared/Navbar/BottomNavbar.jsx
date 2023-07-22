import Link from "next/link";
import {
  BsPerson,
  BsBag,
  BsHouseDoor,
  BsTags,
} from "react-icons/bs";

const BottomNavbar = () => {
  return (
    <div className="w-full md:hidden py-2 px-8 z-[100] bg-slate-200 fixed bottom-0 flex items-center justify-between">
      <Link href="/">
        <div className="flex flex-col items-center justify-center">
          <BsHouseDoor className="w-[18px] text-slate-600" />
          <p className="text-[10px] font-medium">Home</p>
        </div>
      </Link>
      <Link href="/shop">
        <div className="flex flex-col items-center justify-center">
          <BsBag className="w-[18px] text-slate-600" />
          <p className="text-[10px] font-medium">Shop</p>
        </div>
      </Link>
      <Link href="/offer">
        <div className="flex flex-col items-center justify-center">
          <BsTags className="w-[18px] text-slate-600" />
          <p className="text-[10px] font-medium">Offer</p>
        </div>
      </Link>
      <Link href="/dashboard">
        <div className="flex flex-col items-center justify-center">
          <BsPerson className="w-[18px] text-slate-600" />
          <p className="text-[10px] font-medium">My Account</p>
        </div>
      </Link>
    </div>
  );
};

export default BottomNavbar;
