"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FiEye, FiHeart } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { AiTwotoneStar } from "react-icons/ai";
import Rating from "react-rating";
import Link from "next/link";
const BestSellingProducts = () => {
  const FlashSaleDisplayProduct = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="px-1">
      <div className="flex items-end justify-between">
        <h4 className="font-bold text-2xl">Best Selling</h4>
        <p className="text-sm tracking-wide mr-1">View All</p>
      </div>

      <Swiper
        breakpoints={{
          // when window width is >= 640px
          200: {
            slidesPerView: 2.5,
          },
          640: {
            slidesPerView: 4,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 6,
          },
        }}
        spaceBetween={10}
        className="mySwiper my-1">
        {FlashSaleDisplayProduct.map((item) => (
          <SwiperSlide key={item}>
            <Link
              href="/product-details"
              className="bg-white rounded-sm shadow-sm p-1 my-2 mx-1">
              <Image
                src="https://images.unsplash.com/photo-1562243061-204550d8a2c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                alt=""
                width={200}
                height={200}
                className="object-cover w-full h-32 rounded-sm"
              />
              <div className="flex items-center justify-center gap-3 my-2">
                <button className="bg-yellow-500 p-1 rounded-full hover:bg-slate-700 duration-300">
                  <FiEye className="text-lg text-white" />
                </button>
                <button className="bg-yellow-500 p-1 rounded-full hover:bg-slate-700 duration-300">
                  <FiHeart className="text-lg text-white" />
                </button>
                <button className="bg-yellow-500 p-1 rounded-full hover:bg-slate-700 duration-300">
                  <BsCart className="text-lg text-white" />
                </button>
              </div>
              <div>
                <h4 className="text-[12px] mt-1 tracking-wide">
                  {"elaOne 30 mg".length > 20
                    ? `elaOne 30 mg`.slice(0, 20) + "..."
                    : "elaOne 30 mg"}
                </h4>
                <div className="flex justify-between items-center">
                  <div>
                    <del className="text-xs font-mono text-gray-400">$454</del>{" "}
                    <span className="font-mono text-yellow-500 font-semibold">
                      $299
                    </span>
                  </div>
                  <Rating
                    placeholderRating={4.5}
                    emptySymbol={<AiTwotoneStar className="text-[10px]" />}
                    placeholderSymbol={
                      <AiTwotoneStar className="text-[10px] text-yellow-600" />
                    }
                    readonly
                  />
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          200: {
            slidesPerView: 2.5,
          },
          640: {
            slidesPerView: 4,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 6,
          },
        }}
        spaceBetween={10}
        className="mySwiper my-1">
        {FlashSaleDisplayProduct.map((item) => (
          <SwiperSlide key={item}>
            <Link
              href="/product-details"
              className="bg-white rounded-sm shadow-sm p-1 my-2 mx-1">
              <Image
                src="https://images.unsplash.com/photo-1579194440951-0c501e8ba3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                alt=""
                width={200}
                height={200}
                className="object-cover w-full h-32 rounded-sm"
              />
              <div className="flex items-center justify-center gap-3 my-2">
                <button className="bg-yellow-500 p-1 rounded-full hover:bg-slate-700 duration-300">
                  <FiEye className="text-lg text-white" />
                </button>
                <button className="bg-yellow-500 p-1 rounded-full hover:bg-slate-700 duration-300">
                  <FiHeart className="text-lg text-white" />
                </button>
                <button className="bg-yellow-500 p-1 rounded-full hover:bg-slate-700 duration-300">
                  <BsCart className="text-lg text-white" />
                </button>
              </div>
              <div>
                <h4 className="text-[12px] mt-1 tracking-wide">
                  {"elaOne 30 mg".length > 20
                    ? `elaOne 30 mg`.slice(0, 20) + "..."
                    : "elaOne 30 mg"}
                </h4>
                <div className="flex justify-between items-center">
                  <div>
                    <del className="text-xs font-mono text-gray-400">$454</del>{" "}
                    <span className="font-mono text-yellow-500 font-semibold">
                      $299
                    </span>
                  </div>
                  <Rating
                    placeholderRating={4.5}
                    emptySymbol={<AiTwotoneStar className="text-[10px]" />}
                    placeholderSymbol={
                      <AiTwotoneStar className="text-[10px] text-yellow-600" />
                    }
                    readonly
                  />
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BestSellingProducts;
