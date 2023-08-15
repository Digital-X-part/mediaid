import React from 'react';

const SubNavText = () => {
    return (
        <p className="font-semibold">{'path' == '/shop' ? "Filter & Categories" : "Categories"}</p>
    );
};

export default SubNavText;