import Image from "next/image";
import Link from "next/link";
import { BsCart } from "react-icons/bs";
import { FiEye, FiHeart } from "react-icons/fi";

const RelatedProducts = () => {
  const products = [1,2,3,4,5,6,7,8,9]
  return (
    <>
      <div className="border md:mx-auto mx-2 md:my-6 my-4  px-4 py-4  ">
        <h2 className="font-semibold text-lg">
          Related Products
        </h2>

        {/* product card  */}
        <div className="grid grid-cols-2 lg:grid-cols-3  ">
          {products.map((product) => (
            <Link
            key={product}
            href="/product-details"
            className="bg-white rounded-sm shadow-sm p-1 my-2 mx-1 border">
            <Image
              src="https://images.unsplash.com/photo-1562243061-204550d8a2c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              alt=""
              width={200}
              height={200}
              className="object-cover w-full h-32 rounded-sm"
            />
            <div className="flex items-center justify-center gap-3 my-2">
              <button className="bg-yellow-500 p-1 rounded-full hover:bg-slate-700 duration-300">
                <FiEye className="text-lg text-white" />
              </button>
              <button className="bg-yellow-500 p-1 rounded-full hover:bg-slate-700 duration-300">
                <FiHeart className="text-lg text-white" />
              </button>
              <button className="bg-yellow-500 p-1 rounded-full hover:bg-slate-700 duration-300">
                <BsCart className="text-lg text-white" />
              </button>
            </div>
            <div>
              <h4 className="text-[12px] mt-1 tracking-wide">
                {"elaOne 30 mg".length > 20
                  ? `elaOne 30 mg`.slice(0, 20) + "..."
                  : "elaOne 30 mg"}
              </h4>
              <div className="flex justify-between items-center">
                <div>
                  <del className="text-xs font-mono text-gray-400">$454</del>{" "}
                  <span className="font-mono text-yellow-500 font-semibold">
                    $299
                  </span>
                </div>
                
              </div>
            </div>
          </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;
