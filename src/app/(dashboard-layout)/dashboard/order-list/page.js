import { OrderTable } from "@/components/Pages/Dashboard/orderList/OrderListTable";
import Link from "next/link";

export const metadata = {
  title: "All Order List | Mediaid BD",
};
const OrderList = () => {
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
        <OrderTable />
      </div>
    </div>
  );
};

export default OrderList;
