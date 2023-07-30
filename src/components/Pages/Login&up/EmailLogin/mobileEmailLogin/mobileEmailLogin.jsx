import React from 'react';
import EmailLogin from '../emailLogin';

const MobileEmailLogin = ({toggleEmailLoginModal}) => {
    return (
        <div className='fixed z-[100] h-fit bg-white rounded-xl bottom-30 w-full p-5'>
            <EmailLogin toggleEmailLoginModal={toggleEmailLoginModal}></EmailLogin>
        </div>
    );
};

export default MobileEmailLogin;