import Image from "next/image";
import Link from "next/link";
import React from "react";

const ShopProduct = () => {
  return (
        <Link
          href="/product-details"
          className="bg-white rounded-sm shadow-sm p-1 mx-1"
        >
          <Image
            src="https://images.unsplash.com/photo-1550572017-4fcdbb59cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1039&q=80"
            alt=""
            width={500}
            height={500}
            className="object-cover w-full h-[200px] rounded-sm "
          />
          <div>
            <h4 className="text-[12px] mt-1">
              {"Jeptum hp medicine".length > 20
                ? `Jeptum hp medicine`.slice(0, 20) + "..."
                : "Jeptum hp medicine"}
            </h4>
            <div className="flex justify-between items-center">
              <div>
                <del className="text-xs font-mono text-gray-400">$454</del>{" "}
                <span className="font-mono text-yellow-500 font-semibold">
                  $299
                </span>
              </div>
              <p className="text-[10px] bg-red-600 px-1 py-0.5 text-white rounded-md">
                <span>12</span>% Off
              </p>
            </div>
          </div>
          <button className="uppercase text-xs border w-full py-0.5 font-sans my-1 border-yellow-300 text-neutral-800 ">
            Add to cart
          </button>
        </Link>
  );
};

export default ShopProduct;
