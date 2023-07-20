import React from "react";

const AddProduct = () => {
  return (
    <div>
      <form>
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label
            htmlFor="productName"
            className="block text-gray-700 font-medium mb-2">
            Product name:
          </label>
          <div className="relative">
            <input
              type="text"
              className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
              placeholder="Enter your product name"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
