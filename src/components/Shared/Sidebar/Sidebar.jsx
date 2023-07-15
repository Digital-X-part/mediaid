import React from 'react';

const Sidebar = ({sidebarOpen}) => {
    return (
        <div className={`${sidebarOpen ? 'w-[250px]' : 'w-[120px]'} h-[90vh] fixed border border-t-0`} >
            this is side bar
        </div>
    );
};

export default Sidebar;