"use client";
import Image from "next/image";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import uploadImage from "@/utility/uploadFilesToImgBB";
import swal from "sweetalert";
import axiosInstance from "@/utility/axiosInstance";
const AddProductsForm = () => {
  const [images, setImages] = useState([]);
  const [sellingType, setSellingType] = useState("flash sale");
  /* Hooks */
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  // make a function that will ready images to showing on client
  const uploadToClient = async (event) => {
    const files = event.target.files;

    const imageArray = Array.from(files).map((file) => {
      const imageURL = URL.createObjectURL(file);

      return {
        name: file.name,
        size: file.size,
        url: imageURL,
        file,
      };
    });

    setImages((prevImages) => [...prevImages, ...imageArray]);
  };

  const formatSize = (sizeInBytes) => {
    const kbSize = sizeInBytes / 1024;
    if (kbSize < 1024) {
      return `${kbSize.toFixed(2)} KB`;
    } else {
      const mbSize = kbSize / 1024;
      return `${mbSize.toFixed(2)} MB`;
    }
  };

  /* HandleOnSubmit */
  const onSubmit = async (data) => {
    try {
      // upload images in to imgbb and get urls
      const uploadedImageURLs = await Promise.all(
        images.map(async (image) => await uploadImage(image.file))
      );
      const imagesUrls = uploadedImageURLs.map((image) => image.url);
      console.log({ imagesUrls });

      // send data to server
      const productData = await axiosInstance.post("products", {
        ...data,
        imagesUrls,
      });
      console.log(data);
      swal({
        title: "Success!",
        text: "Product added successfully!",
        icon: "success",
        timer: 2000,
      });
      // reset form
      setImages([]);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-2">
          {/* product name: name */}
          <div className="mb-2">
            <label
              htmlFor="productName"
              className="block text-neutral-600 mb-1"
            >
              Product name:
            </label>
            <div className="relative">
              <input
                type="text"
                name="productName"
                {...register("productName", { required: true })}
                className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-1 px-2"
              />
              {errors?.productName && (
                <span className="block text-xs text-red-500">
                  {errors?.productName.type === "required" &&
                    "Product name is required"}
                </span>
              )}
            </div>
          </div>

          {/* brand name  */}
          <div className="mb-2">
            <label htmlFor="brandName" className="block text-neutral-600 mb-1">
              Brand Name:
            </label>
            <div className="relative">
              <input
                type="text"
                name="brandName"
                {...register("brandName")}
                className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-1 px-2"
              />
            </div>
          </div>
        </div>
        {/* images  */}
        <div className="rounded-md mt-2">
          <p className="mb-4 font-semibold text-neutral-500 text-opacity-90 bg-red-100 p-2 rounded-t-md">
            Add images
          </p>
          <div className="p-2">
            <label htmlFor="imageInput">
              <div className="flex items-center justify-center border-2 border-dashed h-20 rounded-md gap-1">
                <AiOutlineCloudUpload size={25} color="gray" />
                <span className="text-sm font-semibold text-blue-500">
                  Browse
                </span>
              </div>
            </label>
            <input
              type="file"
              multiple
              id="imageInput"
              onChange={uploadToClient}
              className="hidden"
            />
            {/* showing added images in ui */}
            <div className="mt-4">
              {images.length > 0 &&
                images.map((image, index) => (
                  <div key={index} className="flex justify-between py-1">
                    <div className="flex items-center gap-2">
                      <Image
                        width={24}
                        height={24}
                        src={image.url}
                        className="object-cover w-6 h-6 rounded-md"
                        alt={image.name}
                      />
                      <div>
                        <p className="text-sm text-neutral-600">
                          {image.name}{" "}
                        </p>
                        <p className="text-[8px] text-neutral-500">
                          {formatSize(image.size)}
                        </p>
                      </div>
                    </div>
                    <div className="dropdown dropdown-end">
                      <label
                        tabIndex={0}
                        className="btn p-0 h-0 min-h-[20px] rounded-sm bg-inherit"
                      >
                        <BiDotsVerticalRounded />
                      </label>
                      <ul
                        tabIndex={0}
                        className="shadow menu dropdown-content z-[1] bg-base-100 rounded-sm w-24 px-2 py-1"
                      >
                        <li className="text-xs text-center">Remove File</li>
                      </ul>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="rounded-md mt-2">
          <p className="mb-4 font-semibold text-neutral-500 text-opacity-90 bg-red-100 p-2 rounded-t-md">
            Details
          </p>
          <div className="p-2">
            {/* description */}
            <label className="text-neutral-600">Product Description:</label>
            <textarea
              {...register("productDescription")}
              className="w-full mt-2 outline-none border resize-none p-2 rounded-sm"
              name="productDescription"
              id=""
              cols="30"
              rows="8"
            ></textarea>
            <h5 className="text-neutral-600 mt-2">Select category:</h5>
            {/* //todo fetch category from db */}
            <select
              {...register("category")}
              className="select select-bordered w-full max-w-xs mt-2"
            >
              <option disabled>Dinner or Gala</option>
              <option>Computer & Accessories</option>
              <option>Class Training & workshop</option>
            </select>
            <h5 className="text-neutral-600 mt-2">Select sub-category:</h5>
            {/* //todo fetch subcategory according to category */}
            <select
              {...register("subCategory")}
              className="select select-bordered w-full max-w-xs mt-2"
            >
              <option disabled>Laptop</option>
              <option>Concert or performance</option>
              <option>Festival or fair </option>
            </select>

            {/* available stock */}
            <div className="mt-2">
              <label
                htmlFor="availableStock"
                className="block text-neutral-600 mb-1"
              >
                Available Stock:
              </label>
              <div className="relative">
                <input
                  type="number"
                  name="availableStock"
                  {...register("availableStock", { required: true })}
                  className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-1 px-2"
                />
                {errors?.availableStock && (
                  <span className="block text-xs text-red-500">
                    {errors?.availableStock.type === "required" &&
                      "Available stock is required"}

                    {errors?.availableStock.type === "pattern" &&
                      "Available stock must be a number"}
                  </span>
                )}
              </div>
            </div>
            {/* tags */}
            <div className="mt-2">
              <label htmlFor="tags" className="block text-neutral-600 mb-1">
                Add a Tags:
              </label>
              <div className="relative">
                <input
                  {...register("tags")}
                  id="tags"
                  type="text"
                  name="tags"
                  placeholder="new, arrival, new arrival, feature product, popular product, push product"
                  className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-1 px-2"
                />
              </div>
            </div>
            {/* Highlights */}
            <div className="mt-2">
              <label htmlFor="tags" className="block text-neutral-600 mb-1">
                Give Highlights with comma:
              </label>
              <div className="relative">
                <input
                  {...register("highlights")}
                  id="highlights"
                  type="text"
                  name="highlights"
                  placeholder="Water Proof: Yes,
                  Shape: Round,
                  Country of Origin: Japan"
                  className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-1 px-2"
                />
              </div>
            </div>
            <div className="mt-2">
              <label
                htmlFor="sellingType"
                className="block text-neutral-600 mb-1"
              >
                Selling type:
              </label>
              <select
                id="sellingType"
                {...register("sellingType")}
                onChange={(e) => setSellingType(e.target.value)}
                className="select select-bordered w-full max-w-xs mt-2"
              >
                <option disabled>Select one type</option>

                <option value="flash sale">flash sale</option>
                <option value="new arrival">new arrival</option>
                <option value="feature product">feature product</option>
                <option value="popular product">popular product</option>
                <option value="push product">push product</option>
              </select>
            </div>
          </div>
        </div>

        {sellingType === "flash sale" && (
          <div className="rounded-md mt-2">
            <label htmlFor="startDate">
              <span className="block text-neutral-600 mb-1">Start Date:</span>
            </label>
            <div className="relative">
              <input
                type="datetime-local"
                name="startDate"
                {...register("startDate", { required: true })}
                className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-1 px-2"
              />
              {errors?.startDate && (
                <span className="block text-xs text-red-500">
                  {errors?.startDate.type === "required" &&
                    "Start date is required"}
                </span>
              )}
            </div>
            <label htmlFor="endDate">
              <span className="block text-neutral-600 mb-1">End Date:</span>
            </label>
            <div className="relative">
              <input
                type="datetime-local"
                name="endDate"
                {...register("endDate", { required: true })}
                className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-1 px-2"
              />
              {errors?.endDate && (
                <span className="block text-xs text-red-500">
                  {errors?.endDate.type === "required" &&
                    "End date is required"}
                </span>
              )}
            </div>
          </div>
        )}
        {/* prices */}
        <div className="rounded-md mt-2">
          <p className="mb-4 font-semibold text-neutral-500 text-opacity-90 bg-red-100 p-2 rounded-t-md">
            Pricing
          </p>
          <div className="p-2">
            <div className="mb-2">
              <label
                htmlFor="basePrice"
                className="block text-neutral-600  mb-1"
              >
                Base Price:
              </label>
              <div className="relative">
                <input
                  type="number"
                  name="basePrice"
                  {...register("basePrice", { required: true })}
                  className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-1 px-2"
                />
                {errors?.basePrice && (
                  <span className="block text-xs text-red-500">
                    {errors?.basePrice.type === "required" &&
                      "Base price is required"}
                  </span>
                )}
              </div>
            </div>
            <div className="mb-2">
              <label
                htmlFor="discountInPercentage"
                className="block text-neutral-600 mb-1"
              >
                Discount in percentage:
              </label>
              <div className="relative">
                <input
                  type="number"
                  name="discountInPercentage"
                  {...register("discountInPercentage")}
                  readOnly
                  className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-1 px-2"
                />
              </div>
            </div>
            <div className="mb-2">
              <label
                htmlFor="productName"
                className="block text-neutral-600 mb-1"
              >
                Final price:
              </label>
              <div className="relative">
                <input
                  type="number"
                  name="finalPrice"
                  {...register("finalPrice")}
                  className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-1 px-2 bg-slate-200"
                />
              </div>
            </div>
          </div>
        </div>
        {/* product status */}
        <div className="rounded-md mt-2 shadow-xl">
          <p className="mb-1 font-semibold text-neutral-500 text-opacity-90 bg-red-100 p-2 rounded-t-md">
            Product Status
          </p>
          <div className="p-2">
            <div className="flex items-center gap-2 mb-2">
              <input
                type="radio"
                id="active"
                {...register("productStatus")}
                value={"active"}
                className="radio radio-sm"
              />
              <label htmlFor="active" className="text-neutral-600">
                Active
              </label>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <input
                type="radio"
                id="inactive"
                className="radio radio-sm"
                {...register("productStatus")}
                value={"inactive"}
              />
              <label htmlFor="inactive" className="text-neutral-600">
                Inactive
              </label>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <input
                type="radio"
                id="starUser"
                {...register("productStatus")}
                className="radio radio-sm"
                value={"starUser"}
              />
              <label htmlFor="starUser" className="text-neutral-600">
                Star User
              </label>
            </div>
          </div>
        </div>
        <div className="rounded-md shadow-xl mt-2">
          <p className="mb-2 font-semibold text-black bg-warning p-2 rounded-t-md tracking-wide">
            You are almost done!
          </p>
          <div className="p-2 pb-4">
            <button className="btn btn-error">Discard</button>
            <button className="btn btn-warning ml-4">Add Product</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddProductsForm;
