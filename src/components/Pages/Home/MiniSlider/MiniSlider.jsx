"use client";
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function App() {
  return (
    <>
    <h4 className="font-bold text-2xl ml-1 my-3">Our Products</h4>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
           
          340: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 7,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <Image
          src="https://i.ibb.co/rcWCcNj/03.png"
          alt="Image 1"
          layout="responsive"
          width={500}
          height={500}
          className="object-contain"
        /><p className='text-xs text-center'>Women care</p></SwiperSlide>
        <SwiperSlide> <Image
          src="https://i.ibb.co/Hzc2mHv/04.jpg"
          alt="Image 1"
          layout="responsive"
          width={500}
          height={500}
          className="object-contain"
        /><p className='text-xs text-center'>Covid-19</p></SwiperSlide>
        <SwiperSlide> <Image
          src="https://i.ibb.co/Hzc2mHv/04.jpg"
          alt="Image 1"
          layout="responsive"
          width={500}
          height={500}
          className="object-contain"
        /><p className='text-xs text-center'>Devices</p></SwiperSlide>
        <SwiperSlide> <Image
          src="https://i.ibb.co/rcWCcNj/03.png"
          alt="Image 1"
          layout="responsive"
          width={500}
          height={500}
          className="object-contain"
        /><p className='text-xs text-center'>Herbel</p></SwiperSlide>
        <SwiperSlide> <Image
          src="https://i.ibb.co/rcWCcNj/03.png"
          alt="Image 1"
          layout="responsive"
          width={500}
          height={500}
          className="object-contain"
        /><p className='text-xs text-center'>Women care</p></SwiperSlide>
        <SwiperSlide> <Image
          src="https://i.ibb.co/Hzc2mHv/04.jpg"
          alt="Image 1"
          layout="responsive"
          width={500}
          height={500}
          className="object-contain"
        /><p className='text-xs text-center'>Covid-19</p></SwiperSlide>
        <SwiperSlide> <Image
          src="https://i.ibb.co/Hzc2mHv/04.jpg"
          alt="Image 1"
          layout="responsive"
          width={500}
          height={500}
          className="object-contain"
        /><p className='text-xs text-center'>Devices</p></SwiperSlide>
        <SwiperSlide> <Image
          src="https://i.ibb.co/rcWCcNj/03.png"
          alt="Image 1"
          layout="responsive"
          width={500}
          height={500}
          className="object-contain"
        /><p className='text-xs text-center'>Herbel</p></SwiperSlide>
        <SwiperSlide> <Image
          src="https://i.ibb.co/rcWCcNj/03.png"
          alt="Image 1"
          layout="responsive"
          width={500}
          height={500}
          className="object-contain"
        /><p className='text-xs text-center'>Women care</p></SwiperSlide>
        <SwiperSlide> <Image
          src="https://i.ibb.co/Hzc2mHv/04.jpg"
          alt="Image 1"
          layout="responsive"
          width={500}
          height={500}
          className="object-contain"
        /><p className='text-xs text-center'>Covid-19</p></SwiperSlide>
        <SwiperSlide> <Image
          src="https://i.ibb.co/Hzc2mHv/04.jpg"
          alt="Image 1"
          layout="responsive"
          width={500}
          height={500}
          className="object-contain"
        /><p className='text-xs text-center'>Devices</p></SwiperSlide>
        <SwiperSlide> <Image
          src="https://i.ibb.co/rcWCcNj/03.png"
          alt="Image 1"
          layout="responsive"
          width={500}
          height={500}
          className="object-contain"
        /><p className='text-xs text-center'>Herbel</p></SwiperSlide>
        <SwiperSlide> <Image
          src="https://i.ibb.co/rcWCcNj/03.png"
          alt="Image 1"
          layout="responsive"
          width={500}
          height={500}
          className="object-contain"
        /><p className='text-xs text-center'>Women care</p></SwiperSlide>
        <SwiperSlide> <Image
          src="https://i.ibb.co/Hzc2mHv/04.jpg"
          alt="Image 1"
          layout="responsive"
          width={500}
          height={500}
          className="object-contain"
        /><p className='text-xs text-center'>Covid-19</p></SwiperSlide>
        <SwiperSlide> <Image
          src="https://i.ibb.co/Hzc2mHv/04.jpg"
          alt="Image 1"
          layout="responsive"
          width={500}
          height={500}
          className="object-contain"
        /><p className='text-xs text-center'>Devices</p></SwiperSlide>
        <SwiperSlide> <Image
          src="https://i.ibb.co/rcWCcNj/03.png"
          alt="Image 1"
          layout="responsive"
          width={500}
          height={500}
          className="object-contain"
        /><p className='text-xs text-center'>Herbel</p></SwiperSlide>
        
    
      </Swiper>
    </>
  );
}
