'use client'
import Image from "next/image";
import OrderedProductTable from "./OrderedProductTable";
import { useOrderFromUser } from "@/hooks/useAllOrders";
import moment from "moment";


const OrderDetails = ({ params }) => {
  const { orders, isOrdersLoading, isOrdersError } = useOrderFromUser(
    params.id
  ); // remaining => mutateOrders
  const orderDetails = orders?.order;
  console.log(orderDetails);

    if (isOrdersLoading) {
      return <span className="loading loading-ring loading-lg"></span>;
    }
    if (isOrdersError) {
      return <tr>error</tr>;
    }
  return (
    <div className="w-full min-h-screen p-2">
      <div className="h-fit  w-full bg-slate-50 rounded p-3 shadow-md">
        <h1 className="text-base md:text-xl font-semibold text-gray-700">
          Order Details: # {orderDetails?.orderNumber}
        </h1>
        <p className="text-xs md:text-sm text-slate-500">
          {moment(orderDetails?.orderTime).format("LLL")}
        </p>
        <div className="text-base md:text-lg font-semibold text-gray-600 mt-2 flex items-center gap-1">
          Status:
          <div
            className={`px-2 ${
              orderDetails?.status === "Completed"
                ? "bg-green-300"
                : orderDetails?.status === "Pending"
                ? "bg-pink-300"
                : orderDetails?.status === "On Hold"
                ? "bg-slate-400"
                : ""
            }  bg-opacity-30 rounded-full`}
          >
            <p
              className={`text-xs md:text-sm font-medium ${
                orderDetails?.status === "Completed"
                  ? "text-green-600"
                  : orderDetails?.status === "Pending"
                  ? "text-pink-600"
                  : orderDetails?.status === "On Hold"
                  ? "text-slate-700"
                  : ""
              }`}
            >
              {orderDetails?.status}
            </p>
          </div>
        </div>
      </div>
      <div className="h-fit w-full bg-slate-50 rounded p-3 grid md:grid-cols-3 gap-y-4 md:gap-y-0 mt-4 shadow-md">
        <div className="space-y-1 border-b md:border-0">
          <h1 className="text-base md:text-lg font-semibold text-slate-600">
            Billing Address
          </h1>
          <p className="text-base font-semibold text-gray-600">
            Antony Hopkins
          </p>
          <div className="text-sm text-slate-500">
            <p>
              {" "}
              {orderDetails?.shipTo?.address &&
                orderDetails?.shipTo?.address + ","}
            </p>
            <p>
              {orderDetails?.shipTo?.union} ,{orderDetails?.shipTo?.upazilla} ,
              {orderDetails?.shipTo?.district} ,{orderDetails?.shipTo?.division}{" "}
            </p>
          </div>
          <p className="text-sm">
            Email: <span className="text-blue-500"> {orderDetails?.email}</span>
          </p>
          <p className="text-sm">
            Phone:{" "}
            <span className="text-blue-500">{orderDetails?.shipTo?.phone}</span>
          </p>
        </div>
        <div className="space-y-1 border-b md:border-0">
          <h1 className="text-base md:text-lg font-semibold text-slate-600">
            Shipping Address
          </h1>
          <p className="text-base font-semibold text-gray-600">
            Antony Hopkins
          </p>
          <div className="text-sm text-slate-500">
            <p>
              {" "}
              {orderDetails?.shipTo?.address &&
                orderDetails?.shipTo?.address + ","}
            </p>
            <p>
              {orderDetails?.shipTo?.union} ,{orderDetails?.shipTo?.upazilla} ,
              {orderDetails?.shipTo?.district} ,{orderDetails?.shipTo?.division}{" "}
            </p>
          </div>
          <p className="text-sm">(Free shipping)</p>
        </div>
        <div>
          <h1 className="text-base md:text-lg font-semibold text-slate-600">
            Payment Methods
          </h1>
          <div className="mt-3 flex items-center gap-2">
            <Image
              src={"https://i.ibb.co/bRTsSs1/visa.png"}
              alt="paymentIcon"
              width={40}
              height={40}
            ></Image>
            <div className="text-slate-600 text-sm font-semibold">
              <p>Antony Hopkins</p>
              <p>*********647</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-fit  w-full bg-slate-50 rounded p-3 shadow-md mt-4">
        <OrderedProductTable orderDetails={orderDetails?.orderItems} />
      </div>
    </div>
  );
};

export default OrderDetails;
