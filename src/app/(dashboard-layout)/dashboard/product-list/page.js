import ProductListRow from "@/components/Pages/Dashboard/ProductList/productListRow/productListRow";
import Link from "next/link";
import React from "react";
const ProductList = async () => {
  return (
    <div>
      <div className="text-sm breadcrumbs ">
        <ul>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>Add Product</li>
        </ul>
      </div>
      <div className="overflow-x-auto bg-slate-200 ">
        <table className="table table-zebra table-sm md:table-md lg:tab-lg">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Product Details</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>SKU</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <ProductListRow />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
