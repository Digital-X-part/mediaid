import Banner from '@/components/Pages/Home/Banner';
import BrandAdv from '@/components/Pages/Home/BrandAdv/BrandAdv';
import OurBrands from '@/components/Pages/Home/OurBrands/OurBrands';
import Slider from '@/components/Pages/Home/Slider/Slider';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            {/* all home page components will be place here */}
            <Slider />
            <Banner></Banner>
            <OurBrands />
            <BrandAdv />
        </div>
    );
};

export default HomePage;