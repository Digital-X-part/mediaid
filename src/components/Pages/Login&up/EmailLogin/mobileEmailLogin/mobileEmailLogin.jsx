import React from "react";
import EmailLogin from "../emailLogin";

const MobileEmailLogin = ({ toggleEmailLoginModal }) => {
  return (
    <div className="fixed z-[100] h-fit bg-white rounded-xl bottom-30 w-full p-5">
      <div className="w-full relative h-5">
        <button
          onClick={toggleEmailLoginModal}
          className="absolute -top-2 -right-1 font-bold"
        >
          ✕
        </button>
      </div>
      <EmailLogin toggleEmailLoginModal={toggleEmailLoginModal}></EmailLogin>
    </div>
  );
};

export default MobileEmailLogin;
