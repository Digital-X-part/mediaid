import React from "react";
import LoginMethods from "../LoginMethods/loginMethods";

const MobileModal = ({ toggleLoginModal, toggleEmailLoginModal }) => {
  return (
    <div className="fixed bottom-0 min-h-[200px] h-fit w-full z-[100] bg-white rounded-t-xl p-5">
      <LoginMethods toggleLoginModal={toggleLoginModal} desktop={false} toggleEmailLoginModal={toggleEmailLoginModal}></LoginMethods>
    </div>
  );
};

export default MobileModal;
