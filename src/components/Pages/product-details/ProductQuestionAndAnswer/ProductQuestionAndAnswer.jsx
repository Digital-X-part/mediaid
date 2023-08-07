import Image from "next/image";
import React from "react";
import { BiLike, BiSort } from "react-icons/bi";
import { BsFillStarFill } from "react-icons/bs";
import { CiFilter } from "react-icons/ci";
import { GoShieldCheck } from "react-icons/go";
import Rating from "react-rating";

const ProductQuestionAndAnswer = () => {
  return (
    <div className="border mt-2">
      <div className="flex items-center justify-between p-2 border-b">
        <p>Product Reviews</p>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 border-l-2 px-1 ">
            <BiSort />
            <p>
              Sort: <span className="font-medium">Relevance</span>
            </p>
          </div>
          <div className="flex items-center gap-1 border-l-2 px-1">
            <CiFilter />
            <p>
              Filter: <span className="font-medium">All star</span>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6">
        {[1, 2].map((reviewItem) => (
          <div key={reviewItem} className="border-t p-2">
            <div className="flex items-start justify-between ">
              <div>
                <Rating
                  placeholderRating={2.5}
                  emptySymbol={<BsFillStarFill color="#EFF0F5" size={18} />}
                  placeholderSymbol={
                    <BsFillStarFill color="#FACA51" size={18} />
                  }
                  readonly
                />
                <div className="flex items-center gap-2">
                  <p className="text-sm text-slate-400">
                    by
                    <span className="font-medium text-neutral-500 pl-0.5">
                      Munim Rahman
                    </span>
                  </p>
                  <GoShieldCheck color="green" />
                  <p className="text-sm text-green-500">Verified Purchase</p>
                </div>
              </div>
              <p className="text-sm text-neutral-500">2 weeks ago</p>
            </div>
            <div className="mt-2">
              <p>
                সেলার কে সাদা দিতে বলা হয়েছিল, হলুদ দিয়েছে! খুবই ঠুনকো একটা
                জিনিস। অতিমুল্যায়িত করা! এর দাম আরো অনেক কম হওয়া উচিত। ব্রাশ
                খাপে খাপে খুব শক্ত ভাবে বসে না। তাই পড়ে যাওয়ার আশংকা থেকে যায়।
                আঠাটা ভাল। টাইলসের সাথে শক্ত ভাবে আটকে থাকে।
              </p>
              <div className="flex items-center gap-2 my-1">
                <Image
                  alt=""
                  src={
                    "https://sg-test-11.slatic.net/other/roc/630ce39adfdcd8cf7e58e1145883d885.jpg_720x720q80.jpg_.webp_500x500.jpg_.webp"
                  }
                  width={150}
                  height={200}
                  className="max-w-[150px] max-h-[200px] rounded-md"
                />
                <Image
                  alt=""
                  src={
                    "https://sg-test-11.slatic.net/other/roc/9048a096440de8329c5c484b25bf89a3.jpg_720x720q80.jpg_.webp_500x500.jpg_.webp"
                  }
                  width={150}
                  height={200}
                  className="max-w-[150px] max-h-[200px] rounded-md"
                />
              </div>
              <p className="py-2 ">
                <BiLike size={25} className="cursor-pointer" />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductQuestionAndAnswer;
