import React from 'react';

const SubNav = ({handleSidebarOpen}) => {
    return (
        <div className='h-10 w-full bg-white -mt-2 grid grid-cols-12 border-y'>
            <div className='col-start-1 col-end-3'>
                <button onClick={handleSidebarOpen} className='w-full h-full'>
                category
                </button>
            </div>
            <div className='col-start-3 col-end-13 flex w-full justify-between'>
                <div>
                    div1
                </div>
                <div>
                    div2
                </div>
            </div>
        </div>
    );
};

export default SubNav;