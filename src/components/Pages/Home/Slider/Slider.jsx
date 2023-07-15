"use client";
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css'

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

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
        className="mySwiper"
      >
        <SwiperSlide> <Image
          src="https://i.ibb.co/rcWCcNj/03.png"
          alt="Image 1"
          layout="responsive"
          width={500}
          height={500}
          className="object-contain"
        /></SwiperSlide>
        <SwiperSlide> <Image
          src="https://i.ibb.co/Hzc2mHv/04.jpg"
          alt="Image 1"
          layout="responsive"
          width={500}
          height={500}
          className="object-contain"
        /></SwiperSlide>
        <SwiperSlide> <Image
          src="https://i.ibb.co/Hzc2mHv/04.jpg"
          alt="Image 1"
          layout="responsive"
          width={500}
          height={500}
          className="object-contain"
        /></SwiperSlide>
        <SwiperSlide> <Image
          src="https://i.ibb.co/rcWCcNj/03.png"
          alt="Image 1"
          layout="responsive"
          width={500}
          height={500}
          className="object-contain"
        /></SwiperSlide>
        <SwiperSlide> <Image
          src="https://i.ibb.co/Hzc2mHv/04.jpg"
          alt="Image 1"
          layout="responsive"
          width={500}
          height={500}
          className="object-contain"
        /></SwiperSlide>
        <SwiperSlide> <Image
          src="https://i.ibb.co/Hzc2mHv/04.jpg"
          alt="Image 1"
          layout="responsive"
          width={500}
          height={500}
          className="object-contain"
        /></SwiperSlide>
        <SwiperSlide> <Image
          src="https://i.ibb.co/rcWCcNj/03.png"
          alt="Image 1"
          layout="responsive"
          width={500}
          height={500}
          className="object-contain"
        /></SwiperSlide>
        <SwiperSlide> <Image
          src="https://i.ibb.co/Hzc2mHv/04.jpg"
          alt="Image 1"
          layout="responsive"
          width={500}
          height={500}
          className="object-contain"
        /></SwiperSlide>
        <SwiperSlide> <Image
          src="https://i.ibb.co/Hzc2mHv/04.jpg"
          alt="Image 1"
          layout="responsive"
          width={500}
          height={500}
          className="object-contain"
        /></SwiperSlide>
        <SwiperSlide> <Image
          src="https://i.ibb.co/rcWCcNj/03.png"
          alt="Image 1"
          layout="responsive"
          width={500}
          height={500}
          className="object-contain"
        /></SwiperSlide>
        <SwiperSlide> <Image
          src="https://i.ibb.co/Hzc2mHv/04.jpg"
          alt="Image 1"
          layout="responsive"
          width={500}
          height={500}
          className="object-contain"
        /></SwiperSlide>
        <SwiperSlide> <Image
          src="https://i.ibb.co/Hzc2mHv/04.jpg"
          alt="Image 1"
          layout="responsive"
          width={500}
          height={500}
          className="object-contain"
        /></SwiperSlide>
        
      </Swiper>
    </>
  );
}