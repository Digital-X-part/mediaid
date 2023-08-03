import ImageBanner from "@/components/Pages/product-details/ImageBanner/ImageBanner";
import ProductDescription from "@/components/Pages/product-details/ProductDescription/ProductDescription";
import ProductInfo from "@/components/Pages/product-details/ProductInfo/ProductInfo";
import RelatedProducts from "@/components/Pages/product-details/RelatedProducts/RelatedProducts";
export const metadata = {
  title: "Product Name | Mediaid BD",
  description:
    "An e-commerce build by the doctors, run by the doctors and serve to the doctors",
};

const page = () => {
  return (
    <div className="lg:grid grid-cols-5 relative w-full gap-3 mt-3">
      <div className="lg:sticky top-28 lg:h-screen col-start-1 col-end-3 px-3 md:px-5 lg:px-0">
        <ImageBanner />
        <div className="md:flex items-center justify-between hidden sm:inline-block">
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
      <div className="col-start-3 col-end-6 px-3 md:px-5 lg:px-0 mt-5 lg:mt-0">
        <ProductInfo />
        <ProductDescription />
        <RelatedProducts />
      </div>
      <div className="fixed bottom-[47px] z-[50] h-10 bg-slate-500 w-full grid grid-cols-2 sm:hidden">
      <button className="bg-slate-100 text-gray-700 hover:bg-indigo-600 duration-300 text-sm font-semibold hover:text-white sm:hidden">
                Add to Cart
              </button>
              <button className=" hover:bg-slate-100 hover:text-gray-700 bg-indigo-600 duration-300 text-sm  font-semibold text-white ">
                Order Now
              </button>
      </div>
    </div>
  );
};

export default page;
