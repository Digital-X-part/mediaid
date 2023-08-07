"use client";
import Image from "next/image";
import { useState } from "react";
import ProductInfo from "../ProductInfo/ProductInfo";

const ImageBanner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const productImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1690702691836-c5409092ad01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      name: "Product Image 1",
    },
    {
      id: 2,
      url: "https://i.ibb.co/ySqmk3Q/original-imaggyeuxytzmkj8.webp",
      name: "Product Image 2",
    },
    {
      id: 3,
      url: "https://i.ibb.co/wgwKTPM/original-imagaa2kvgsfdght.webp",
      name: "Product Image 3",
    },
    {
      id: 4,
      url: "https://i.ibb.co/8XR6ytF/original-imagaa2k9f48zy6t.webp",
      name: "Product Image 3",
    },
    {
      id: 5,
      url: "https://i.ibb.co/Bgrt2Fc/original-imagaa2kxt6henq6.jpg",
      name: "Product Image 3",
    },
  ];

  const handleImageHover = (index) => {
    setCurrentImage(index);
  };

  return (
    <div>
      <div className="w-full h-80 mx-auto border p-2">
        <Image
          alt="Wristwatch by Ted Baker London"
          src={productImages[currentImage].url}
          width={600}
          height={600}
          className="w-full h-full object-contain rounded-sm"
        />
      </div>
      {/* Product sort thumbs */}
      <div className="mt-2 mb-3">
        <div className="flex">
          {productImages.map((img, index) => (
            <div
              key={img.id}
              className="mr-2 cursor-pointer border p-1 rounded-sm hover:border-blue-600"
              onMouseEnter={() => handleImageHover(index)}>
              <Image
                height={56}
                width={64}
                alt={img.name}
                src={img.url}
                className="h-14 w-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageBanner;
