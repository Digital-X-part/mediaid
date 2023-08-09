import EmailLogin from "../emailLogin";

const DesktopEmailLogin = () => {
  return (
    <div id="email_login_modal_1" className="modal">
      <form method="dialog" className="modal-box">
        <EmailLogin></EmailLogin>
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
    </div>
  );
};

export default DesktopEmailLogin;