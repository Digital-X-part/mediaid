import CustomersTable from "@/components/Pages/Dashboard/Customers/CustomersTable";
import { FaPlus, FaExternalLinkAlt, FaFilter } from "react-icons/fa";

export const metadata = {
  title: "All User | Mediaid BD",
};
const users = [
  {
    image: "https://i.ibb.co/54ctFnB/031-1-1.jpg",
    name: "Nahid Ahmed",
    email: "nahidahmedsd47@gmail.com",
    phone: "+1 123 456 7890",
    address: "123, Main Street, California, CA-12345",
    joined: new Date().toLocaleDateString(),
  },
  {
    image: "https://i.ibb.co/54ctFnB/031-1-1.jpg",
    name: "Nahid Ahmed",
    email: "nahidahmedsd47@gmail.com",
    phone: "+1 123 456 7890",
    address: "123, Main Street, California, CA-12345",
    joined: new Date().toLocaleDateString(),
  },
  {
    image: "https://i.ibb.co/54ctFnB/031-1-1.jpg",
    name: "Nahid Ahmed",
    email: "nahidahmedsd47@gmail.com",
    phone: "+1 123 456 7890",
    address: "123, Main Street, California, CA-12345",
    joined: new Date().toLocaleDateString(),
  },
  {
    image: "https://i.ibb.co/54ctFnB/031-1-1.jpg",
    name: "Nahid Ahmed",
    email: "nahidahmedsd47@gmail.com",
    phone: "+1 123 456 7890",
    address: "123, Main Street, California, CA-12345",
    joined: new Date().toLocaleDateString(),
  },
];

const Customers = () => {
  return (
    <div>
      <div className="text-sm breadcrumbs ">
        <ul>
          <li>
            <a>Dashboard</a>
          </li>
          <li>Customers</li>
        </ul>
      </div>
      <div className="w-full min-h-screen p-2">
        <div className="h-fit w-full bg-slate-50 rounded p-3 shadow-md">
          <div className="flex items-center justify-between">
            <h1 className="text-base md:text-xl font-semibold text-gray-700">
              Customers
            </h1>
            <div className="flex items-center gap-2">
              <button className="text-sm font-medium text-gray-600 px-3  py-1 border rounded-md flex items-center gap-1 hover:text-white hover:bg-slate-500 duration-200">
                <FaPlus className="w-3 h-3" />
                New
              </button>
              <button className="text-sm font-medium text-gray-600 px-3  py-1 border rounded-md flex items-center gap-1 hover:text-white hover:bg-slate-500 duration-200">
                <FaFilter className="w-3 h-3" />
                Filter
              </button>
              <button className="text-sm font-medium text-gray-600 px-3  py-1 border rounded-md flex items-center gap-1 hover:text-white hover:bg-slate-500 duration-200">
                <FaExternalLinkAlt className="w-3 h-3" />
                Export
              </button>
            </div>
          </div>
          <div className="mt-4">
            <CustomersTable users={users} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
