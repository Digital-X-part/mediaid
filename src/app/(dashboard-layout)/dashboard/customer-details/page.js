import CustomerAction from '@/components/Pages/Dashboard/CustomerDetails/CustomerAction';
import React from 'react';
import { FaCheck, FaDollarSign, FaPencilAlt, FaRegUser } from "react-icons/fa";

const CustomerDetails = () => {
    return (
        <div>
            <div className="text-sm breadcrumbs">
                <ul>
                    <li><a>Dashboard</a></li>
                    <li>Customer Details</li>
                </ul>
            </div>
            <div className='w-full min-h-screen p-2'>
                <div className='h-fit w-full bg-slate-50 rounded p-3 shadow-md'>
                    <h1 className='text-base md:text-lg font-semibold text-gray-700'>Nahid Ahmed (<span className='text-blue-500'>{'example@gmail.com'}</span>)</h1>
                    <CustomerAction></CustomerAction>
                    <hr className='my-4' />
                    <div className='flex items-center gap-2'>
                        <FaRegUser className='w-5 h-5 text-green-500'></FaRegUser>
                        <div>
                            <h1 className='text-sm md:text-base  text-gray-500'>Customer was created on</h1>
                            <p className='text-xs text-gray-500'>Jan 12, 11:13 PM</p>
                        </div>
                    </div>
                </div>
                <div className='h-fit w-full bg-slate-50 rounded p-3 shadow-md mt-4'>
                    <div className='w-full flex justify-between items-center'>
                        <h1 className='text-base md:text-lg font-semibold text-gray-600'>Details</h1>
                        <button className='text-sm font-medium text-gray-600 px-3  py-1 border rounded-md flex items-center gap-1 hover:shadow-lg duration-200'><FaPencilAlt className='w-3 h-3' />Update Details</button>
                    </div>
                    <div className='bg-white w-full my-3 border-y px-2 py-3 grid md:grid-cols-2 h-full gap-y-8 md:gap-y-0'>
                        <div>
                            <h1 className='text-sm font-medium text-gray-600 uppercase'>Account Information</h1>
                            <div className='grid grid-cols-2 lg:grid-cols-3 mt-3 h-[78%]'>
                                <div className='text-xs md:text-sm font-semibold text-gray-500 flex flex-col justify-between'>
                                    <p>ID</p>
                                    <p>Created</p>
                                    <p>Email</p>
                                    <p>Description</p>
                                    <p>VAT Number</p>
                                </div>
                                <div className='text-xs md:text-sm text-gray-500 flex flex-col justify-between'>
                                    <p>123456789</p>
                                    <p>Jan 12, 11:13 PM</p>
                                    <p>nahidahmedsd47@gmail.com</p>
                                    <p className='text-gray-400'>No description provided.</p>
                                    <p className='text-gray-400'>No VAT number provided.</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-full '>
                            <h1 className='text-sm font-medium text-gray-600 uppercase'>Billing Information</h1>
                            <div className='grid grid-cols-2 lg:grid-cols-3 mt-3 h-[78%] '>
                                <div className='text-xs md:text-sm font-semibold text-gray-500 flex flex-col justify-between '>
                                    <p>Send To Email</p>
                                    <p>Address</p>
                                    <p>Phone</p>
                                    <p>Invoice prefix</p>
                                </div>
                                <div className='text-xs md:text-sm text-gray-500 flex flex-col justify-between'>
                                    <p>nahidahmedsd47@gmail.com</p>
                                    <p>8962 Lafayette St.Oswego, NY</p>
                                    <p>+1-202-555-0110</p>
                                    <p className='text-gray-400'>7C23435</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-end gap-3'>
                    <button className='text-sm font-medium text-gray-600 px-3  py-1 border rounded-md flex items-center gap-1 hover:shadow-lg duration-200'><FaDollarSign className='w-3 h-3' />Refund</button>
                    <button className='text-sm font-medium text-gray-600 px-3  py-1 border rounded-md flex items-center gap-1 hover:shadow-lg duration-200'><FaCheck className='w-3 h-3' />Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerDetails;