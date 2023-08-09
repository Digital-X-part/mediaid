import DesktopEmailLogin from "../EmailLogin/desktopEmailLogin/desktopEmailLogin";
import LoginMethods from "../LoginMethods/loginMethods";

const Login = () => {
  return (
    <dialog id="login_modal_1" className="modal">
      <form method="dialog" className="modal-box">
        <LoginMethods desktop={true}></LoginMethods>
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <DesktopEmailLogin />
    </dialog>
  );
};

export default Login;
