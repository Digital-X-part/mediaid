import React from "react";
import EmailLogin from "../emailLogin";

const DesktopEmailLogin = () => {
  return (
    <dialog id="email_login_modal_1" className="modal">
      <div method="dialog" className="modal-box">
        <EmailLogin isDesktop={true}></EmailLogin>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default DesktopEmailLogin;
