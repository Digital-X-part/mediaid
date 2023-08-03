"use client";

import ProductListRow from "./productListRow/productListRow";
import { useForm } from "react-hook-form";
import { useState } from "react";

const ProductListTable = () => {
  const [editProduct, setEditProduct] = useState({});
  const [productStatus, setProductStatus] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productSellingType, setProductSellingType] = useState("");
  const [productSubCategory, setProductSubCategory] = useState("");
  const [allTags, setAllTags] = useState("");
  const [productHighlights, setProductHighlights] = useState("");
  // handle edit product
  const handleEditProduct = (product) => {
    setEditProduct(product);
    setProductStatus(product.productStatus);
    setProductCategory(product.category);
    setProductSubCategory(product.subCategory);
    setAllTags(product.tags.join(", "));
    setProductHighlights(product.highlights.join(", "));
    setProductSellingType(product.sellingType);
    const modal = document.getElementById(`edit_product_modal_1`);
    modal.showModal();
  };
  // handle radio change
  const handleRadioChange = (event) => {
    const selectedValue = event.target.id;
    switch (selectedValue) {
      case "active":
        setProductStatus("active");
        break;
      case "inactive":
        setProductStatus("inactive");
        break;
      case "starUser":
        setProductStatus("starUser");
        break;
      default:
        break;
    }
  };
  console.log(editProduct);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const {
      name,
      description,
      prev,
      present,
      availableStock,
      tags,
      highlights,
      sellingType,
    } = data;
    const updatedProduct = {
      _id: editProduct._id,
      _v: editProduct._v,
      name: name === "" ? editProduct.name : name,
      brandName: name === "" ? editProduct.brandName : name,
      createdAt: editProduct.createdAt,
      endDate: editProduct.endDate,
      productImageUrls: editProduct.productImageUrls,
      productAddedBy: editProduct.productAddedBy,
      rating: editProduct.rating,
      sku: editProduct.sku,
      startDate: editProduct.startDate,
      totalSales: editProduct.totalSales,
      sellingType: sellingType === "" ? editProduct.sellingType : sellingType,
      updatedAt: new Date().toLocaleString(),
      description: description === "" ? editProduct.description : description,
      price: {
        prev:
          prev === "" ? parseFloat(editProduct.price.prev) : parseFloat(prev),
        present:
          present === ""
            ? parseFloat(editProduct.price.present)
            : parseFloat(present),
      },
      availableStock:
        availableStock === ""
          ? editProduct.availableStock
          : parseInt(availableStock),
      tags: tags === "" ? editProduct.tags : tags?.split(", "),
      highlights:
        highlights === "" ? editProduct.highlights : highlights?.split(", "),
      productStatus,
      category: productCategory,
      subCategory: productSubCategory,
    };
  };
  return (
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
          <ProductListRow handleEditProduct={handleEditProduct} />
        </tbody>
      </table>
    </div>
  );
};

export default ProductListTable;
