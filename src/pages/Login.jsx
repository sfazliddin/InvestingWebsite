import "bootstrap/dist/css/bootstrap.css";

const Login = () => {
  return (
    <htmlForm>
      <fieldset>
        <div className="htmlForm-group row"></div>
        <div className="htmlForm-group">
          <label htmlFor="exampleInputEmail1" className="htmlForm-label mt-4">
            Email address
          </label>
          <input
            type="email"
            className="htmlForm-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="htmlForm-group">
          <label
            htmlFor="exampleInputPassword1"
            className="htmlForm-label mt-4"
          >
            Password
          </label>
          <input
            type="password"
            className="htmlForm-control"
            id="exampleInputPassword1"
            placeholder="Password"
            autoComplete="off"
          />
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Keep me logged in for up to 30 days
          </label>
        </div>
        <div>
          <a href="/forgotPassword">Forgot your password?</a>
          <br />
          <a href="/forgotEmail">Forgot your email address?</a>
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </fieldset>
      <h3>or</h3>
      <a href="/register">Create an account</a>
    </htmlForm>
  );
};
export default Login;
