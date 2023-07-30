import Link from "next/link";
import { motion } from "framer-motion";
import { BsPerson, BsBag, BsHouseDoor, BsTags } from "react-icons/bs";

const BottomNavbar = () => {
  const navItems = [
    {
      icon: <BsHouseDoor className="w-[18px] text-slate-600" />,
      label: "Home",
      link: "/",
    },
    {
      icon: <BsBag className="w-[18px] text-slate-600" />,
      label: "Shop",
      link: "/shop",
    },
    {
      icon: <BsTags className="w-[18px] text-slate-600" />,
      label: "Offer",
      link: "/offer",
    },
    {
      icon: <BsPerson className="w-[18px] text-slate-600" />,
      label: "My Account",
      link: "/",
    },
  ];

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full md:hidden py-2 px-8 z-[80] bg-slate-200 fixed bottom-0 flex items-center justify-between"
    >
      {navItems.map((item, index) => (
        <Link key={index} href={item?.link}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center justify-center cursor-pointer"
          >
            {item.icon}
            <p className="text-[10px] font-medium">{item.label}</p>
          </motion.div>
        </Link>
      ))}
    </motion.div>
  );
};

export default BottomNavbar;
