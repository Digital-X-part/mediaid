import ImageBanner from "@/components/Pages/product-details/ImageBanner/ImageBanner";
import ProductDescription from "@/components/Pages/product-details/ProductDescription/ProductDescription";
import ProductInfo from "@/components/Pages/product-details/ProductInfo/ProductInfo";
import RelatedProducts from "@/components/Pages/product-details/RelatedProducts/RelatedProducts";

const page = () => {
  return (
    <div className="md:grid grid-cols-5 relative w-full gap-3 mt-3">
      <div className="sticky top-28 h-screen col-start-1 col-end-3">
        <ImageBanner />
        <div className="md:flex items-center justify-between">
            <div
              className="h-8 pl-3 pr-7 w-fit bg-indigo-600 flex items-center justify-center"
              style={{ clipPath: "polygon(0 0, 90% 0, 100% 100%, 0% 100%)" }}
            >
              <p className="text-white text-xs md:text-sm ">
                Lowest Price Science Launch
              </p>
            </div>
            <div className="flex items-center gap-5 md:gap-3 mt-3 md:mt-auto">
              <button className="px-4 py-2 bg-slate-100 shadow text-gray-700 hover:bg-indigo-600 duration-300 rounded text-xs sm:text-sm font-semibold hover:text-white ">
                Add to Cart
              </button>
              <button className="px-4 py-2 hover:bg-slate-100 shadow hover:text-gray-700 bg-indigo-600 duration-300 rounded text-xs sm:text-sm font-semibold text-white ">
                Order Now
              </button>
            </div>
          </div>
      </div>
      <div className="col-start-3 col-end-6">
        <ProductInfo />
        <ProductDescription />
        <RelatedProducts />
      </div>
    </div>
  );
};

export default page;
