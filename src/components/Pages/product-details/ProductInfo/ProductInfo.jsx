"use client"
import Image from "next/image";
import Rating from "react-rating";
import { AiTwotoneStar } from "react-icons/ai";

const ProductInfo = () => {
    return (
      <div className="border rounded-xl shadow-md shadow-indigo-200 h-fit p-2 md:p-5 mx-2  md:mx-0">
        <div className="flex items-center justify-between text-sm md:text-base font-medium">
          <p>Color: Black</p>
          <p>Available Color: 5</p>
        </div>
        <div className="flex items-center my-2 gap-2 w-fit mx-auto md:mx-0 md:gap-4 flex-wrap">
          <Image
            src="https://media.istockphoto.com/id/1323058070/vector/stethoscope-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=xkuaTijfIravczpI1xdT0Qtw7zl5Vre56ksolKs1u6k="
            alt="detailImg1"
            width={80}
            height={80}
            className="border w-14 md:w-20 h-auto"
          ></Image>
          <Image
            src="https://media.istockphoto.com/id/1148809261/vector/stethoscope-vector-illustration-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=I4lpbCkwsCyel0UKrj08ylP4EqEPyja8BylEfLBEUEQ="
            alt="detailImg1"
            width={80}
            height={80}
            className="border w-14 md:w-20 h-auto"
          ></Image>
          <Image
            src="https://media.istockphoto.com/id/656607970/photo/single-stethoscope.jpg?s=612x612&w=0&k=20&c=dqKF2cYZeKGvG4Y2QawKhSZM9ijJJE90PybqVqM-Seo="
            alt="detailImg1"
            width={80}
            height={80}
            className="border w-14 md:w-20 h-auto"
          ></Image>
          <Image
            src="https://media.istockphoto.com/id/1214279538/vector/stethoscope-isolated-on-white-top-view-medical-tool-vector-eps-10-illustration.jpg?s=612x612&w=0&k=20&c=7je5YGp1-hdjihLn5zAoq5ioDnNTrMT3LTMUXz7ijfQ="
            alt="detailImg1"
            width={80}
            height={80}
            className="border w-14 md:w-20 h-auto"
          ></Image>
          <Image
            src="https://media.istockphoto.com/id/1019234134/vector/stethoscope-mockup-realistic-style.jpg?s=612x612&w=0&k=20&c=tR-PmYpnSJtCCHBs-Li5Rxs3WoMmedXDpUzY2XXbzA4="
            alt="detailImg1"
            width={80}
            height={80}
            className="border w-14 md:w-20 h-auto"
          ></Image>
        </div>
        <div>
          <p className="text-sm md:text-base">
            <span className="font-semibold">Michigan Suspends</span> doctor
            license for assault conviction.
          </p>
          <div className="flex mt-1 gap-1">
            <Rating
              placeholderRating={4.5}
              emptySymbol={
                <AiTwotoneStar className="text-sm md:text-[20px] text-gray-200" />
              }
              placeholderSymbol={
                <AiTwotoneStar className="text-sm md:text-[20px] text-yellow-500" />
              }
              readonly
            />
            <p className="text-yellow-500 text-sm md:text-lg">(47)</p>
          </div>
          <div className="mb-2">
            <p className="text-indigo-600 font-medium">
              80% off <del className="text-gray-600">$999</del> $199
            </p>
          </div>
          <div className="mb-3 hidden md:inline-block ">
            <p className="font-semibold text-sm md:text-base">Highlight:</p>
            <ul className="list-disc pl-7 text-medium text-sm md:text-base">
              <li>Water Proof: Yes</li>
              <li>Shape: Round</li>
              <li>Country of Origin: Japan</li>
            </ul>
          </div>
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
      </div>
    );
};

export default ProductInfo;