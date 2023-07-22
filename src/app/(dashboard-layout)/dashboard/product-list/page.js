"use client";

import Image from "next/image";
import React from "react";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import Rating from "react-rating";

const ProductList = () => {
  return (
    <div className="overflow-x-auto bg-slate-200">
      <table className="table table-zebra ">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Product Details</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>SKU</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {[1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (
            <tr key={item}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image
                        width={70}
                        height={70}
                        src="https://images.unsplash.com/flagged/photo-1584036561584-b03c19da874c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
                        alt="Avatar Tailwind CSS Component"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="font-semibold text-neutral-600">
                    Corona Virus
                  </div>
                </div>
              </td>
              <td>
                <p className="w-fit bg-slate-300 p-1 rounded-md text-neutral-700 text-xs tracking-wide">
                  Hospital
                </p>
              </td>
              <td className="text-xl font-bold text-blue-500">
                ৳ <span className="text-base">265</span>{" "}
              </td>
              <td className="font-bold text-yellow-500">45</td>
              <td className="font-semibold text-violet-500">COR-2456</td>
              <td>
                <Rating
                  readonly
                  placeholderRating={4}
                  placeholderSymbol={<AiTwotoneStar color="red" size={18} />}
                  emptySymbol={<AiOutlineStar size={18} />}
                />
              </td>
              <th>
                <button className="btn btn-warning btn-xs hover:bg-transparent">
                  details
                </button>
                <button className="btn btn-error btn-xs ml-2 hover:bg-inherit">
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
