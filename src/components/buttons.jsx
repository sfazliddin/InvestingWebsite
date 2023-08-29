import "bootstrap/dist/css/bootstrap.css";

const LoginButton = () => {
  return (
    <a href="/login">
      <button type="button" className="btn btn-secondary" to="/login">
        Login
      </button>
    </a>
  );
};
const SignupButton = () => {
  return (
    <a href="/register">
      <button type="button" className="btn btn-primary" to="/register">
        Sign up
      </button>
    </a>
  );
};
export { LoginButton, SignupButton };
