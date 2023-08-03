import OrderListTable from "@/components/Pages/Dashboard/orderList/orderListTable";
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
        <table className="table table-zebra ">
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
      </div>
    </div>
  );
};

export default OrderList;
