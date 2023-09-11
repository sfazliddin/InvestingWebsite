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
const RegisterButton = () => {
  return (
    <a href="/register">
      <button type="button" className="btn btn-primary">
        Register
      </button>
    </a>
  );
};
export { LoginButton, RegisterButton };
