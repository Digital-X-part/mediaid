"use client";
import Rating from "react-rating";
import { AiTwotoneStar } from "react-icons/ai";

const ProductInfo = ({ product }) => {
  return (
    <div className="border h-fit p-2 md:p-5 mx-2  md:mx-0">
      <div>
        <h1 className="text-lg font-semibold ">{product?.name}</h1>
        <div className="flex mt-1 gap-1">
          <Rating
            placeholderRating={product?.rating}
            emptySymbol={
              <AiTwotoneStar className="text-xs md:text-[15px] text-gray-200" />
            }
            placeholderSymbol={
              <AiTwotoneStar className="text-xs md:text-[15px] text-yellow-500" />
            }
            readonly
          />

          {/* //todo need to work with rating  */}
          <p className="text-yellow-500 text-xs md:text-sm">(47)</p>
        </div>
        <div className="mb-2">
          <p className="text-indigo-600 font-medium">
            {/* //todo need to work with percent */}
            80% off{" "}
            <del className="text-gray-600 text-sm">
              ${product?.price?.prev}
            </del>{" "}
            ${product?.price?.present}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
