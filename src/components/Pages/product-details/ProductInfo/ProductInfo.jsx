import { BiInfoCircle } from "react-icons/bi";
import { TbCurrencyTaka } from "react-icons/tb";

const ProductInfo = ({ product }) => {
  return (
    <div>
      <h1 className="font-medium text-gray-600">
        VK EMPORIUM Doll House Tent Light Weight , Water and Fire Proof Doll
        House Tent (Pink)
      </h1>
      <div className="flex gap-2 mt-1 items-center">
        <p className="bg-green-600 w-fit px-1.5 text-white rounded-md ">4★</p>
        <p className="text-gray-500">637 Ratings & 70 Reviews</p>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <div className="flex items-center">
          <TbCurrencyTaka size={24} />
          <p className="text-2xl font-bold">470</p>
        </div>
        <div className="flex items-center text-gray-400">
          <TbCurrencyTaka color="gray" />
          <del>1999</del>
        </div>
        <span className="text-green-500 font-medium">76% off</span>
      </div>
    </div>
  );
};

export default ProductInfo;
