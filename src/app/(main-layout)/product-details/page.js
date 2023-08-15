import ImageBanner from "@/components/Pages/product-details/ImageBanner/ImageBanner";
import ProductDescription from "@/components/Pages/product-details/ProductDescription/ProductDescription";
import ProductInfo from "@/components/Pages/product-details/ProductInfo/ProductInfo";
import ProductQuestionAndAnswer from "@/components/Pages/product-details/ProductQuestionAndAnswer/ProductQuestionAndAnswer";
import ProductReviews from "@/components/Pages/product-details/ProductReviews/ProductReviews";
import RelatedProducts from "@/components/Pages/product-details/RelatedProducts/RelatedProducts";
import { BiMinus, BiPlus } from "react-icons/bi";
import { TbCurrencyTaka } from "react-icons/tb";
export const metadata = {
  title: "Product Name | Mediaid BD",
  description:
    "An e-commerce build by the doctors, run by the doctors and serve to the doctors",
};

const ProductDetails = () => {

  return (
    <div className="lg:grid grid-cols-5 relative w-full gap-3 mt-3">
      <div className="lg:sticky top-28 lg:h-screen col-start-1 col-end-3 px-3 md:px-5 lg:px-0">
        <ImageBanner />
        <div className="md:flex items-center justify-between hidden sm:inline-block w-full ">
          <div className="flex items-center gap-1 w-2/5">
            <p  className="bg-red-400 btn btn-sm ">
              <BiMinus size={20} color="black" />
            </p>
            <input
              type="number"
              className="w-12 text-center font-bold text-green-500 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              value="232"
              min="1"
            />
            <p className="bg-green-400 btn btn-sm">
              <BiPlus size={20} color="black" />
            </p>
          </div>
          <div className="flex items-center gap-5 md:gap-3 mt-3 md:mt-auto w-3/5">
            <button className="px-4 py-2 bg-slate-100 shadow text-gray-700 hover:bg-indigo-600 duration-300 rounded text-xs sm:text-sm font-semibold hover:text-white w-full">
              Add to Cart
            </button>
            <button className="px-4 py-2 hover:bg-slate-100 shadow hover:text-gray-700 bg-indigo-600 duration-300 rounded text-xs sm:text-sm font-semibold text-white w-full">
              Order Now
            </button>
          </div>
        </div>
        <div>
          <div className="mt-4">
            <h1 className="font-medium text-gray-600">
              VK EMPORIUM Doll House Tent Light Weight , Water and Fire Proof
              Doll House Tent (Pink)
            </h1>
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center">
                  <TbCurrencyTaka size={24} />
                  <p className="text-2xl font-bold">470</p>
                </div>
                <div className="flex items-center text-gray-400">
                  <TbCurrencyTaka color="gray" />
                  <del>1999</del>
                </div>
                <span className="text-green-500 font-medium">76% off</span>
              </div>
              <div className="flex gap-2 mt-1 items-center">
                <p className="bg-green-600 w-fit px-1.5 text-white rounded-md ">
                  4★
                </p>
                <p className="text-gray-500">637 Ratings & 70 Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-start-3 col-end-6 px-3 md:px-5 lg:px-0 mt-5 lg:mt-0">
        <ProductInfo />
        <ProductDescription />
        <ProductReviews />
        <ProductQuestionAndAnswer />
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

export default ProductDetails;
