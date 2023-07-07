"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const Slider = () => {
  return (
    <Carousel showStatus={false} showThumbs={false} autoPlay infiniteLoop>
      <div className="h-auto">
        <Image
          src="https://i.ibb.co/rcWCcNj/03.png"
          alt="Image 1"
          layout="responsive"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>
      <div className="h-auto">
        <Image
          src="https://i.ibb.co/Hzc2mHv/04.jpg"
          alt="Image 2"
          layout="responsive"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>
      <div className="h-auto">
        <Image
          src="https://i.ibb.co/TTz4KJF/05.png"
          alt="Image 3"
          layout="responsive"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>
      <div className="h-auto">
        <Image
          src="https://i.ibb.co/sKsdxQf/06.png"
          alt="Image 4"
          layout="responsive"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>
    </Carousel>
  );
};

export default Slider;
