import React from "react";
import LoginMethods from "../LoginMethods/loginMethods";

const Login = () => {
  return (
    <dialog id="login_modal_1" className="modal">
      <form method="dialog" className="modal-box">
        <LoginMethods></LoginMethods>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Login;
