import ProductListTable from "@/components/Pages/Dashboard/ProductList/ProductListTable";
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
      <ProductListTable></ProductListTable>
    </div>
  );
};

export default ProductList;
