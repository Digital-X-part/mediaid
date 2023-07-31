"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const sliderBannerImage = [
  "https://i.ibb.co/WBpM26Z/Screenshot-2023-07-31-164430.png",
  "https://i.ibb.co/f8VmGGj/Screenshot-2023-07-31-164329.png",
];

export default function Slider() {
  return (
    <div className="mt-2">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper w-full max-w-[1080px] h-[400px]">
        {sliderBannerImage.map((imageLink, index) => (
          <SwiperSlide key={index}>
            <Image
              src={imageLink}
              alt="Image 1"
              width={1000}
              height={1000}
              className="object-contain w-full h-auto rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
