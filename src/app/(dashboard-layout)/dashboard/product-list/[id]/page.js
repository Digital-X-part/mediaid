"use client";
import ProductDescription from "@/components/Pages/product-details/ProductDescription/ProductDescription";
import ProductInfo from "@/components/Pages/product-details/ProductInfo/ProductInfo";
import Image from "next/image";
const productImage = [
  "https://i.ibb.co/rcWCcNj/03.png",
  "https://i.ibb.co/Hzc2mHv/04.jpg",
  "https://i.ibb.co/rcWCcNj/03.png",
  "https://i.ibb.co/Hzc2mHv/04.jpg",
];

const ProductDetails = () => {
  return (
    <div className="md:ml-14">
      <div className="flex flex-wrap justify-between gap-3 gap-y-3">
        {productImage.map((image) => (
          <Image key={image} src={image} alt="" width={400} height={100}   />
        ))}
      </div>
      <div className="col-start-3 col-end-6 px-3 md:px-5 lg:px-0 mt-5 lg:mt-0">
        <ProductInfo />
        <ProductDescription />
      </div>
    </div>
  );
};

export default ProductDetails;
