import LoginMethods from "../LoginMethods/loginMethods";

const MobileModal = ({ toggleLoginModal, toggleEmailLoginModal }) => {
  return (
    <div className="fixed bottom-0 min-h-[200px] h-fit w-full z-[100] bg-white rounded-t-xl p-5">
      <div className="w-full relative">
        <button
          onClick={toggleLoginModal}
          className="absolute -top-2 -right-1 font-bold">
          ✕
        </button>
      </div>
      <LoginMethods
        desktop={false}
        toggleLoginModal={toggleLoginModal}
        toggleEmailLoginModal={toggleEmailLoginModal}></LoginMethods>
    </div>
  );
};

export default MobileModal;
