"use client";
import brandLogo from "@/data/brands.json";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const OurBrands = () => {
  return (
    <div className="my-6">
      <h4 className="md:font-extrabold md:text-2xl text-slate-700 tracking-wide">
        Our <span className="text-[#FD3851]">Brand</span>
      </h4>
      <div className="mt-4">
        <Marquee>
          {brandLogo.map((brand) => (
            <div
              key={brand.id}
              className="w-28 h-24 lg:w-32 lg:h-28 p-2 shadow-md hover:scale-90 duration-200 ml-4 border-2">
              <Image
                src={brand.brand_logo}
                width={500}
                height={100}
                alt="kd"
                className="object-cover w-full h-full "
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default OurBrands;
