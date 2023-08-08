"use client";
import { useAllOrders } from "@/hooks/useAllOrders";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

import { MdOutlineDone } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";

export const metadata = {
  title: "Edit Profile | Mediaid BD",
  description:
    "An e-commerce build by the doctors, run by the doctors and serve to the doctors",
};

const Orders = () => {
  const { orders, isOrdersLoading, isOrdersError } = useAllOrders(); // remaining => mutateOrders
  console.log(orders);
  if (isOrdersLoading) {
    return <span className="loading loading-ring loading-lg"></span>;
  }
  if (isOrdersError) {
    return <tr>error</tr>;
  }
  return (
    <>
      <h2 className="mt-2 font-bold ">Order History</h2>
      <div>
        {orders?.order?.map((item) => (
          <div
            key={item?._id}
            className="mt-4 shadow-xl rounded-md border border-gray-200 "
          >
            <div className="flex items-center justify-between border-b p-2">
              <div>
                <Link
                  href={`/account/orders/${item?._id}`}
                  className="font-bold"
                >
                  Order# {item?.orderNumber}
                </Link>
                <p className="text-xs font-medium text-gray-500">
                  Date Added: {moment(item?.orderTime).format("LLL")}
                </p>
              </div>
              <Link
                href={`/account/orders/${item?._id}`}
                className="btn btn-warning btn-sm"
              >
                View
              </Link>
              <div className="flex items-center gap-2">
                <p className="bg-green-700 p-0.5 rounded-full">
                  <MdOutlineDone color="white" />
                </p>
                <p className="text-yellow-500 font-semibold">Canceled</p>
              </div>
            </div>
            <div>
              {item?.orderItems?.map((orderItem) => (
                <div
                  key={orderItem?._id}
                  className="md:flex md:items-center justify-between bg-[#eceaea90] p-2"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src="https://images.unsplash.com/photo-1603398938378-e54eab446dde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                      width={60}
                      height={60}
                      alt=""
                      className="rounded-md"
                    />
                    <p className="font-semibold">{orderItem?.name}</p>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center">
                      <p className="text-indigo-700 font-bold">
                        {orderItem?.price}
                      </p>
                      <TbCurrencyTaka size={22} color="indigo" />
                    </div>
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
