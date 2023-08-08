
const CompareActivity = () => {
    return (
        <div className="bg-teal-500 rounded-md px-4 py-6 min-w-[400px]">
                        <div className="flex justify-between">
                        <h1 className="text-base md:text-lg font-semibold text-white">Compare Activity to last 7 days</h1>
                        <select className="rounded outline-none px-2  bg-teal-500 shadow-md text-white text-sm"> 
                            <option value="Today">Today</option>
                            <option value="Yesterday">Yesterday</option>
                            <option value="Last 7 Days" selected>Last 7 Days</option>
                            <option value="Last 30 Days">Last 30 Days</option>
                            <option value="Last 90 Days">Last 90 Days</option>
                        </select>
                        </div>
                        <div className="flex gap-3 mt-5 justify-center flex-wrap">
                            <div className="shadow-md bg-teal-500 rounded-md p-5 text-center">
                                <p className="text-base md:text-lg font-bold text-blue-600">+28%</p>
                                <p className="text-sm md:text-base text-white font-semibold">Users</p>
                            </div>
                            <div className="shadow-md bg-teal-500 p-5 text-center rounded-md">
                                <p className="text-base md:text-lg font-bold text-red-500">-7%</p>
                                <p className="text-sm md:text-base text-white font-semibold">Active Users</p>
                            </div>
                            <div className="shadow-md bg-teal-500 rounded-md p-5 text-center">
                                <p className="text-base md:text-lg font-bold text-blue-600">18%</p>
                                <p className="text-sm md:text-base text-white font-semibold">Sales</p>
                            </div>
                            <div className="shadow-md bg-teal-500 rounded-md p-5 text-center">
                                <p className="text-base md:text-lg font-bold text-blue-600">100%</p>
                                <p className="text-sm md:text-base text-white font-semibold">Customer Satisfaction</p>
                            </div>
                        </div>
                    </div>
    );
};

export default CompareActivity;