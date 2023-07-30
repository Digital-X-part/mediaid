"use client";
import moment from "moment/moment";
import Link from "next/link";
import { MdDone } from "react-icons/md";
import { TbReload } from "react-icons/tb";
import { AiOutlineStop } from "react-icons/ai";
import { TbCurrencyTaka } from "react-icons/tb";
import { CgMenuMotion } from "react-icons/cg";
import { BsThreeDots } from "react-icons/bs";
import { useEffect, useState } from "react";
import axiosInstance from "@/utility/axiosInstance";

const orderStatusArray = [
  {
    id: "s54dfds45f",
    status: "completed",
  },
  {
    id: "5sdf4ds56f4",
    status: "pending",
  },
  {
    id: "564fs5d6f4ds6",
    status: "processing",
  },
  {
    id: "fd4sf4sd56f4d",
    status: "onHold",
  },
  {
    id: "ds56f4sd56f4sd",
    status: "pending",
  },
  {
    id: "sd64f4fd5g4f",
    status: "completed",
  },
  {
    id: "ds54fd5f4d5f4",
    status: "onHold",
  },
  {
    id: "ds56f4d5f4d5e5",
    status: "processing",
  },
  {
    id: "fsdf46ds54fds65",
    status: "pending",
  },
  {
    id: "sdt4765d4gf5d4gf5",
    status: "completed",
  },
  {
    id: "fs564fs65df4d56f",
    status: "onHold",
  },
  {
    id: "s56d4fsd564fd5s4f",
    status: "processing",
  },
];

const OrderList = () => {
  const [actionButtonListOpen, setActionButtonListOpen] = useState("");
  const [listOpen, setListOpen] = useState([]);
  const actionHandleButton = (id) => {
    setActionButtonListOpen(id);
  };
  const order = async () => {
    const res = await axiosInstance.get("/orders");
    setListOpen(res.data.order);
    // console.log(res.data.order);
  };
  useEffect(() => {
    order();
    // console.log(order());
  }, []);
  console.log(listOpen);
  return (
    <div>
      <div className="text-sm breadcrumbs ">
        <ul>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>Order List</li>
        </ul>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra h-screen">
          <thead className="bg-slate-200">
            <tr>
              <th>Order</th>
              <th>Date</th>
              <th>Order ID</th>
              <th>Transaction ID</th>
              <th>Ship To</th>
              <th>Status</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {listOpen.map((orderStatus) => (
              <tr key={orderStatus._id}>
                <td>
                  <div className="flex flex-col">
                    <div className="p-0 text-violet-500 text-sm font-bold">
                      <Link
                        href={`/dashboard/order-list/${orderStatus._id}`}
                        className="text-blue-500 hover:underline"
                      >
                        #181
                      </Link>
                      <span className="text-gray-400 font-normal"> by</span>{" "}
                      {orderStatus.customerId}
                    </div>
                    <div className="p-0 font-semibold text-blue-500 ">
                      mdbulbulmolla1222@gmail.com
                    </div>
                  </div>
                </td>
                <td className="text-sm font-roboto text-blue-500 tracking-wider">
                  {orderStatus.orderTime}
                </td>
                <td className="text-sm font-roboto text-blue-500 tracking-wider">
                  {orderStatus.orderNumber}
                </td>
                <td className="text-sm font-roboto text-blue-500 tracking-wider">
                  {orderStatus.transactionId}
                </td>
                <td className="text-xs font-roboto text-blue-500 tracking-wider">
                  {orderStatus.shipTo?.district} ,{orderStatus.shipTo?.area} ,
                  {orderStatus.shipTo?.location} ,
                  {orderStatus.shipTo?.addressType} , address
                </td>
                {/* {!orderStatus.status === "completed" && ( */}
                  <td>
                    <div className="flex items-center gap-x-1 bg-[#CCF6E4] text-[#00864e] rounded-lg tracking-wide px-2 py-1 font-bold">
                      <p>Completed </p>
                      <MdDone size={15} color="#00864e" />
                    </div>
                  </td>
                {/* )} */}

                {orderStatus.status === "processing" && (
                  <td>
                    <div className="flex items-center gap-1 bg-[#d5e5fa] text-[#1c4f93] rounded-lg tracking-wide px-2 py-1 font-bold">
                      <p>Processing </p>
                      <TbReload size={15} color="#1c4f93" />
                    </div>
                  </td>
                )}
                {orderStatus.status === "pending" && (
                  <td>
                    <div className="flex items-center gap-1 bg-[#fde6d8] text-[#9d5228] rounded-lg tracking-wide px-2 py-1 font-bold">
                      <p>Pending </p>
                      <CgMenuMotion size={15} color="#00864e" />
                    </div>
                  </td>
                )}
                {orderStatus.status === "onHold" && (
                  <td>
                    <div className="flex items-center gap-x-1 bg-[#E3E6EA] text-[#7d899b] rounded-lg tracking-wide px-2 py-1 font-bold">
                      <p>On Hold </p>
                      <AiOutlineStop size={15} color="#7d899b" />
                    </div>
                  </td>
                )}

                <td className=" font-roboto font-semibold text-blue-500 ">
                  <TbCurrencyTaka size={20} className="inline -mt-1" />
                  <span className="text-lg"> {orderStatus.amount}</span>
                </td>

                <td>
                  <div
                    onClick={() => actionHandleButton(orderStatus.id)}
                    className="cursor-pointer">
                    <BsThreeDots size={25} />
                  </div>
                  {actionButtonListOpen === orderStatus.id && (
                    <div className="absolute z-30 bg-white -ml-32 mt-2 w-36 shadow-2xl border border-indigo-100 rounded-sm">
                      <ul>
                        <li className="px-4 py-1 text-base cursor-pointer font-medium text-slate-600 hover:bg-red-100 border-b">
                          Completed
                        </li>
                        <li className="px-4 py-1 text-base cursor-pointer font-medium text-slate-600 hover:bg-red-100 border-b">
                          Processing
                        </li>
                        <li className="px-4 py-1 text-base cursor-pointer font-medium text-slate-600 hover:bg-red-100 border-b">
                          On Hold
                        </li>
                        <li className="px-4 py-1 text-base cursor-pointer font-medium text-slate-600 hover:bg-red-100 border-b">
                          Pending
                        </li>
                        <li className="px-4 py-1 text-base cursor-pointer font-medium text-red-500 hover:bg-red-100 ">
                          Delete
                        </li>
                      </ul>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
