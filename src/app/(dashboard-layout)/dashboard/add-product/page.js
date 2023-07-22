"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
const AddProduct = () => {
  const [images, setImages] = useState([]);

  const uploadToClient = (event) => {
    const files = event.target.files;
    const imageArray = Array.from(files).map((file) => {
      const imageURL = URL.createObjectURL(file);
      return {
        name: file.name,
        size: file.size,
        url: imageURL,
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

  return (
    <div>
      <div className="text-sm breadcrumbs mb-2">
        <ul>
          <li>
            <Link href="/dashboard">DashBoard</Link>
          </li>
          <li>Add Product</li>
        </ul>
      </div>
      <div className="shadow-xl rounded-md">
        <p className="mb-4 font-semibold text-neutral-500 text-opacity-90 bg-red-100 p-2 rounded-t-md">
          Basic Information
        </p>
        <form>
          <div className="p-2">
            <div className="mb-2">
              <label
                htmlFor="productName"
                className="block text-neutral-600 mb-1">
                Product name:
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-1 px-2"
                />
              </div>
            </div>
            <div className="mb-2">
              <label
                htmlFor="manufacturerName"
                className="block text-neutral-600 mb-1">
                Manufacturer Name:
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-1 px-2"
                />
              </div>
            </div>
          </div>
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
                          className="btn p-0 h-0 min-h-[20px] rounded-sm bg-inherit">
                          <BiDotsVerticalRounded />
                        </label>
                        <ul
                          tabIndex={0}
                          className="shadow menu dropdown-content z-[1] bg-base-100 rounded-sm w-24 px-2 py-1">
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
              <label className="text-neutral-600">Product Description:</label>
              <textarea
                className="w-full mt-2 outline-none border resize-none p-2 rounded-sm"
                name=""
                id=""
                cols="30"
                rows="8"></textarea>
              <h5 className="text-neutral-600 mt-2">Select category:</h5>
              <select className="select select-bordered w-full max-w-xs mt-2">
                <option disabled selected>
                  Dinner or Gala
                </option>
                <option>Computer & Accessories</option>
                <option>Class Training & workshop</option>
              </select>
              <h5 className="text-neutral-600 mt-2">Select sub-category:</h5>
              <select className="select select-bordered w-full max-w-xs mt-2">
                <option disabled selected>
                  Laptop
                </option>
                <option>Concert or performance</option>
                <option>Festival or fair </option>
              </select>
              <div className="mt-2">
                <label
                  htmlFor="availableStock"
                  className="block text-neutral-600 mb-1">
                  Available Stock:
                </label>
                <div className="relative">
                  <input
                    type="number"
                    className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-1 px-2"
                  />
                </div>
              </div>
              <div className="mt-2">
                <label
                  htmlFor="addAKeyWord"
                  className="block text-neutral-600 mb-1">
                  Add a keyword:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-1 px-2"
                  />
                </div>
              </div>
              <div className="mt-2">
                <label
                  htmlFor="sellingType"
                  className="block text-neutral-600 mb-1">
                  Selling type:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-1 px-2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-md mt-2">
            <p className="mb-4 font-semibold text-neutral-500 text-opacity-90 bg-red-100 p-2 rounded-t-md">
              Pricing
            </p>
            <div className="p-2">
              <div className="mb-2">
                <label
                  htmlFor="basePrice"
                  className="block text-neutral-600  mb-1">
                  Base Price:
                </label>
                <div className="relative">
                  <input
                    type="number"
                    className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-1 px-2"
                  />
                </div>
              </div>
              <div className="mb-2">
                <label
                  htmlFor="discountInPercentage"
                  className="block text-neutral-600 mb-1">
                  Discount in percentage:
                </label>
                <div className="relative">
                  <input
                    type="number"
                    className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-1 px-2"
                  />
                </div>
              </div>
              <div className="mb-2">
                <label
                  htmlFor="productName"
                  className="block text-neutral-600 mb-1">
                  Final price:
                </label>
                <div className="relative">
                  <input
                    type="number"
                    readOnly
                    className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-1 px-2 bg-slate-200"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-md mt-2 shadow-xl">
            <p className="mb-1 font-semibold text-neutral-500 text-opacity-90 bg-red-100 p-2 rounded-t-md">
              Product Status
            </p>
            <div className="p-2">
              <div className="flex items-center gap-2 mb-2">
                <input type="radio" name="radio-1" className="radio radio-sm" />
                <p className="text-neutral-600">In stock</p>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <input type="radio" name="radio-1" className="radio radio-sm" />
                <p className="text-neutral-600">To be announced</p>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <input type="radio" name="radio-1" className="radio radio-sm" />
                <p className="text-neutral-600">Unavailable</p>
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
      </div>
    </div>
  );
};

export default AddProduct;