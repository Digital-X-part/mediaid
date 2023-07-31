"use client";
import Link from "next/link";
import { MdDone } from "react-icons/md";
import { TbReload } from "react-icons/tb";
import { AiOutlineStop } from "react-icons/ai";
import { TbCurrencyTaka } from "react-icons/tb";
import { CgMenuMotion } from "react-icons/cg";
import { BsThreeDots } from "react-icons/bs";
import { useEffect, useState } from "react";
import axiosInstance from "@/utility/axiosInstance";

const orderDetailArray = [
  {
    id: "s54dfds45f",
    status: "Completed",
  },
  {
    id: "5sdf4ds56f4",
    status: "Pending",
  },
  {
    id: "564fs5d6f4ds6",
    status: "Processing",
  },
  {
    id: "fd4sf4sd56f4d",
    status: "OnHold",
  },
];

const OrderList = () => {
  const [actionButtonListOpen, setActionButtonListOpen] = useState("");
  const [isActionButtonListOpen, setIsActionButtonListOpen] = useState(false);
  const [orderListData, setOrderListData] = useState([]);
  const actionHandleButton = (id) => {
    setActionButtonListOpen(id);
    setIsActionButtonListOpen(!isActionButtonListOpen);
  };

  const order = async () => {
    const res = await axiosInstance.get("/orders");
    setOrderListData(res.data.order);
  };
  useEffect(() => {
    order();
  }, [orderListData]);
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
            {orderListData.map((orderDetail) => (
              <tr key={orderDetail._id}>
                <td>
                  <div className="flex flex-col">
                    <div className="p-0 text-violet-500 text-sm font-bold">
                      <Link
                        href={`/dashboard/order-list/${orderDetail._id}`}
                        className="text-blue-500 hover:underline"
                      >
                        # {orderDetail.orderNumber}
                      </Link>
                      <span className="text-gray-400 font-normal"> by</span>{" "}
                      {orderDetail.fullName}
                    </div>
                    <div className="p-0 font-semibold text-blue-500 ">
                      {orderDetail.email}
                    </div>
                  </div>
                </td>
                <td className="text-sm font-roboto text-blue-500 tracking-wider">
                  {orderDetail.orderTime}
                </td>
                <td className="text-sm font-roboto text-blue-500 tracking-wider">
                  {orderDetail.orderNumber}
                </td>
                <td className="text-sm font-roboto text-blue-500 tracking-wider">
                  {orderDetail.transactionId}
                </td>
                <td className="text-xs font-roboto text-blue-500 tracking-wider">
                  {orderDetail.shipTo?.district} ,{orderDetail.shipTo?.area} ,
                  {orderDetail.shipTo?.location} ,
                  <span className="font-bold">
                    {orderDetail.shipTo?.addressType}
                  </span>
                </td>
                {orderDetail.status === "Completed" && (
                  <td>
                    <div className="flex items-center gap-x-1 bg-[#CCF6E4] text-[#00864e] rounded-lg tracking-wide px-2 py-1 font-bold">
                      <p>Completed </p>
                      <MdDone size={15} color="#00864e" />
                    </div>
                  </td>
                )}

                {orderDetail.status === "Processing" && (
                  <td>
                    <div className="flex items-center gap-1 bg-[#d5e5fa] text-[#1c4f93] rounded-lg tracking-wide px-2 py-1 font-bold">
                      <p>Processing </p>
                      <TbReload size={15} color="#1c4f93" />
                    </div>
                  </td>
                )}
                {orderDetail.status === "Pending" && (
                  <td>
                    <div className="flex items-center gap-1 bg-[#fde6d8] text-[#9d5228] rounded-lg tracking-wide px-2 py-1 font-bold">
                      <p>Pending </p>
                      <CgMenuMotion size={15} color="#00864e" />
                    </div>
                  </td>
                )}
                {orderDetail.status === "OnHold" && (
                  <td>
                    <div className="flex items-center gap-x-1 bg-[#E3E6EA] text-[#7d899b] rounded-lg tracking-wide px-2 py-1 font-bold">
                      <p>On Hold </p>
                      <AiOutlineStop size={15} color="#7d899b" />
                    </div>
                  </td>
                )}

                <td className=" font-roboto font-semibold text-blue-500 ">
                  <TbCurrencyTaka size={20} className="inline -mt-1" />
                  <span className="text-lg"> {orderDetail.amount}</span>
                </td>

                <td>
                  <div
                    onClick={() => actionHandleButton(orderDetail.id)}
                    className="cursor-pointer"
                  >
                    <BsThreeDots size={25} />
                  </div>
                  {actionButtonListOpen === orderDetail.id &&
                    isActionButtonListOpen && (
                      <div className="absolute z-30 bg-white -ml-32 mt-2 w-36 shadow-2xl border border-indigo-100 rounded-sm">
                        <ul>
                          {orderDetailArray.map((item) => (
                            <li
                              key={item.id}
                              onClick={() => setIsActionButtonListOpen(false)}
                              className="px-4 py-1 text-base cursor-pointer font-medium text-slate-600 hover:bg-red-100 border-b capitalize"
                            >
                              {item.status}
                            </li>
                          ))}
                          <li
                            onClick={() => setIsActionButtonListOpen(false)}
                            className="px-4 py-1 text-base cursor-pointer font-medium text-red-500 hover:bg-red-100 "
                          >
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
