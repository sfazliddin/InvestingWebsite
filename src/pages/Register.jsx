const Register = () => {
  return (
    <htmlForm>
      <fieldset>
        <div className="htmlForm-group row"></div>
        <div>
          <label htmlFor="exampleInputEmail1" className="htmlForm-label mt-4">
            First Name
          </label>
          <input
            type="text"
            className="htmlForm-control"
            id="firstName"
            aria-describedby="firstName"
            placeholder="Enter first name"
          />
          <label htmlFor="exampleInputEmail1" className="htmlForm-label mt-4">
            Last Name
          </label>
          <input
            type="text"
            className="htmlForm-control"
            id="lastName"
            aria-describedby="lastName"
            placeholder="Enter last name"
          />
        </div>
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

        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
      </fieldset>
      <h3>or</h3>
      <a href="/login">Already have an account?</a>
    </htmlForm>
  );
};
export default Register;
