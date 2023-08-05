import ProductDescription from "@/components/Pages/product-details/ProductDescription/ProductDescription";
import ProductInfo from "@/components/Pages/product-details/ProductInfo/ProductInfo";
import axiosInstance from "@/utility/axiosInstance";
import Image from "next/image";

export const metadata = {
  title: `Product Details | ${product?.name}`,
};

const ProductDetails = async ({ params }) => {
  const data = await axiosInstance.get(`/products/${params.id}`);
  const product = data?.data?.product;

  return (
    <div className="md:ml-14">
      <div className="flex flex-wrap justify-between gap-3 gap-y-3">
        {product?.imagesUrls?.map((image) => (
          <Image key={image} src={image} alt="" width={400} height={100} />
        ))}
      </div>
      <div className="col-start-3 col-end-6 px-3 md:px-5 lg:px-0 mt-5 lg:mt-0">
        <ProductInfo product={product} />
        <ProductDescription product={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
