
import { useRouter } from 'next/router';
import React from 'react';

const SubNavText = () => {
    const router = useRouter()
    const path = router.pathname
    console.log(path)
    return (
        <p className="font-semibold">Categories</p>
    );
};

export default SubNavText;