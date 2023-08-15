"use client"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";

const sliderBannerImage = [
  "https://i.ibb.co/WBpM26Z/Screenshot-2023-07-31-164430.png",
  "https://i.ibb.co/f8VmGGj/Screenshot-2023-07-31-164329.png",
];

export default function Slider() {

  return (
    <div className="mt-2 md:h-[400px]">
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
        className="mySwiper w-full h-full rounded-md">
        {sliderBannerImage.map((imageLink, index) => (
          <SwiperSlide key={index}>
            <Image
              src={imageLink}
              alt="Image 1"
              width={1000}
              height={1000}
              className="object-cover w-full h-full rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
