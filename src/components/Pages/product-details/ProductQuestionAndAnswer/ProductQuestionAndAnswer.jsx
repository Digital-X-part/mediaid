import Image from "next/image";
import React from "react";
import { useState } from "react";
import { BiLike, BiSort } from "react-icons/bi";
import { BsFillStarFill } from "react-icons/bs";
import { CiFilter } from "react-icons/ci";
import { GoShieldCheck } from "react-icons/go";
import Rating from "react-rating";
import StarRatings from "react-star-ratings";

const ProductQuestionAndAnswer = () => {

  const [rating, setRating] = useState(0);
  const onSubmit = (data) => {
    const {rating, details } = data;
    const newItem = {
      details,
      rating, // Include the rating value in the newItem object
    };
    console.log(newItem);
    axiosSecure.post("/reviews", newItem).then((data) => {
      console.log("after posting new menu Item", data.data);
      if (data.data.insertedId) {
        // Refetch cart to update the number of items in the cart
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Review added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
   
   
   
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
           
              <p className="py-2 ">
                <BiLike size={25} className="cursor-pointer" />
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="border p-2 flex flex-col items-center">
      <p className="text-3xl uppercase py-4 font-bold mb-12">Rate US</p>
       <div className=" flex flex-col items-center ">
       <StarRatings
          rating={rating}
          starRatedColor="blue"
          changeRating={setRating} // Use setRating directly as the changeRating prop
          numberOfStars={6}
          name="rating"
        />
          <input type="text" placeholder="Type here"  className="input input-bordered input-lg w-full h-56 my-5" />
       </div>

         <div className="flex justify-center">
          <input
            className="btn btn-warning "
            type="submit"
            value="Send Review"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductQuestionAndAnswer;
