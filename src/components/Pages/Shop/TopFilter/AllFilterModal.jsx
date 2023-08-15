import React from 'react';
import Filter from '../Filter/Filter';
import { BsXLg } from "react-icons/bs";

const AllFilterModal = () => {
    return (
        <div className={` w-full h-[80vh] fixed bg-white shadow-xl bottom-0 left-0 duration-300`}>
            <button className='absolute top-[6px] right-2'><BsXLg className='w-4 h-4 text-white font-bold'></BsXLg></button>
            <Filter></Filter>
        </div>
    );
};

export default AllFilterModal;