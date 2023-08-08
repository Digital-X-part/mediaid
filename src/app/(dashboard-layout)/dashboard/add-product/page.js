import AddProductsForm from "@/components/addProductsForm/addProductsForm";
import Link from "next/link";


export const metadata = {
  title: "Add product | Mediaid BD",
};


const AddProduct = () => {
  return (
    <div>
      <div className="text-sm breadcrumbs mb-2">
        <ul>
          <li>
            <Link href="/dashboard">DashBoard</Link>
          </li>
          <li>Add Product</li>
        </ul>
      </div>
      <div className="shadow-xl rounded-md">
        <p className="mb-4 font-semibold text-neutral-500 text-opacity-90 bg-red-100 p-2 rounded-t-md">
          Basic Information
        </p>
        <AddProductsForm />
      </div>
    </div>
  );
};

export default AddProduct;
