import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import Rating from "react-rating";

const ProductReviews = () => {
  return (
    <div className="border p-2">
      <div>
        <h2>
          Rating & Reviews of সিলিকা জেল বাথ তোয়ালে ব্যাক স্ট্রিপ বেল্ট
          বাথরুমের সরঞ্জাম - towel
        </h2>
        <div className="flex items-start justify-between pt-8">
          <div>
            <p className="text-6xl text-neutral-700">
              4.3<span className="text-2xl text-gray-500">/5</span>
            </p>
            <Rating
              className="mt-2"
              placeholderRating={4.3}
              emptySymbol={<BsFillStarFill color="#EFF0F5" size={25} />}
              placeholderSymbol={<BsFillStarFill color="#FACA51" size={25} />}
              readonly
            />
            <p className="text-gray-500">82 Ratings</p>
          </div>
          <div className="flex items-start gap-x-4 pr-10">
            <div className="flex flex-col-reverse ">
              {[1, 2, 3, 4, 5].map((ratingItem) => (
                <Rating
                  key={ratingItem}
                  placeholderRating={ratingItem}
                  emptySymbol={<BsFillStarFill color="#EFF0F5" size={22} />}
                  placeholderSymbol={
                    <BsFillStarFill color="#FACA51" size={22} />
                  }
                  readonly
                />
              ))}
            </div>
            <div className="flex flex-col-reverse mt-1">
              {[2, 3, 0, 26, 51].map((ratingCountItem, index) => (
                <div key={index} className="flex items-start gap-x-2">
                  <progress
                    className="progress progress-info w-40 h-3  mb-[17px]"
                    value={ratingCountItem}
                    max="100"></progress>
                  <p className="-mt-1.5 font-mono text-yellow-500 font-bold">
                    {ratingCountItem}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ProductReviews;
