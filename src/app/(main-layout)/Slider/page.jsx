"use client"
 import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import img1 from "../../../../public/slider img/01.jpg";
import img2 from "../../../../public/slider img/02.jpg";
import img3 from "../../../../public/slider img/03.png";
import img4 from "../../../../public/slider img/04.jpg";
import img5 from "../../../../public/slider img/05.png";
import img6 from "../../../../public/slider img/06.png";

const Page = () => {
  return (
    <Carousel>
      <div>
        <Image src={img1} alt="Image 1" />
      </div>
      <div>
        <Image src={img2} alt="Image 2" />
      </div>
      <div>
        <Image src={img3} alt="Image 3" />
      </div>
      <div>
        <Image src={img4} alt="Image 4" />
      </div>
      <div>
        <Image src={img5} alt="Image 5" />
      </div>
      <div>
        <Image src={img6} alt="Image 6" />
      </div>
    </Carousel>
  );
};

export default Page;
