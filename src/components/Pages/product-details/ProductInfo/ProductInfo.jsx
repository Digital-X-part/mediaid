"use client"
import Rating from "react-rating";
import { AiTwotoneStar } from "react-icons/ai";

const ProductInfo = () => {
    return (
      <div className="border h-fit p-2 md:p-5 mx-2  md:mx-0">
        <div>
          <h1 className="text-lg font-semibold ">Washable Cotton Face Mask</h1>
          <div className="flex mt-1 gap-1">
            <Rating
              placeholderRating={4.5}
              emptySymbol={
                <AiTwotoneStar className="text-xs md:text-[15px] text-gray-200" />
              }
              placeholderSymbol={
                <AiTwotoneStar className="text-xs md:text-[15px] text-yellow-500" />
              }
              readonly
            />
            <p className="text-yellow-500 text-xs md:text-sm">(47)</p>
          </div>
          <div className="mb-2">
            <p className="text-indigo-600 font-medium">
              80% off <del className="text-gray-600 text-sm">$999</del> $199
            </p>
          </div>
        </div>
      </div>
    );
};

export default ProductInfo;