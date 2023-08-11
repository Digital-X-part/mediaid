"use client";

import { MdDone } from "react-icons/md";
import { TbReload } from "react-icons/tb";
import { AiOutlineStop } from "react-icons/ai";
import { TbCurrencyTaka } from "react-icons/tb";
import { CgMenuMotion } from "react-icons/cg";
import { BsThreeDots } from "react-icons/bs";
import moment from "moment/moment";
import Link from "next/link";
import { useAllOrders } from "@/hooks/useAllOrders";

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

export const OrderTable = () => {
  return (
    <table className="table table-zebra">
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
        <OrderListTable />
      </tbody>
    </table>
  );
};

const OrderListTable = () => {
  const { orders, isOrdersLoading, isOrdersError } = useAllOrders(); // remaining => mutateOrders

  if (isOrdersLoading) {
    return  (
        <tr>
          <td className="loading loading-ring loading-lg"></td>
        </tr>
    )
  }
  if (isOrdersError) {
    return (  <tr>
      <td >Error</td>
    </tr>)
  }
  return (
    <>
      {orders?.order?.map((orderDetail) => (
        <tr key={orderDetail?._id}>
          <td>
            <span className="flex flex-col">
              <span className="p-0 text-violet-500 text-sm font-bold">
                <Link
                  href={`/dashboard/order-list/${orderDetail?._id}`}
                  className="text-blue-500 hover:underline"
                >
                  # {orderDetail?.orderNumber}
                </Link>
              </span>
              <span className="p-0 font-semibold text-blue-500 ">
                {orderDetail?.email}
              </span>
              <span className="text-gray-400 font-normal">
                {" "}
                by {orderDetail?.fullName}
              </span>
            </span>
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
            {orderDetail?.shipTo?.address && orderDetail?.shipTo?.address + ","}{" "}
            {orderDetail?.shipTo?.union} ,{orderDetail?.shipTo?.upazilla} ,
            {orderDetail?.shipTo?.district} ,{orderDetail?.shipTo?.division} ,
            <span className="font-bold">
              {orderDetail?.shipTo?.addressType}
            </span>
          </td>
          {orderDetail?.status === "Completed" && (
            <td>
              <span className="flex items-center gap-x-1 bg-[#CCF6E4] text-[#00864e] rounded-lg tracking-wide px-2 py-1 font-bold">
                <p>Completed </p>
                <MdDone size={15} color="#00864e" />
              </span>
            </td>
          )}
          {orderDetail?.status === "Processing" && (
            <td>
              <span className="flex items-center gap-1 bg-[#d5e5fa] text-[#1c4f93] rounded-lg tracking-wide px-2 py-1 font-bold">
                <p>Processing </p>
                <TbReload size={15} color="#1c4f93" />
              </span>
            </td>
          )}
          {orderDetail?.status === "Pending" && (
            <td>
              <span className="flex items-center gap-1 bg-[#fde6d8] text-[#9d5228] rounded-lg tracking-wide px-2 py-1 font-bold">
                <p>Pending </p>
                <CgMenuMotion size={15} color="#00864e" />
              </span>
            </td>
          )}
          {orderDetail?.status === "OnHold" && (
            <td>
              <span className="flex items-center gap-x-1 bg-[#E3E6EA] text-[#7d899b] rounded-lg tracking-wide px-2 py-1 font-bold">
                <p>On Hold </p>
                <AiOutlineStop size={15} color="#7d899b" />
              </span>
            </td>
          )}

          <td className=" font-roboto font-semibold text-blue-500 ">
            <TbCurrencyTaka size={20} className="inline -mt-1" />
            <span className="text-lg"> {orderDetail?.amount}</span>
          </td>

          <td className="w-6 bg-slate-400">
            <span className="dropdown dropdown-left">
              <label tabIndex={0} className="btn m-1">
                <BsThreeDots size={25} />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  {orderDetailArray?.map((action) => (
                    <button key={action?.id} className="border-b mb-[1px]">
                      {action?.status}
                    </button>
                  ))}
                  <button className="bg-red-600 text-white font-semibold">
                    delete
                  </button>
                </li>
              </ul>
            </span>
          </td>
        </tr>
      ))}
    </>
  );
};

export default OrderListTable;
