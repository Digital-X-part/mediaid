import BestSellingProducts from "@/components/Pages/Home/BestSellingProducts/BestSellingProducts";
import BrandAdv from "@/components/Pages/Home/BrandAdv/BrandAdv";
import FlashSale from "@/components/Pages/Home/FlashSale/FlashSale";
import OurBrands from "@/components/Pages/Home/OurBrands/OurBrands";
import PushProducts from "@/components/Pages/Home/PushProducts/PushProducts";
import Slider from "@/components/Pages/Home/Slider/Slider";
import React from "react";

const HomePage = () => {
  return (
    <div>
      {/* all home page components will be place here */}
      <Slider />
      <OurBrands />
      <BrandAdv />
      <PushProducts/>
      <FlashSale />
      <BestSellingProducts />
    </div>
  );
};

export default HomePage;
