import LoginMethods from "../LoginMethods/loginMethods";

const Login = () => {
  return (
    <dialog id="login_modal_1" className="modal">
      <div method="dialog" className="modal-box">
        <LoginMethods desktop={true}></LoginMethods>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Login;
