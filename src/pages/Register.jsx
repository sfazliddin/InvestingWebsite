import axios from "axios";
import { useEffect, useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cPass, setCPass] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    console.log(email);
  }, [email]);
  const makeUser = async () => {
    console.log(email);
    const url = "https://api-generator.retool.com/lQQWDe/user_info";
    axios
      .post(url, {
        email: email,
        username: userName,
        password: pass,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setEmail("");
    setUserName("");
    setPass("");
  };

  const updateEmail = (e) => setEmail(e.target.value);
  const updateUserName = (e) => setUserName(e.target.value);
  const updatePassword = (e) => setPass(e.target.value);
  let responseOutput = <></>;

  const submit = async (e) => {
    e.preventDefault();
    try {
      const matches = pass === cPass;
      matches
        ? makeUser() && alert("PASSWORD MATCHES")
        : alert("PASSWORD DOES NOT MATCH");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="d-flex justify-content-center flex-column">
      <div className="col-12 my-3 text-center">
        <h1 className="my-3">
          <strong>Invest IQ</strong> Sign up
        </h1>
      </div>
      <form onSubmit={submit}>
        {responseOutput}
        <div className="col-10 col-md-8 col-lg-6 d-flex flex-column mx-auto bg-primary rounded p-2 mb-5">
          <div className="form-floating p-1 my-1">
            <input
              required
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              value={email}
              onChange={updateEmail}
            />
            <label htmlFor="email" className="ps-3">
              Email
            </label>
          </div>
          <div className="form-floating p-1 my-1">
            <input
              required
              type="text"
              className="form-control"
              id="userName"
              placeholder="userName"
              value={userName}
              onChange={updateUserName}
            />
            <label htmlFor="userName" className="ps-3">
              User Name
            </label>
          </div>

          <div className="form-floating p-1 my-1">
            <input
              required
              type="password"
              className="form-control"
              id="pass"
              placeholder="Password"
              value={pass}
              onChange={updatePassword}
            />
            <label htmlFor="pass" className="ps-3">
              Password
            </label>
          </div>
          <div className="form-floating p-1 my-1">
            <input
              required
              type="password"
              className="form-control"
              id="comparePass"
              placeholder="Password"
              onChange={(e) => {
                setCPass(e.target.value);
              }}
            />
            <label htmlFor="comparePass" className="ps-3">
              Re-Enter Password
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-lg btn-dark col-6 mx-auto m-2"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};
export default Register;
