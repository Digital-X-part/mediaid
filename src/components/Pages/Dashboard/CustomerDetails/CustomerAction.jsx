"use client"
import React from 'react';
import { useState } from 'react';
import { FaEllipsisH, FaPlus } from 'react-icons/fa';

const CustomerAction = () => {
    const [noteShow, setNoteShow] = useState(false);
    const [actionShow, setActionShow] = useState(false);
    return (
        <div className='flex items-center gap-2 h-fit relative mt-1 w-fit'>
            <button onClick={()=> {setNoteShow(!noteShow), setActionShow(false)}} className='text-sm font-medium text-gray-600 px-3  py-1 border rounded-md flex items-center gap-1 hover:shadow-lg duration-200'><FaPlus className='w-3 h-3' />Add Note</button>
            <button onClick={()=> {setActionShow(!actionShow), setNoteShow(false)}} className='text-base font-medium text-gray-600 px-3  border h-full py-[5px] rounded-md flex items-center gap-1 hover:shadow-lg duration-200'><FaEllipsisH className='w-4 h-4' /></button>
            {
                noteShow && <div className='border w-fit h-fit  p-2 absolute top-7 bg-white shadow-md rounded-md'>
                <textarea rows={3} cols={30} className='outline-none border rounded px-2 py-1 text-sm' placeholder='Write here...'></textarea>
                <div className='flex justify-end  items-center relative'><button onClick={()=> setNoteShow(!noteShow)} className='absolute right-2 bottom-3 text-xs font-medium text-gray-600 px-3  py-1 border rounded-md flex items-center gap-1 hover:shadow-lg duration-200'>Add</button></div>
            </div>
            }
            {
                actionShow && <div className=' flex flex-col items-start  z-10 w-[150px] border  h-fit p-2 absolute top-7 -right-[80%] bg-white shadow-md rounded-md'>
                    <button onClick={()=> setActionShow(!actionShow)} className="text-gray-500 text-sm  hover:bg-slate-100 w-full text-left px-2 py-1 rounded">
                  Edit
                </button>
                    <button onClick={()=> setActionShow(!actionShow)} className="text-gray-500 text-sm  hover:bg-slate-100 w-full text-left px-2 py-1 rounded">
                  Report
                </button>
                    <button onClick={()=> setActionShow(!actionShow)} className="text-gray-500 text-sm  hover:bg-slate-100 w-full text-left px-2 py-1 rounded">
                  Archive
                </button>
                <button onClick={()=> setActionShow(!actionShow)} className="text-red-500 text-sm  hover:bg-slate-100 w-full text-left px-2 py-1 rounded">
                  Delete
                </button>
                </div>
            }
        </div>
    );
};

export default CustomerAction;