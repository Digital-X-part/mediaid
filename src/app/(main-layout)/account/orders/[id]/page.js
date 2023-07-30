import Image from "next/image";
import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";

const OrderInfo = () => {
  return (
    <div className="mt-4 md:flex gap-6 mr-1">
      <div className="w-full md:w-[70%] shadow-lg p-4 border border-gray-100 rounded-md">
        <p className="text-center text-lg font-bold text-slate-700 tracking-wide">
          Order Information
        </p>
        <p className="text-center bg-green-600 w-fit mx-auto text-slate-200 px-2 py-0.5 rounded-sm text-sm">
          Canceled
        </p>
        {/* **************** Shipping & Order summary **************** */}

        <div className="bg-[#F2F4F8] md:flex gap-4 mt-4 p-4 rounded-md">
          <div className="w-full md:w-[60%]">
            <h2 className="font-bold border-b pb-1">Shipping Address</h2>
            <div className="flex flex-col gap-y-1">
              <p>
                Name: <span className="font-semibold">BulBul Ahmed</span>
              </p>
              <p>
                Address:{" "}
                <span className="font-semibold">
                  Moon lite center, beside Mars, Dhaka City, Bangladesh
                </span>
              </p>
              <p>
                Mobile: <span className="font-semibold">01789499829</span>
              </p>
            </div>
          </div>
          <div className="w-full mt-4 md:mt-0 md:w-[38%]">
            <h2 className="font-bold border-b pb-1">Order Summary</h2>
            <div className="flex flex-col gap-y-1">
              <div className="flex items-center justify-between">
                <p className="font-medium">Sub-Total</p>
                <div className="flex items-center">
                  <p className="text-indigo-700 font-semibold">229,860</p>
                  <TbCurrencyTaka size={20} color="indigo" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-medium">Home Delivery</p>
                <div className="flex items-center">
                  <p className="text-indigo-700 font-semibold">60</p>
                  <TbCurrencyTaka size={20} color="indigo" />
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-blue-300">
                <p className="font-medium">Total</p>
                <div className="flex items-center">
                  <p className="text-indigo-700 font-semibold">229,920</p>
                  <TbCurrencyTaka size={20} color="indigo" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* **************** Ordered Products **************** */}
        <div className="mt-4">
          <p className="text-lg font-bold text-slate-700 tracking-wide">
            Products
          </p>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2].map((productItem) => (
                  <tr key={productItem}>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <Image
                            src="https://images.unsplash.com/photo-1603398938378-e54eab446dde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                            width={60}
                            height={60}
                            alt=""
                            className="rounded-md"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      Machenike L15 Core i5 12th Gen RTX 3050 Ti 4GB Graphics
                      15.6 FHD 144Hz Gaming Laptop
                    </td>
                    <td>2</td>
                    <td>229,920</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* **************** Order History **************** */}
      <div className="w-full mt-4 md:mt-0 md:w-[28%] shadow-lg p-4 border border-gray-100 rounded-md">
        <p className="text-lg font-bold text-slate-700 tracking-wide">
          Order History
        </p>
        <div className="mt-4">
          <div className="border-l-2 pl-4 relative pb-6">
            <h5 className="font-semibold text-gray-800">Canceled</h5>
            <p className="text-sm py-1">
              Dear Customer, As per our conversation, you mistakenly placed an
              order. So you wanted to cancel the order. Your order has been
              canceled. For any query please contact our helpline 16793.
            </p>
            <p className="text-sm font-semibold text-gray-700">30 Jul 2023</p>
            <p className="w-3 h-3 rounded-full border-2 border-orange-600 absolute top-1.5 -left-1.5 bg-white"></p>
          </div>
          <div className="border-l-2 pl-4 relative">
            <h5 className="font-semibold text-gray-800">Pending</h5>
            <p className="text-sm py-1">
              Dear Customer, thank you for your order. Your order is currently
              pending and being processed. We will update you soon. Thank you
              for choosing us!
            </p>
            <p className="text-sm font-semibold text-gray-700">29 Jul 2023</p>
            <p className="w-3 h-3 rounded-full border-2 border-orange-600 absolute top-1.5 -left-1.5 bg-white"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;
