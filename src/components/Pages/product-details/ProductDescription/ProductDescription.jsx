import { Fragment } from "react";

const ProductDescription = ({ product }) => {
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

        <div
          className={
            "pb-8 pt-0  text-base leading-normal mt-3 text-gray-600 "
          }
          id="sect">
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
            <p className=" text-base lg:leading-tight leading-normal text-gray-600 ">
              {product?.description}
              Digital ECG Machine 1201 is AN cardiograph checking physiological
              operate by recording activity wave shape of heart organic
              phenomenon, it will give basic info for diagnosing and treatment
              of the many heart diseases, analyze and grasp every cardiac
              arrhythmia, diagnose several cardiovascular diseases, that helps
              recognize the influence to the heart muscle arising from the
              turbulence of some medication and solution and acid-base
              imbalance, therefore, ECG takes an important part in heart disease
              check. Digital ECG Machine 1201 is a full-digital and
              high-performance 12-channel electrocardiograph which prints by the
              thermal printing system, fashion design, it’s easy to carry, and
              it is applicable for use in hospitals, ordinary lab, clinic and
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
