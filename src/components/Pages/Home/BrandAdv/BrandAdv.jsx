import Image from "next/image";
import bannerAdv from "../../../../assests/bannerAdv.jpg";
const BrandAdv = () => {
  return (
    <div className="container mx-auto px-2 md:px-0 ">
      <div className="relative group overflow-hidden rounded-lg ">
        <Image src={bannerAdv} alt="" className="" />
        <div className="z-20  absolute p-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center space-y-4">
          <h1 className="relative hidden md:block left-[calc(100%+20rem)] duration-500 group-hover:left-0 text-3xl md:text-5xl font-bold text-white">
            Brand Adv
          </h1>
          <p className=" hidden md:block relative right-[calc(100%+20rem)] duration-500 group-hover:right-0 text-slate-100 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </p>
          <button className="relative top-[40rem]  group-hover:top-0 duration-500 bg-white rounded-md transition-all  text-black px-4 py-2 mt-4 hover:bg-black hover:text-white">
            Shop Now
          </button>
        </div>

        <div className="absolute w-full h-full top-0 left-0 bg-black group-hover:bg-opacity-50 bg-opacity-0 transition-all duration-500 -z-0"></div>
      </div>
    </div>
  );
};

export default BrandAdv;
