import ImageBanner from "@/components/Pages/product-details/ImageBanner/ImageBanner";
import ProductDescription from "@/components/Pages/product-details/ProductDescription/ProductDescription";
import ProductInfo from "@/components/Pages/product-details/ProductInfo/ProductInfo";
import RelatedProducts from "@/components/Pages/product-details/RelatedProducts/RelatedProducts";

const page = () => {
  return (
    <div>
      <h1>products details</h1>
      <ImageBanner />
      <ProductInfo />
      <ProductDescription />
      <RelatedProducts />
    </div>
  );
};

export default page;
