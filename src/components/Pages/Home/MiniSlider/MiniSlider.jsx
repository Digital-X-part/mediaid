import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const miniCategoryData = [
  {
    id: 1,
    imgUrl: "https://i.ibb.co/rcWCcNj/03.png",
    categoryTitle: "Women care",
  },
  {
    id: 2,
    imgUrl: "https://i.ibb.co/Hzc2mHv/04.jpg",
    categoryTitle: "Herbel",
  },
  {
    id: 3,
    imgUrl: "https://i.ibb.co/rcWCcNj/03.png",
    categoryTitle: "Women care",
  },
  {
    id: 4,
    imgUrl: "https://i.ibb.co/Hzc2mHv/04.jpg",
    categoryTitle: "Devices",
  },
  {
    id: 5,
    imgUrl: "https://i.ibb.co/rcWCcNj/03.png",
    categoryTitle: "Women care",
  },
  {
    id: 6,
    imgUrl: "https://i.ibb.co/Hzc2mHv/04.jpg",
    categoryTitle: "Herbel",
  },
  {
    id: 7,
    imgUrl: "https://i.ibb.co/rcWCcNj/03.png",
    categoryTitle: "Covid-19",
  },
  {
    id: 8,
    imgUrl: "https://i.ibb.co/Hzc2mHv/04.jpg",
    categoryTitle: "Herbel",
  },
  {
    id: 9,
    imgUrl: "https://i.ibb.co/rcWCcNj/03.png",
    categoryTitle: "Devices",
  },
  {
    id: 10,
    imgUrl: "https://i.ibb.co/Hzc2mHv/04.jpg",
    categoryTitle: "Covid-19",
  },
];

export default function App() {
  return (
    <div className="mt-2 mx-1">
      <div>
        <h5>Check Your </h5>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={1}
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
        className="mySwiper ">
        {miniCategoryData.map((singleCategory) => (
          <SwiperSlide key={singleCategory.id}>
            <Image
              src={singleCategory.imgUrl}
              alt="Image 1"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
            <p className="text-xs md:text-sm text-center font-medium text-neutral-600">
              {singleCategory.categoryTitle}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
