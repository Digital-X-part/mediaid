import BestSellingProducts from "@/components/Pages/Home/BestSellingProducts/BestSellingProducts";
import BrandAdv from "@/components/Pages/Home/BrandAdv/BrandAdv";
import FlashSale from "@/components/Pages/Home/FlashSale/FlashSale";
// import MiniSlider from "@/components/Pages/Home/MiniSlider/MiniSlider";
import OurBrands from "@/components/Pages/Home/OurBrands/OurBrands";
import PushProducts from "@/components/Pages/Home/PushProducts/PushProducts";
import Slider from "@/components/Pages/Home/Slider/Slider";

const HomePage = () => {
  return (
    <div>
      {/* all home page components will be place here */}
      <div className="flex gap-4">
        <div className="w-[70%]">
          <Slider />
          {/* <MiniSlider /> */}
        </div>
        <div className="w-[28%] max-h-[400px]">
          <PushProducts />
        </div>
      </div>
      <FlashSale />
      <BrandAdv />
      <BestSellingProducts />
      <OurBrands />
    </div>
  );
};

export default HomePage;
