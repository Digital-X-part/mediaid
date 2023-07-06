"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { MdAddShoppingCart } from "react-icons/md";

const FlashSale = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const targetDate = new Date("2023-07-09");
      const timeDiff = targetDate.getTime() - now.getTime();
      let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      setTime({
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-1 my-8">
      <div className="flex items-end justify-between">
       <div className="flex gap-2">
       <h4 className="font-bold text-2xl">Flash Sale</h4>
        <div className="flex items-end text-center gap-1 font-mono text-lg font-bold text-yellow-500 cursor-pointer">
          <p>{time.days < 10 ? "0" + time.days : time.days}</p> <span>:</span>
          <p>{time.hours < 10 ? "0" + time.hours : time.hours}</p>{" "}
          <span>:</span>
          <p>{time.minutes < 10 ? "0" + time.minutes : time.minutes}</p>{" "}
          <span>:</span>
          <p>{time.seconds < 10 ? "0" + time.seconds : time.seconds}</p> 
        </div>
       </div>
        <p className="text-sm tracking-wide mr-1">View All</p>
      </div>
      <Swiper slidesPerView={2.5} spaceBetween={10} className="mySwiper my-1">
        <SwiperSlide className="bg-white rounded-sm shadow-sm p-1 my-2 mx-1">
          <Image
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
            alt=""
            width={200}
            height={200}
            className="object-cover w-full h-32 rounded-sm"
          />
          <div>
            <p className="text-[11px] mt-1">Jeptum hp medicine</p>
            <div className="flex justify-between items-center">
              <div>
                <del className="text-xs font-mono text-gray-400">$454</del>{" "}
                <span className="font-mono text-yellow-500 font-semibold">
                  $299
                </span>
              </div>
              <p className="text-[10px] bg-red-600 px-1 py-0.5 text-white rounded-md">
                <span>12</span>% Off
              </p>
            </div>
          </div>
          <button className="uppercase text-xs border w-full py-0.5 font-sans my-1 border-yellow-300 text-neutral-800 ">
            Add to cart
          </button>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-sm shadow-sm p-1 my-2 mx-1">
          <Image
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
            alt=""
            width={200}
            height={200}
            className="object-cover w-full h-32 rounded-sm"
          />
          <div>
            <p className="text-[11px] mt-1">Jeptum hp medicine</p>
            <div className="flex justify-between items-center">
              <div>
                <del className="text-xs font-mono text-gray-400">$454</del>{" "}
                <span className="font-mono text-yellow-500 font-semibold">
                  $299
                </span>
              </div>
              <p className="text-[10px] bg-red-600 px-1 py-0.5 text-white rounded-md">
                <span>12</span>% Off
              </p>
            </div>
          </div>
          <button className="uppercase text-xs border w-full py-0.5 font-sans my-1 border-yellow-300 text-neutral-800 ">
            Add to cart
          </button>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-sm shadow-sm p-1 my-2 mx-1">
          <Image
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
            alt=""
            width={200}
            height={200}
            className="object-cover w-full h-32 rounded-sm"
          />
          <div>
            <p className="text-[11px] mt-1">Jeptum hp medicine</p>
            <div className="flex justify-between items-center">
              <div>
                <del className="text-xs font-mono text-gray-400">$454</del>{" "}
                <span className="font-mono text-yellow-500 font-semibold">
                  $299
                </span>
              </div>
              <p className="text-[10px] bg-red-600 px-1 py-0.5 text-white rounded-md">
                <span>12</span>% Off
              </p>
            </div>
          </div>
          <button className="uppercase text-xs border w-full py-0.5 font-sans my-1 border-yellow-300 text-neutral-800 ">
            Add to cart
          </button>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-sm shadow-sm p-1 my-2 mx-1">
          <Image
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
            alt=""
            width={200}
            height={200}
            className="object-cover w-full h-32 rounded-sm"
          />
          <div>
            <p className="text-[11px] mt-1">Jeptum hp medicine</p>
            <div className="flex justify-between items-center">
              <div>
                <del className="text-xs font-mono text-gray-400">$454</del>{" "}
                <span className="font-mono text-yellow-500 font-semibold">
                  $299
                </span>
              </div>
              <p className="text-[10px] bg-red-600 px-1 py-0.5 text-white rounded-md">
                <span>12</span>% Off
              </p>
            </div>
          </div>
          <button className="uppercase text-xs border w-full py-0.5 font-sans my-1 border-yellow-300 text-neutral-800 ">
            Add to cart
          </button>
        </SwiperSlide>
      </Swiper>
      <Swiper slidesPerView={2.5} spaceBetween={10} className="mySwiper my-1">
        <SwiperSlide className="bg-white rounded-sm shadow-sm p-1 my-2 mx-1">
          <Image
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
            alt=""
            width={200}
            height={200}
            className="object-cover w-full h-32 rounded-sm"
          />
          <div>
            <p className="text-[11px] mt-1">Jeptum hp medicine</p>
            <div className="flex justify-between items-center">
              <div>
                <del className="text-xs font-mono text-gray-400">$454</del>{" "}
                <span className="font-mono text-yellow-500 font-semibold">
                  $299
                </span>
              </div>
              <p className="text-[10px] bg-red-600 px-1 py-0.5 text-white rounded-md">
                <span>12</span>% Off
              </p>
            </div>
          </div>
          <button className="uppercase text-xs border w-full py-0.5 font-sans my-1 border-yellow-300 text-neutral-800 ">
            Add to cart
          </button>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-sm shadow-sm p-1 my-2 mx-1">
          <Image
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
            alt=""
            width={200}
            height={200}
            className="object-cover w-full h-32 rounded-sm"
          />
          <div>
            <p className="text-[11px] mt-1">Jeptum hp medicine</p>
            <div className="flex justify-between items-center">
              <div>
                <del className="text-xs font-mono text-gray-400">$454</del>{" "}
                <span className="font-mono text-yellow-500 font-semibold">
                  $299
                </span>
              </div>
              <p className="text-[10px] bg-red-600 px-1 py-0.5 text-white rounded-md">
                <span>12</span>% Off
              </p>
            </div>
          </div>
          <button className="uppercase text-xs border w-full py-0.5 font-sans my-1 border-yellow-300 text-neutral-800 ">
            Add to cart
          </button>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-sm shadow-sm p-1 my-2 mx-1">
          <Image
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
            alt=""
            width={200}
            height={200}
            className="object-cover w-full h-32 rounded-sm"
          />
          <div>
            <p className="text-[11px] mt-1">Jeptum hp medicine</p>
            <div className="flex justify-between items-center">
              <div>
                <del className="text-xs font-mono text-gray-400">$454</del>{" "}
                <span className="font-mono text-yellow-500 font-semibold">
                  $299
                </span>
              </div>
              <p className="text-[10px] bg-red-600 px-1 py-0.5 text-white rounded-md">
                <span>12</span>% Off
              </p>
            </div>
          </div>
          <button className="uppercase text-xs border w-full py-0.5 font-sans my-1 border-yellow-300 text-neutral-800 ">
            Add to cart
          </button>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-sm shadow-sm p-1 my-2 mx-1">
          <Image
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
            alt=""
            width={200}
            height={200}
            className="object-cover w-full h-32 rounded-sm"
          />
          <div>
            <p className="text-[11px] mt-1">Jeptum hp medicine</p>
            <div className="flex justify-between items-center">
              <div>
                <del className="text-xs font-mono text-gray-400">$454</del>{" "}
                <span className="font-mono text-yellow-500 font-semibold">
                  $299
                </span>
              </div>
              <p className="text-[10px] bg-red-600 px-1 py-0.5 text-white rounded-md">
                <span>12</span>% Off
              </p>
            </div>
          </div>
          <button className="uppercase text-xs border w-full py-0.5 font-sans my-1 border-yellow-300 text-neutral-800 ">
            Add to cart
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FlashSale;
