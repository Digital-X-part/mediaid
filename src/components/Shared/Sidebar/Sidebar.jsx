import Image from "next/image";
import React from "react";





const Sidebar = ({ sidebarOpen }) => {
  return (
    <div
      className={`shadow-lg first:${
        sidebarOpen ? "lg:w-[180px] xl:w-[240px]" : "lg:w-[80px] xl:w-[100px]"
      } h-[90vh] fixed border border-t-0 lg:p-1 xl:p-3`}>
      <ul className="space-y-2">
        <li className="flex gap-2 items-center cursor-pointer lg:px-2 xl:px-3 py-2 rounded hover:bg-slate-100">
          <Image
            src="https://i.ibb.co/drbWhjJ/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-Jj-YXRl-Z29ye-Vwv-MTMuc-G5n-Iiwi-ZWRpd-HMi-Oltdf-Q.png"
            alt="icon1"
            width={25}
            height={25}></Image>
          <p className={`text-sm ${sidebarOpen || "hidden"}`}>
            Covid-19 Special
          </p>
        </li>
        <li className="flex gap-2 items-center cursor-pointer lg:px-2 xl:px-3 py-2 rounded hover:bg-slate-100">
          <Image
            src="https://i.ibb.co/HPLZFGf/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-Jj-YXRl-Z29ye-Vwv-MTQuc-G5n-Iiwi-ZWRpd-HMi-Oltdf-Q.png"
            alt="icon2"
            width={25}
            height={25}></Image>
          <p className={`text-sm ${sidebarOpen || "hidden"}`}>Devices</p>
        </li>
        <li className="flex gap-2 items-center cursor-pointer lg:px-2 xl:px-3 py-2 rounded hover:bg-slate-100">
          <Image
            src="https://i.ibb.co/gSM5dGM/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-Jj-YXRl-Z29ye-Vwv-MTcuc-G5n-Iiwi-ZWRpd-HMi-Oltdf-Q.png"
            alt="icon2"
            width={25}
            height={25}></Image>
          <p className={`text-sm ${sidebarOpen || "hidden"}`}>Personal Care</p>
        </li>
        <li className="flex gap-2 items-center cursor-pointer lg:px-2 xl:px-3 py-2 rounded hover:bg-slate-100">
          <Image
            src="https://i.ibb.co/drbWhjJ/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-Jj-YXRl-Z29ye-Vwv-MTMuc-G5n-Iiwi-ZWRpd-HMi-Oltdf-Q.png"
            alt="icon1"
            width={25}
            height={25}></Image>
          <p className={`text-sm ${sidebarOpen || "hidden"}`}>
            Covid-19 Special
          </p>
        </li>
        <li className="flex gap-2 items-center cursor-pointer lg:px-2 xl:px-3 py-2 rounded hover:bg-slate-100">
          <Image
            src="https://i.ibb.co/HPLZFGf/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-Jj-YXRl-Z29ye-Vwv-MTQuc-G5n-Iiwi-ZWRpd-HMi-Oltdf-Q.png"
            alt="icon2"
            width={25}
            height={25}></Image>
          <p className={`text-sm ${sidebarOpen || "hidden"}`}>Devices</p>
        </li>
        <li className="flex gap-2 items-center cursor-pointer lg:px-2 xl:px-3 py-2 rounded hover:bg-slate-100">
          <Image
            src="https://i.ibb.co/gSM5dGM/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-Jj-YXRl-Z29ye-Vwv-MTcuc-G5n-Iiwi-ZWRpd-HMi-Oltdf-Q.png"
            alt="icon2"
            width={25}
            height={25}></Image>
          <p className={`text-sm ${sidebarOpen || "hidden"}`}>Personal Care</p>
        </li>
        <li className="flex gap-2 items-center cursor-pointer lg:px-2 xl:px-3 py-2 rounded hover:bg-slate-100">
          <Image
            src="https://i.ibb.co/drbWhjJ/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-Jj-YXRl-Z29ye-Vwv-MTMuc-G5n-Iiwi-ZWRpd-HMi-Oltdf-Q.png"
            alt="icon1"
            width={25}
            height={25}></Image>
          <p className={`text-sm ${sidebarOpen || "hidden"}`}>
            Covid-19 Special
          </p>
        </li>
        <li className="flex gap-2 items-center cursor-pointer lg:px-2 xl:px-3 py-2 rounded hover:bg-slate-100">
          <Image
            src="https://i.ibb.co/HPLZFGf/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-Jj-YXRl-Z29ye-Vwv-MTQuc-G5n-Iiwi-ZWRpd-HMi-Oltdf-Q.png"
            alt="icon2"
            width={25}
            height={25}></Image>
          <p className={`text-sm ${sidebarOpen || "hidden"}`}>Devices</p>
        </li>
        <li className="flex gap-2 items-center cursor-pointer lg:px-2 xl:px-3 py-2 rounded hover:bg-slate-100">
          <Image
            src="https://i.ibb.co/gSM5dGM/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-Jj-YXRl-Z29ye-Vwv-MTcuc-G5n-Iiwi-ZWRpd-HMi-Oltdf-Q.png"
            alt="icon2"
            width={25}
            height={25}></Image>
          <p className={`text-sm ${sidebarOpen || "hidden"}`}>Personal Care</p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
