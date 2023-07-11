"use client"
import Image from "next/image";
import Rating from "react-rating";
import { AiTwotoneStar } from "react-icons/ai";

const ProductInfo = () => {
    return (
      <div className="border-8  h-fit p-2">
        <div className="flex items-center justify-between">
          <p>Color: Black</p>
          <p>Available Color: 5</p>
        </div>
        <div className="flex items-center my-2 gap-4">
          <Image src="https://media.istockphoto.com/id/1323058070/vector/stethoscope-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=xkuaTijfIravczpI1xdT0Qtw7zl5Vre56ksolKs1u6k=" alt="detailImg1" width={80} height={80} className="border"></Image>
          <Image src="https://media.istockphoto.com/id/1148809261/vector/stethoscope-vector-illustration-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=I4lpbCkwsCyel0UKrj08ylP4EqEPyja8BylEfLBEUEQ=" alt="detailImg1" width={80} height={80} className="border"></Image>
          <Image src="https://media.istockphoto.com/id/656607970/photo/single-stethoscope.jpg?s=612x612&w=0&k=20&c=dqKF2cYZeKGvG4Y2QawKhSZM9ijJJE90PybqVqM-Seo=" alt="detailImg1" width={80} height={80} className="border"></Image>
          <Image src="https://media.istockphoto.com/id/1214279538/vector/stethoscope-isolated-on-white-top-view-medical-tool-vector-eps-10-illustration.jpg?s=612x612&w=0&k=20&c=7je5YGp1-hdjihLn5zAoq5ioDnNTrMT3LTMUXz7ijfQ=" alt="detailImg1" width={80} height={80} className="border"></Image>
          <Image src="https://media.istockphoto.com/id/1019234134/vector/stethoscope-mockup-realistic-style.jpg?s=612x612&w=0&k=20&c=tR-PmYpnSJtCCHBs-Li5Rxs3WoMmedXDpUzY2XXbzA4=" alt="detailImg1" width={80} height={80} className="border"></Image>
        </div>
        <div>
          <p className=""><span className="font-semibold">Michigan Suspends</span> doctor license for assault conviction.</p>
          <div className="flex mt-1 gap-1">
          <Rating
                  placeholderRating={4.5}
                  emptySymbol={<AiTwotoneStar className="text-[20px] text-gray-200" />}
                  placeholderSymbol={
                    <AiTwotoneStar className="text-[20px] text-yellow-500" />
                  }
                  readonly
                />
                <p className="text-yellow-500">(47)</p>
          </div>
          <div className="mb-2">
            <p className="text-blue-600 font-medium">80% off <del className="text-gray-600">$999</del> $199</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="h-8 pl-3 pr-7 w-fit bg-blue-600 flex items-center justify-center" style={{clipPath: "polygon(0 0, 90% 0, 100% 100%, 0% 100%)"}}>
              <p className="text-white text-xs md:text-sm ">Lowest Price Science Launch</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 bg-slate-100 shadow text-gray-700 hover:bg-blue-600 duration-300 rounded text-sm font-semibold hover:text-white ">Add to Cart</button>
              <button className="px-4 py-2 hover:bg-slate-100 shadow hover:text-gray-700 bg-blue-600 duration-300 rounded text-sm font-semibold text-white ">Order Now</button>
            </div>
          </div>
        {/* highlight part */}
          {/* <div className="my-2">
            <p className="font-semibold ">Highlight:</p>
            <ul className="list-disc pl-7 text-medium">
              <li>Water Proof: Yes</li>
              <li>Shape: Round</li>
              <li>Country of Origin: Japan</li>
            </ul>
          </div> */}
        </div>
      </div>
    );
};

export default ProductInfo;