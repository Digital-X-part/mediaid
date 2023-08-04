import React from 'react';
import ShopProduct from '../Product/shopProduct';

const ProductsContainer = () => {
    const FlashSaleDisplayProduct = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
    return (
        <div className='grid grid-cols-2 md:grid-cols-5 my-5'>
            {
                FlashSaleDisplayProduct.map((product, index) => (
                    <ShopProduct key={index}></ShopProduct>
                ))
            }
        </div>
    );
};

export default ProductsContainer;