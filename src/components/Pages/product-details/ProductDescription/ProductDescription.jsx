"use client";
import { useState } from "react";

const ProductDescription = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="border-2 rounded-xl shadow-md shadow-indigo-200 md:mx-auto mx-2 md:my-6 my-4  px-6 py-4 mt-7 ">
        {/* details btn  */}
        <div
          onClick={() => setShow(!show)}
          className="flex justify-between items-center cursor-pointer "
        >
          <p className="text-base hover:bg-blue-50  font-bold leading-4 text-gray-800 rounded-2xl border  border-indigo-700 p-2">
            All Details
          </p>
          <button
            className=" md:mr-10 p-2
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
            aria-label="show or hide"
          >
            <svg
              className={"transform " + (show ? "rotate-180" : "rotate-0")}
              width="16"
              height="10"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 1L5 5L1 1"
                stroke="#4B5563"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        {/* details section  */}
        <div
          className={
            "pb-8 pt-0  text-base leading-normal md:mx-12 mt-4 text-gray-600 " +
            (show ? "block" : "hidden")
          }
          id="sect"
        >
          <h2 className="font-bold my-4 md:my-6 text-2xl">
            Products summery and specification
          </h2>
          <div className="border rounded-xl  md:my-4 my-4  px-6 py-4 mt-10 ">
            <h3 className="font-bold my-4 md:my-6 ">Summary :</h3>
            <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">
              It is a long established fact that a reader will be distracted by
              thereadable content of a page when looking at its layout. The
              point of usingLorem Ipsum is that it has a more-or-less normal
              distribution of letters. It is a long established fact that a
              reader will be distracted by thereadable content of a page when
              looking at its layout.
              <br />
              <br /> The point of usingLorem Ipsum is that it has a more-or-less
              normal distribution of letters. It is a long established fact that
              a reader will be distracted by thereadable content of a page when
              looking at its layout. The point of usingLorem Ipsum is that it
              has a more-or-less normal distribution of letters.
            </p>
          </div>

          <div className="border rounded-xl  md:mx-auto mx-2 md:my-4 my-4  px-6 md:py-4 py-2 mt-7 ">
            <h3 className="font-bold my-4 md:my-6 ">Specification :</h3>
            <p className="text-base leading-4 mt-7 text-gray-600">
              Product Code: 8BN321AF2IF0NYA
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600">
              Length: 13.2 inches
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600">
              Height: 10 inches
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600">
              Depth: 5.1 inches
            </p>
            <p className="md:w-96 text-base leading-normal text-gray-600 mt-4">
              Composition: 100% calf leather, inside: 100% lamb leather
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
