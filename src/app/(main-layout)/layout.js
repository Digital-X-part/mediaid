import Footer from '@/components/Shared/Footer/Footer';
import BottomNavbar from '@/components/Shared/Navbar/BottomNavbar';
import TopNavbar from '@/components/Shared/Navbar/TopNavbar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <TopNavbar></TopNavbar>
            <BottomNavbar></BottomNavbar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default layout;