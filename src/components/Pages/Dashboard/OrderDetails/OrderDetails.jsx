import Image from "next/image";
import OrderedProductTable from "./OrderedProductTable";

const orderDetails = {
  id: 239847,
  date: new Date().toLocaleString(),
  status: "Completed",
  products: [
    {
      id: 34324,
      name: "Product 1000",
      model: "500ml Bottle - 1pc",
      quantity: 2,
      price: 100,
    },
    {
      id: 34589,
      name: "Product 2",
      model: "500ml Bottle - 1pc",
      quantity: 4,
      price: 85,
    },
    {
      id: 56578,
      name: "Product 3",
      model: "500ml Bottle - 1pc",
      quantity: 1,
      price: 78,
    },
    {
      id: 87654,
      name: "Product 4",
      model: "500ml Bottle - 1pc",
      quantity: 5,
      price: 65,
    },
  ],
};

const OrderDetails = () => {
  return (
    <div className="w-full min-h-screen p-2">
      <div className="h-fit  w-full bg-slate-50 rounded p-3 shadow-md">
        <h1 className="text-base md:text-xl font-semibold text-gray-700">
          Order Details: #{orderDetails.id}
        </h1>
        <p className="text-xs md:text-sm text-slate-500">{orderDetails.date}</p>
        <div className="text-base md:text-lg font-semibold text-gray-600 mt-2 flex items-center gap-1">
          Status:
          <div
            className={`px-2 ${
              orderDetails.status === "Completed"
                ? "bg-green-300"
                : orderDetails.status === "Pending"
                ? "bg-pink-300"
                : orderDetails.status === "On Hold"
                ? "bg-slate-400"
                : ""
            }  bg-opacity-30 rounded-full`}
          >
            <p
              className={`text-xs md:text-sm font-medium ${
                orderDetails.status === "Completed"
                  ? "text-green-600"
                  : orderDetails.status === "Pending"
                  ? "text-pink-600"
                  : orderDetails.status === "On Hold"
                  ? "text-slate-700"
                  : ""
              }`}
            >
              {orderDetails.status}
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
            <p>123, Main Street</p>
            <p>California, CA-12345</p>
          </div>
          <p className="text-sm">
            Email:{" "}
            <span className="text-blue-500">nahidahmedsd47@gmail.com</span>
          </p>
          <p className="text-sm">
            Phone: <span className="text-blue-500">+1 123 456 7890</span>
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
            <p>123, Main Street</p>
            <p>California, CA-12345</p>
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
        <OrderedProductTable orderDetails={orderDetails} />
      </div>
    </div>
  );
};

export default OrderDetails;
