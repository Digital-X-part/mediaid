"use client";
import { Fragment, useState } from "react";

const ProductDescription = ({ product }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* highlight part */}
      <div className="border h-fit p-2 mt-3 md:p-5 mx-2 md:mx-0">
        <p className="font-semibold text-sm md:text-base">Highlight:</p>
        <ul className="list-disc pl-7 text-medium text-sm md:text-base">
          {product?.highlights?.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>

      <div className="border  md:mx-auto mx-2 md:my-3  mb-4  px-6 py-4 ">
        {/* details btn  */}
        <div
          onClick={() => setShow(!show)}
          className="flex justify-between items-center cursor-pointer "
        >
          <p className="text-base hover:bg-blue-50  font-bold leading-4 text-gray-800 rounded border  border-indigo-700 px-3 py-2">
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
            "pb-8 pt-0  text-base leading-normal mt-3 text-gray-600 " +
            (show ? "block" : "hidden")
          }
          id="sect"
        >
          <h2 className="font-bold text-base  md:text-xl">
            Products summery and specification
          </h2>
          <div>
            <h3 className="font-bold mt-3 ">Specification :</h3>
            <p className="text-base leading-4 mt-2 text-gray-600">
              Product Code: {product?.sku}
            </p>
            <p className="text-base leading-4 mt-2 text-gray-600">
              category: {product?.category}
            </p>
            <p className="text-base leading-4 mt-2 text-gray-600">
              tags:{" "}
              {product?.tags?.map((tag, index) => (
                <Fragment key={index}>
                  <span className="text-sm py-px px-1 rounded bg-slate-300">
                    {tag}
                  </span>
                  ,{" "}
                </Fragment>
              ))}
            </p>
            <p className="text-base leading-4 mt-2 text-gray-600">
              Brand :{product?.brandName}
            </p>
          </div>
          <div className=" ">
            <h3 className="font-bold mt-3 mb-2 ">Summary :</h3>
            <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 ">
              {product?.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
