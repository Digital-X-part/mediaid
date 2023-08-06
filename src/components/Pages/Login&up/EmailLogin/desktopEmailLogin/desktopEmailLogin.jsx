import EmailLogin from "../emailLogin";

const DesktopEmailLogin = () => {
  return (
    <dialog id="email_login_modal_1" className="modal">
      <form method="dialog" className="modal-box">
        <EmailLogin></EmailLogin>
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
    </dialog>
  );
};

export default DesktopEmailLogin;
