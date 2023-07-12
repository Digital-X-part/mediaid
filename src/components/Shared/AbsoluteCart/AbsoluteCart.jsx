"use client";
import Image from "next/image";
import cartImg from "@/assests/cart.png";
import { useState } from "react";

const AbsoluteCart = ({ handleAbsoluteCartItemOpen }) => {
  return (
    <div>
      <div
        onClick={handleAbsoluteCartItemOpen}
        className="w-fit shadow-2xl cursor-pointer hover:scale-95 duration-300">
        <div className="bg-teal-600 p-1 text-center">
          <Image
            className="mx-auto"
            src={cartImg}
            alt=""
            width={25}
            height={25}
          />
          <p className="text-white">
            <span>2</span> Items
          </p>
        </div>
        <p className="bg-white p-1 text-center">
          ৳ <span>452</span>
        </p>
      </div>
    </div>
  );
};

export default AbsoluteCart;
