"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const sliderBannerImage = [
  "https://i.ibb.co/rcWCcNj/03.png",
  "https://i.ibb.co/Hzc2mHv/04.jpg",
  "https://i.ibb.co/rcWCcNj/03.png",
  "https://i.ibb.co/Hzc2mHv/04.jpg",
];

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full max-w-[1080px] max-h-[450px] ">
        {sliderBannerImage.map((imageLink, index) => (
          <SwiperSlide key={index}>
            <Image
              src={imageLink}
              alt="Image 1"
              layout="responsive"
              width={500}
              height={500}
              className="object-contain w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
