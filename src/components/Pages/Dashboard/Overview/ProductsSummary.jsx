
const ProductsSummary = () => {
    return (
        <div className="bg-teal-500 rounded-md px-4 py-6 min-w-[400px]">
                        <div className="flex justify-between">
                        <h1 className="text-base md:text-lg font-semibold text-white">Products Summary</h1>
                        <select className="rounded outline-none px-2  bg-teal-500 shadow-md text-white text-sm"> 
                            <option value="Today" selected>Today</option>
                            <option value="Yesterday">Yesterday</option>
                            <option value="Last 7 Days">Last 7 Days</option>
                            <option value="Last 30 Days">Last 30 Days</option>
                            <option value="Last 90 Days">Last 90 Days</option>
                        </select>
                        </div>
                        <div className="flex gap-3 mt-5 justify-center flex-wrap">
                            <div className="shadow-md bg-teal-500 rounded-md p-5 text-center">
                                <p className="text-base md:text-lg font-bold text-white">155</p>
                                <p className="text-sm md:text-base text-white font-semibold">Total Products</p>
                            </div>
                            <div className="shadow-md bg-teal-500 p-5 text-center rounded-md">
                                <p className="text-base md:text-lg font-bold text-white">27</p>
                                <p className="text-sm md:text-base text-white font-semibold">New Added</p>
                            </div>
                            <div className="shadow-md bg-teal-500 rounded-md p-5 text-center">
                                <p className="text-base md:text-lg font-bold text-white">299</p>
                                <p className="text-sm md:text-base text-white font-semibold">Total Purchase</p>
                            </div>
                            <div className="shadow-md bg-teal-500 rounded-md p-5 text-center">
                                <p className="text-base md:text-lg font-bold text-white">5</p>
                                <p className="text-sm md:text-base text-white font-semibold">Out of Stock</p>
                            </div>
                        </div>
                    </div>
    );
};

export default ProductsSummary;