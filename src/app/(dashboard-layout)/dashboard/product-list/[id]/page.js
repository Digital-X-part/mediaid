import ProductDescription from "@/components/Pages/product-details/ProductDescription/ProductDescription";
import ProductInfo from "@/components/Pages/product-details/ProductInfo/ProductInfo";
import axiosInstance from "@/utility/axiosInstance";
import Image from "next/image";

const ProductDetails = async ({ params }) => {
  const data = await axiosInstance.get(`/products/${params.id}`);
  const product = data?.data?.product;
  
  return  (
    <div className="md:ml-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mb-2">
        {product?.imagesUrls.map((image) => (
          <Image key={image} src={image} alt="" width={500} height={100} />
        ))}
      </div>
      <div className="col-start-3 col-end-6 px-3 md:px-5 lg:px-0 mt-5 lg:mt-0">
        <ProductInfo product={product} />
        <ProductDescription product={product}/>
      </div>
    </div>
  );
};

export default ProductDetails;
