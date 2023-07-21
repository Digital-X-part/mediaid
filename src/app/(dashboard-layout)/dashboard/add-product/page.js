"use client";
import Image from "next/image";
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
      {/* name & manufacturer input */}
      <div className="shadow-xl rounded-md">
        <p className="mb-4 font-semibold text-neutral-500 text-opacity-90 bg-red-100 p-2 rounded-t-md">
          Basic Information
        </p>
        <form className="p-2 pb-1">
          <div className="mb-2">
            <label
              htmlFor="productName"
              className="block text-neutral-600 font-medium mb-1">
              Product name:
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
              />
            </div>
          </div>
          <div className="mb-2">
            <label
              htmlFor="manufacturerName"
              className="block text-neutral-600 font-medium mb-1">
              Manufacturer Name:
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="shadow-xl rounded-md mt-6">
        <p className="mb-4 font-semibold text-neutral-500 text-opacity-90 bg-red-100 p-2 rounded-t-md">
          Add images
        </p>
        <div className="p-2 pb-2">
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
                      alt=""
                    />
                    <div>
                      <p className="text-sm text-neutral-600">{image.name} </p>
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
                      className="shadow menu dropdown-content z-[1] bg-base-100 rounded-sm w-20 px-2 py-1">
                      <li className="text-xs text-center">Remove File</li>
                    </ul>
                  </div>
                  
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
