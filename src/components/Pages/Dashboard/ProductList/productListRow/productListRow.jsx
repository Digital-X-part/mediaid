"use client";

import useAllProducts from "@/hooks/useAllProducts";
import axiosInstance from "@/utility/axiosInstance";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import Rating from "react-rating";
import swal from "sweetalert";

const ProductListRow = ({handleEditProduct}) => {
  /* const data = await axiosInstance.get("/products");
  const productsObj = data.data;
  // console.log(productsObj.products);
*/
  const { products, isProductsError, isProductsLoading, mutateProducts } =
    useAllProducts();
  
  const handleDelete = async (id) => {
    const isConfirm = await swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    });

    if (!isConfirm) return;

    const { data } = await axiosInstance.delete(`/products/${id}`);
    if (data.success) {
      swal("Poof! Your product has been deleted!", {
        icon: "success",
        timer: 2000,
      });

      mutateProducts();
    }
  };

  if (isProductsLoading) {
    return <tr>loading...</tr>;
  }
  if (isProductsError) {
    return <tr>error</tr>;
  }
  // console.log(products?.products);
  return (
    <>
      {products?.products?.map((product, index) => (
        <tr key={product?._id}>
          <th>{index + 1}</th>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <Image
                    width={70}
                    height={70}
                    src={product?.imagesUrls[0]}
                    alt="Avatar Tailwind CSS Component"
                    className="object-cover"
                  />
                </div>
              </div>
              <Link
                href={`/dashboard/product-list/${product?._id}`}
                className="font-semibold text-neutral-600 hover:text-blue-500"
              >
                {product?.name}
              </Link>
            </div>
          </td>
          <td>
            <p className="w-fit bg-slate-300 p-1 rounded-md text-neutral-700 text-xs tracking-wide">
              {product?.category}
            </p>
          </td>
          <td className="text-xl font-bold text-blue-500">
            <span className="text-base line-through text-red-600">
              {" "}
              ৳ {product?.price?.prev}
            </span>{" "}
            <span className="text-xl">৳{product?.price?.present}</span>
          </td>
          <td className="font-bold text-yellow-500">
            {product?.availableStock}
          </td>
          <td className="font-semibold text-violet-500">{product?.sku}</td>
          <td>
            {product?.rating && (
              <Rating
                readonly
                placeholderRating={4}
                placeholderSymbol={<AiTwotoneStar color="red" size={18} />}
                emptySymbol={<AiOutlineStar size={18} />}
              />
            )}
          </td>
          <th>
            <Link
              href={`/dashboard/product-list/${product?._id}`}
              className="btn btn-warning btn-xs hover:bg-transparent"
            >
              details
            </Link>
            <button
              className="btn btn-success btn-xs ml-2 hover:bg-inherit"
              onClick={() => handleEditProduct(product)}
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(product?._id)}
              className="btn btn-error btn-xs ml-2 hover:bg-inherit"
            >
              Delete
            </button>
          </th>
          {/* You can open the modal using method */}
        </tr>
      ))}
    </>
  );
};

export default ProductListRow;
