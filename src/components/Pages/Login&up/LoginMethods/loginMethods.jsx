import Image from "next/image";

import DesktopEmailLogin from "../EmailLogin/desktopEmailLogin/desktopEmailLogin";

const LoginMethods = ({ toggleLoginModal, desktop, toggleEmailLoginModal }) => {
  return (
    <div className="w-full h-full py-2">
      <h1 className="text-base md:text-lg font-bold text-black">
        Sign up or Log in
      </h1>
      <div className="mt-4">
        <div className="flex flex-col w-full border-opacity-50">
          <button className="w-full py-1  border rounded text-sm md:text-base font-medium text-slate-500 flex items-center justify-center gap-2">
            <Image
              src="https://i.ibb.co/5x1KjyG/googleicon-removebg-preview.png"
              alt="googleicon"
              width={15}
              height={15}
            ></Image>
            Continue With Google
          </button>
          <div className="divider text-sm md:text-base text-slate-500">OR</div>
          <button
            onClick={() => {
              desktop && window.email_login_modal_1.showModal(),
                toggleLoginModal && toggleLoginModal(),
                toggleEmailLoginModal && toggleEmailLoginModal(),
                desktop && window.login_modal_1.closeModal();
            }}
            className="w-full py-1  border rounded text-sm md:text-base font-medium text-slate-500 flex items-center justify-center gap-2"
          >
            <Image
              src="https://i.ibb.co/JjydDG7/email-removebg-preview.png"
              alt="googleicon"
              width={15}
              height={15}
            ></Image>
            Continue With Email
          </button>
        </div>
      </div>
      <DesktopEmailLogin></DesktopEmailLogin>
    </div>
  );
};

export default LoginMethods;
