"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/account/my-orders",
    text: "My Orders",
  },
  {
    href: "/account",
    text: "My Account",
  },
  {
    href: "/account/my-prescription",
    text: "My Prescription",
  },
];

const DashBoardSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-1">
      {links.map((link) => {
        const isActive = pathname === link.href; // Use strict equality
        return (
          <Link
            key={link.href}
            href={link.href}
            className={
              isActive ? "text-blue-500 font-bold" : "text-black font-bold"
            }>
            {link.text}
          </Link>
        );
      })}
    </div>
  );
};

export default DashBoardSidebar;
