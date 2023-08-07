"use client"
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const OrderedProductTable = ({ orderDetails }) => {
    // console.log(orderDetails);
    const [subtotal, setSubtotal] = useState(0);
    useEffect(() => {
        let total = 0;
        orderDetails?.forEach(product => {
            total += product?.price * product?.quantity;
        });
        setSubtotal(total);
    }, [orderDetails])
    return (
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Products</th>
              <th className="text-right">Quantity</th>
              <th className="text-right">Price</th>
              <th className="text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {orderDetails?.map((product, index) => (
              <>
                <tr>
                  <th className="font-medium">{index + 1}</th>
                  <td>
                    <div>
                      <p className="text-base font-semibold text-gray-600">
                        {product?.name}
                      </p>
                      <p className="text-sm text-slate-500">model - {product?.skuId}</p>
                    </div>
                  </td>
                  <td className="text-right">{product?.quantity}</td>
                  <td className="text-right">${product?.price}</td>
                  <td className="text-right">
                    ${product?.price * product?.quantity}
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
        <div className="w-full h-fit flex justify-end">
          <div className="text-sm font-medium text-gray-500 text-right">
            <p>Subtotal: ${subtotal}</p>
            <p>Shipping Cost: ${60}</p>
            <hr className="my-1"></hr>
            <p className=" font-semibold">Total: ${subtotal + 60}</p>
          </div>
        </div>
      </div>
    );
};

export default OrderedProductTable;