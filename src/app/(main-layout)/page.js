import Banner from '@/components/Pages/Home/Banner';
import OurBrands from '@/components/Pages/Home/OurBrands/OurBrands';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            {/* all home page components will be place here */}
            <Banner></Banner>
            <OurBrands />
            this is home page
        </div>
    );
};

export default HomePage;