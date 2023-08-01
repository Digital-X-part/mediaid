"use client";

import { MdDone } from "react-icons/md";
import { TbReload } from "react-icons/tb";
import { AiOutlineStop } from "react-icons/ai";
import { TbCurrencyTaka } from "react-icons/tb";
import { CgMenuMotion } from "react-icons/cg";
import { BsThreeDots } from "react-icons/bs";
import moment from "moment/moment";
import Link from "next/link";
import useAllOrders from "@/hooks/useAllOrders";

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

const OrderListTable = () => {
  const { orders, isOrdersLoading, isOrdersError } = useAllOrders(); // remaining => mutateOrders

  if (isOrdersLoading) {
    return <tr>loading...</tr>;
  }
  if (isOrdersError) {
    return <tr>error</tr>;
  }

  return (
    <>
      {orders?.order?.map((orderDetail) => (
        <tr key={orderDetail?._id}>
          <td>
            <div className="flex flex-col">
              <div className="p-0 text-violet-500 text-sm font-bold">
                <Link
                  href={`/dashboard/order-list/${orderDetail?._id}`}
                  className="text-blue-500 hover:underline"
                >
                  # {orderDetail?.orderNumber}
                </Link>
                <span className="text-gray-400 font-normal"> by</span>{" "}
                {orderDetail?.fullName}
              </div>
              <div className="p-0 font-semibold text-blue-500 ">
                {orderDetail?.email}
              </div>
            </div>
          </td>
          <td className="text-sm font-roboto text-blue-500 tracking-wider">
            {moment(orderDetail?.orderTime).format("LLL")}
          </td>
          <td className="text-sm font-roboto text-blue-500 tracking-wider">
            {orderDetail?.orderNumber}
          </td>
          <td className="text-sm font-roboto text-blue-500 tracking-wider">
            {orderDetail?.transactionId}
          </td>
          <td className="text-xs font-roboto text-blue-500 tracking-wider">
            {orderDetail?.shipTo?.district} ,{orderDetail?.shipTo?.area} ,
            {orderDetail?.shipTo?.location} ,
            <span className="font-bold">
              {orderDetail?.shipTo?.addressType}
            </span>
          </td>
          {orderDetail?.status === "Completed" && (
            <td>
              <div className="flex items-center gap-x-1 bg-[#CCF6E4] text-[#00864e] rounded-lg tracking-wide px-2 py-1 font-bold">
                <p>Completed </p>
                <MdDone size={15} color="#00864e" />
              </div>
            </td>
          )}

          {orderDetail?.status === "Processing" && (
            <td>
              <div className="flex items-center gap-1 bg-[#d5e5fa] text-[#1c4f93] rounded-lg tracking-wide px-2 py-1 font-bold">
                <p>Processing </p>
                <TbReload size={15} color="#1c4f93" />
              </div>
            </td>
          )}
          {orderDetail?.status === "Pending" && (
            <td>
              <div className="flex items-center gap-1 bg-[#fde6d8] text-[#9d5228] rounded-lg tracking-wide px-2 py-1 font-bold">
                <p>Pending </p>
                <CgMenuMotion size={15} color="#00864e" />
              </div>
            </td>
          )}
          {orderDetail?.status === "OnHold" && (
            <td>
              <div className="flex items-center gap-x-1 bg-[#E3E6EA] text-[#7d899b] rounded-lg tracking-wide px-2 py-1 font-bold">
                <p>On Hold </p>
                <AiOutlineStop size={15} color="#7d899b" />
              </div>
            </td>
          )}

          <td className=" font-roboto font-semibold text-blue-500 ">
            <TbCurrencyTaka size={20} className="inline -mt-1" />
            <span className="text-lg"> {orderDetail?.amount}</span>
          </td>

          <td className="w-6 bg-slate-400">
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="btn m-1">
                <BsThreeDots size={25} /> action
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default OrderListTable;
