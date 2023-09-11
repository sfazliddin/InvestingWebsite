// import "bootswatch/dist/zephyr/bootstrap.min.css";

const LoginButton = () => {
  return (
    <a href="/login">
      <button type="button" className="btn btn-secondary">
        Login
      </button>
    </a>
  );
};
const SignupButton = () => {
  return (
    <a href="/register">
      <button type="button" className="btn btn-primary">
        Sign up
      </button>
    </a>
  );
};
export { LoginButton, SignupButton };
