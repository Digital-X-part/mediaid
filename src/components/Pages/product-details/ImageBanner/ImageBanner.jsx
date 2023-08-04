"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Thumbs } from "swiper/modules";
import "./styles.css";
import Image from "next/image";
import { useState } from "react";

const ImageBanner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const productImages = [
    {
      id: 1,
      url: "https://i.ibb.co/rcWCcNj/03.png",
      name: "Product Image 1",
    },
    {
      id: 2,
      url: "https://i.ibb.co/rcWCcNj/03.png",
      name: "Product Image 2",
    },
    {
      id: 3,
      url: "https://i.ibb.co/rcWCcNj/03.png",
      name: "Product Image 3",
    },
    {
      id: 4,
      url: "https://i.ibb.co/rcWCcNj/03.png",
      name: "Product Image 3",
    },
    {
      id: 5,
      url: "https://i.ibb.co/rcWCcNj/03.png",
      name: "Product Image 3",
    },
    {
      id: 6,
      url: "https://i.ibb.co/rcWCcNj/03.png",
      name: "Product Image 3",
    },
    {
      id: 7,
      url: "https://i.ibb.co/rcWCcNj/03.png",
      name: "Product Image 3",
    },
    {
      id: 8,
      url: "https://i.ibb.co/rcWCcNj/03.png",
      name: "Product Image 3",
    },
  ];
  return (
    <div className="mb-12 h-fit w-full ">
      <Swiper
        style={{
          "--swiper-pagination-color": "#A0AEC0",
        }}
        loop={true}
        spaceBetween={0}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2">
        {productImages.map((img) => (
          <SwiperSlide key={img.id}>
            <Image height={600} width={1100} alt={img.name} src={img.url} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* product sort thumbs */}
      <div className="px-2">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={8}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="mySwiper ">
          {productImages.map((img) => (
            <SwiperSlide key={img.id}>
              <Image height={80} width={200} alt={img.name} src={img.url} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageBanner;
