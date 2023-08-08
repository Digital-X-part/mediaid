
const SalesActivity = () => {
    return (
        <div className="bg-green-500 rounded-md px-4 py-6 min-w-[400px]">
                        <div className="flex justify-between">
                        <h1 className="text-base md:text-lg font-semibold text-white">Today&apos;s Sales Activity</h1>
                        <select className="rounded outline-none px-2  bg-green-500 shadow-md text-white text-sm"> 
                            <option value="Today" selected>Today</option>
                            <option value="Yesterday">Yesterday</option>
                            <option value="Last 7 Days">Last 7 Days</option>
                            <option value="Last 30 Days">Last 30 Days</option>
                            <option value="Last 90 Days">Last 90 Days</option>
                        </select>
                        </div>
                        <div className="flex gap-3  mt-5 justify-center flex-wrap ">
                            <div className="shadow-md bg-green-500 p-5 text-center rounded-md">
                                <p className="text-base md:text-lg font-bold text-white">210</p>
                                <p className="text-sm md:text-base text-white font-semibold">Total Orders</p>
                            </div>
                            <div className="shadow-md bg-green-500 rounded-md p-5 text-center">
                                <p className="text-base md:text-lg font-bold text-white">199</p>
                                <p className="text-sm md:text-base text-white font-semibold">Successful Deliver</p>
                            </div>
                            <div className="shadow-md bg-green-500 rounded-md p-5 text-center">
                                <p className="text-base md:text-lg font-bold text-white">8</p>
                                <p className="text-sm md:text-base text-white font-semibold">Delivery in Progress</p>
                            </div>
                            <div className="shadow-md bg-green-500 rounded-md p-5 text-center">
                                <p className="text-base md:text-lg font-bold text-white">13</p>
                                <p className="text-sm md:text-base text-white font-semibold">Remaining Delivery</p>
                            </div>
                        </div>
                    </div>
    );
};

export default SalesActivity;