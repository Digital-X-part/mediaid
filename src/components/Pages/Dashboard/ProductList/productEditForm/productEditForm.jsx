import React from "react";
import { useForm } from "react-hook-form";

const ProductEditForm = ({ product }) => {

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const handleProductUpdate = (data) => {
    console.log(data);
  };
  return (
   
       
      <form 
        onSubmit={handleSubmit(handleProductUpdate)}
       className="space-y-2">
        {/* register your input into the hook by invoking the "register" function */}
        <div className="flex flex-col">
          <label htmlFor="product_name" className="text-base font-semibold">
            Product Name:
          </label>
          <input
            name="name"
            id="product_name"
            defaultValue={product?.name}
            {...register("name")}
            className="px-2 py-1 text-sm border border-gray-400 rounded-md outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="brandName" className="text-base font-semibold">
            Brand Name:
          </label>
          <input
            name="name"
            id="brandName"
            defaultValue={product?.brandName}
            {...register("brandName")}
            className="px-2 py-1 text-sm border border-gray-400 rounded-md outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="text-base font-semibold">
            Description:
          </label>
          <input
            name="description"
            id="description"
            defaultValue={product?.description}
            {...register("description")}
            className="px-2 py-1 text-sm border border-gray-400 rounded-md outline-none"
          />
        </div>
        <div className="grid grid-cols-2 gap-x-2">
          <div className="flex flex-col">
            <label htmlFor="price_prev" className="text-base font-semibold">
              Prevent Price:
            </label>
            <input
              name="prev"
              id="price_prev"
              defaultValue={product?.price?.prev}
              {...register("prev")}
              className="px-2 py-1 text-sm border border-gray-400 rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="new_price" className="text-base font-semibold">
              New Price:
            </label>
            <input
              name="present"
              id="new_price"
              defaultValue={product?.price?.present}
              {...register("present")}
              className="px-2 py-1 text-sm border border-gray-400 rounded-md outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-2">
          <div className="flex flex-col">
            <label htmlFor="availableStock" className="text-base font-semibold">
              Available Stock:
            </label>
            <input
              name="availableStock"
              id="availableStock"
              defaultValue={product?.availableStock}
              {...register("availableStock")}
              className="px-2 py-1 text-sm border border-gray-400 rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="addTags" className="text-base font-semibold">
              Add New Tags:
            </label>
            <input
              name="tags"
              id="addTags"
              placeholder="Add New Tags"
              {...register("present")}
              className="px-2 py-1 text-sm border border-gray-400 rounded-md outline-none"
              // defaultValue={allTags}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="highlights" className="text-base font-semibold">
            Highlights:
          </label>
          <textarea
            name="highlights"
            id="highlights"
            placeholder="Add Highlights"
            {...register("highlights")}
            className="px-2 py-2 text-sm border border-gray-400 rounded-md outline-none"
            // defaultValue={productHighlights}
          />
        </div>
        
        <div className=" flex items-center gap-2 md:gap-3 h-8">
          <p className="text-base font-semibold">Status:</p>
          <div className="flex items-center gap-2 ">
            <input
              type="radio"
              id="active"
              {...register("productStatus")}
                value={'active'}
              className="radio radio-sm"
              // checked={productStatus === "active"}
              // onChange={handleRadioChange}
            />
            <label htmlFor="active" className="text-neutral-600">
              Active
            </label>
          </div>
          <div className="flex items-center gap-2 ">
            <input
              type="radio"
              id="inactive"
              {...register("productStatus")}
                value={'inactive'}
              className="radio radio-sm"
              // checked={productStatus === "inactive"}
              // onChange={handleRadioChange}
            />
            <label htmlFor="inactive" className="text-neutral-600">
              Inactive
            </label>
          </div>
          <div className="flex items-center gap-2 ">
            <input
              type="radio"
              id="starUser"
              {...register("productStatus")}
                value={'starUser'}
              className="radio radio-sm"
              // checked={productStatus === "starUser"}
              // onChange={handleRadioChange}
            />
            <label htmlFor="starUser" className="text-neutral-600">
              Star User
            </label>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-2">
          <div>
            <p className="text-base font-semibold">Category:</p>
            <select
              {...register("category")}
              className="select select-bordered w-full"
            >
              <option
                value="Dinner or Gala"
                // selected={productCategory === "Dinner or Gala"}
              >
                Dinner or Gala
              </option>
              <option
                value="Computer & Accessories"
                // selected={productCategory === "Computer & Accessories"}
              >
                Computer & Accessories
              </option>
              <option
                value="Class Training & workshop"
                // selected={productCategory === "Class Training & workshop"}
              >
                Class Training & workshop
              </option>
            </select>
          </div>
          <div>
            <p className="text-base font-semibold">Sub Category:</p>
            <select
              {...register("subCategory")}
              className="select select-bordered w-full"
            >
              <option
                value="Laptop"
                // selected={productSubCategory === "Laptop"}
              >
                Laptop
              </option>
              <option
                value="Concert or performance"
                // selected={productSubCategory === "Concert or performance"}
              >
                Concert or performance
              </option>
              <option
                value="Festival or fair"
                // selected={productSubCategory === "Festival or fair"}
              >
                Festival or fair
              </option>
            </select>
          </div>
        </div>
        <div>
          <p className="text-base font-semibold">Selling Type:</p>
          <select
            id="sellingType"
            {...register("sellingType")}
            className="select select-bordered w-full max-w-xs mt-2"
          >
            <option
              value="flash sale"
              // selected={productSellingType === "flash sale"}
            >
              flash sale
            </option>
            <option
              value="new arrival"
              // selected={productSellingType === "new arrival"}
            >
              new arrival
            </option>
            <option
              value="feature product"
              // selected={productSellingType === "feature product"}
            >
              feature product
            </option>
            <option
              value="popular product"
              // selected={productSellingType === "popular product"}
            >
              popular product
            </option>
            <option
              value="push product"
              // selected={productSellingType === "push product"}
            >
              push product
            </option>
          </select>
        </div>
        <div className="pt-3 flex justify-center items-center">
          <button className="text-base font-semibold px-4 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600 duration-200">
            Update
          </button>
        </div>
      </form>
   
  );
};

export default ProductEditForm;
