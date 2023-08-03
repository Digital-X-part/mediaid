import OrderDetails from "@/components/Pages/Dashboard/OrderDetails/OrderDetails";

export const metadata = {
  title: "Order Details | Nahid Ahmed",
};

const OrderDetailsPage = ({params}) => {
  return (
    <div>
      <div className="text-sm breadcrumbs md:ml-4">
        <ul>
          <li>
            <a>Dashboard</a>
          </li>
          <li>Order Details</li>
        </ul>
      </div>

      <OrderDetails params={params} />
    </div>
  );
};

export default OrderDetailsPage;
