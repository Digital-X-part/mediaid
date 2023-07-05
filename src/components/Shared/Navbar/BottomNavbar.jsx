import React from 'react';
import { BsHouseDoorFill, BsPerson, BsTagsFill, BsBagFill } from "react-icons/bs";

const BottomNavbar = () => {
    return (
        <div className='w-full md:hidden py-2 px-5 bg-slate-300 fixed bottom-0 flex items-center justify-between'>
            <div className='flex flex-col items-center justify-center'>
                <BsHouseDoorFill className='w-5 h-5 text-black' />
                <p className='text-xs font-medium'>Home</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <BsBagFill className='w-5 h-5 text-black' />
                <p className='text-xs font-medium'>Shop</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <BsTagsFill className='w-5 h-5 text-black' />
                <p className='text-xs font-medium'>Offer</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <BsPerson className='w-5 h-5 text-black' />
                <p className='text-xs font-medium'>Account</p>
            </div>
        </div>
    );
};

export default BottomNavbar;