"use client"
import { usePathname } from 'next/navigation';
import React from 'react';

const SubNavText = () => {
    const path = usePathname();
    return (
        <p className="font-semibold">{path == '/shop' ? "Filter & Categories" : "Categories"}</p>
    );
};

export default SubNavText;