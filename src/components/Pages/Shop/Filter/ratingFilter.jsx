import { FaRegStar, FaStar } from "react-icons/fa";

const RatingFilter = () => {
    return (
        <div className="py-2 border-b">
            <h1 className="text-sm font-semibold">Short By Rating</h1>
            <div className={`mt-1 space-y-1`}>
                <button className="flex items-center gap-[6px]">
                    <FaStar className="w-[14px] h-[14px] text-yellow-400"></FaStar>
                    <FaStar className="w-[14px] h-[14px] text-yellow-400"></FaStar>
                    <FaStar className="w-[14px] h-[14px] text-yellow-400"></FaStar>
                    <FaStar className="w-[14px] h-[14px] text-yellow-400"></FaStar>
                    <FaStar className="w-[14px] h-[14px] text-yellow-400"></FaStar>
                    <p className="text-xs font-medium">(5)</p>
                </button>
                <button className="flex items-center gap-[6px]">
                    <FaStar className="w-[14px] h-[14px] text-yellow-400"></FaStar>
                    <FaStar className="w-[14px] h-[14px] text-yellow-400"></FaStar>
                    <FaStar className="w-[14px] h-[14px] text-yellow-400"></FaStar>
                    <FaStar className="w-[14px] h-[14px] text-yellow-400"></FaStar>
                    <FaRegStar className="w-[14px] h-[14px] text-yellow-400"></FaRegStar>
                    <p className="text-xs font-medium">(4)</p>
                    <p className="text-xs font-medium">And Up</p>
                </button>
                <button className="flex items-center gap-[6px]">
                    <FaStar className="w-[14px] h-[14px] text-yellow-400"></FaStar>
                    <FaStar className="w-[14px] h-[14px] text-yellow-400"></FaStar>
                    <FaStar className="w-[14px] h-[14px] text-yellow-400"></FaStar>
                    <FaRegStar className="w-[14px] h-[14px] text-yellow-400"></FaRegStar>
                    <FaRegStar className="w-[14px] h-[14px] text-yellow-400"></FaRegStar>
                    <p className="text-xs font-medium">(3)</p>
                    <p className="text-xs font-medium">And Up</p>
                </button>
                <button className="flex items-center gap-[6px]">
                    <FaStar className="w-[14px] h-[14px] text-yellow-400"></FaStar>
                    <FaStar className="w-[14px] h-[14px] text-yellow-400"></FaStar>
                    <FaRegStar className="w-[14px] h-[14px] text-yellow-400"></FaRegStar>
                    <FaRegStar className="w-[14px] h-[14px] text-yellow-400"></FaRegStar>
                    <FaRegStar className="w-[14px] h-[14px] text-yellow-400"></FaRegStar>
                    <p className="text-xs font-medium">(2)</p>
                    <p className="text-xs font-medium">And Up</p>
                </button>
                <button className="flex items-center gap-[6px]">
                    <FaStar className="w-[14px] h-[14px] text-yellow-400"></FaStar>
                    <FaRegStar className="w-[14px] h-[14px] text-yellow-400"></FaRegStar>
                    <FaRegStar className="w-[14px] h-[14px] text-yellow-400"></FaRegStar>
                    <FaRegStar className="w-[14px] h-[14px] text-yellow-400"></FaRegStar>
                    <FaRegStar className="w-[14px] h-[14px] text-yellow-400"></FaRegStar>
                    <p className="text-xs font-medium">(1)</p>
                    <p className="text-xs font-medium">And Up</p>
                </button>
            </div>
        </div>
    );
};

export default RatingFilter;