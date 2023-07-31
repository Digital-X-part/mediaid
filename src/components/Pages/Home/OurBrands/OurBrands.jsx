import brandLogo from "@/data/brands.json";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const OurBrands = () => {
  return (
    <div className="my-6">
      <h4 className="font-bold text-2xl ml-1">Our Brands</h4>
      <div className="mt-4">
        <Marquee speed={40} pauseOnHover={true}>
          {brandLogo.map((brand) => (
            <div
              key={brand.id}
              className="w-28 h-24 lg:w-32 lg:h-28 p-2 shadow-md hover:scale-105 duration-200 ml-4 border border-gray-300 rounded-lg bg-white"
            >
              <Image
                src={brand.brand_logo}
                width={500}
                height={100}
                alt={brand.name}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default OurBrands;
