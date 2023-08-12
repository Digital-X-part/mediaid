import CompareActivity from "./CompareActivity";
import CustomerActivity from "./CustomerActivity";
import ProductsSummary from "./ProductsSummary";
import SalesActivity from "./SalesActivity";

const Overview = () => {
    return (
        <div className="py-4 px-2">
                <div className="flex items-center gap-5 scrollbar-hide [&::-webkit-scrollbar]:hidden overflow-auto lg:grid grid-cols-2 lg:gap-7">
                    <SalesActivity></SalesActivity>
                    <ProductsSummary></ProductsSummary>
                    <CustomerActivity></CustomerActivity>
                    <CompareActivity></CompareActivity>
                </div>
                <div className="lg:hidden mt-5 border h-10">
                    <h1 className="text-sm font-semibold text-gray-700">Easy to Move</h1>

                </div>
        </div>
    );
};

export default Overview;