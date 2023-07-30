import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineDone } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";

const Orders = () => {
  return (
    <>
      <h2 className="mt-2 font-bold ">Order History</h2>
      <div>
        {[4, 5, 6].map((item) => (
          <div
            key={item}
            className="mt-4 shadow-xl rounded-md border border-gray-200 ">
            <div className="flex items-center justify-between border-b p-2">
              <div>
                <p className="font-bold">Order# 35421</p>
                <p className="text-xs font-medium text-gray-500">
                  Date Added: 29 Jul 2023
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="bg-green-700 p-0.5 rounded-full">
                  <MdOutlineDone color="white" />
                </p>
                <p className="text-yellow-500 font-semibold">Canceled</p>
              </div>
            </div>
            <div>
              {[1, 2].map((orderItem) => (
                <div
                  key={orderItem}
                  className="md:flex md:items-center justify-between bg-[#eceaea90] p-2">
                  <div className="flex items-center gap-2">
                    <Image
                      src="https://images.unsplash.com/photo-1603398938378-e54eab446dde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                      width={60}
                      height={60}
                      alt=""
                      className="rounded-md"
                    />
                    <p className="font-semibold">
                      Machenike L15 Core i5 12th Gen RTX 3050 Ti 4GB Graphics
                      15.6 FHD 144Hz Gaming Laptop
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center">
                      <p className="text-indigo-700 font-bold">229,860</p>
                      <TbCurrencyTaka size={22} color="indigo" />
                    </div>
                    <Link
                      href={`/user-dashboard/orders/${orderItem}`}
                      className="btn btn-warning btn-sm">
                      View
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Orders;
