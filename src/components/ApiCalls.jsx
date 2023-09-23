import axios from "axios";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Popup from "reactjs-popup";
const url = "https://api-generator.retool.com/lQQWDe/user_info";

const GetInfo = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUserInfo = async () => {
    setLoading(true);
    setError(false);
    const request = await axios.get(url);
    setLoading(false);
    setUserInfo(request.data);
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <>
      <h1>This is the Api Test</h1>
      {/* {error && <ErrorAlert>{error}</ErrorAlert>} */}
      {!error && loading && (
        <div>
          <Skeleton count="10" />
        </div>
      )}
      {!error && !loading && (
        <>
          <h1> Users:</h1>
          {userInfo.map(({ id, email, username, password }) => {
            return (
              <div key={id}>
                {" "}
                <h4>
                  {id} : {email} : {username} : {password}
                  <Delete id={id} />
                  <div className="flex-initial w-10/12">
                    <Popup
                      trigger={
                        <button className="rounded-full bg-green-600 p-3">
                          Edit Account
                        </button>
                      }
                      position={"right center"}
                    >
                      <UpdateAccount
                        id={id}
                        email={email}
                        username={username}
                        password={password}
                      />
                    </Popup>
                  </div>
                </h4>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};
// eslint-disable-next-line react/prop-types
const Delete = ({ id }) => {
  const deleteUrl = `https://api-generator.retool.com/lQQWDe/user_info/${id}`;
  const deleteAccount = async () => {
    axios.delete(deleteUrl).then(function (response) {
      console.log(response);
    });
  };
  return (
    <>
      <button className="rounded-full bg-red-600 p-3" onClick={deleteAccount}>
        DELETE ACCOUNT
      </button>
    </>
  );
};
const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [userName, setUserName] = useState("");

  useEffect(() => {
    console.log(email);
  }, [email]);
  const makeUser = async () => {
    console.log(email);

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
  console.log(email);
  const updateEmail = (e) => setEmail(e.target.value);
  const updateUserName = (e) => setUserName(e.target.value);
  const updatePassword = (e) => setPass(e.target.value);
  let responseOutput = <></>;

  const submit = async (e) => {
    e.preventDefault();
    try {
      userName && pass
        ? makeUser() && alert("USER HAS BEEN CREATED")
        : alert("PLEASE ENTER USERNAME AND PASSWORD");
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div className="d-flex justify-content-center flex-column">
      <div className="col-12 my-3 text-center">
        <h1 className="my-3">
          <strong>Create an Account</strong>
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

          <button
            type="submit"
            className="btn btn-lg btn-dark col-6 mx-auto m-2"
          >
            CREATE
          </button>
        </div>
      </form>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const UpdateAccount = ({ id, email, username, password }) => {
  const [currentEmail, setEmail] = useState(email);
  const [currentUsername, setUsername] = useState(username);
  const [currentPassword, setPassword] = useState(password);
  const url = `https://api-generator.retool.com/lQQWDe/user_info/${id}`;
  const patchAccount = async () => {
    console.log(currentEmail);
    console.log(currentUsername);
    console.log(currentPassword);

    axios
      .patch(url, {
        email: currentEmail,
        username: currentUsername,
        password: currentPassword,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setEmail("");
    setUsername("");
    setPassword("");
  };
  const submit = (e) => {
    e.preventDefault();
    if (currentEmail && currentUsername && currentPassword) {
      patchAccount();
    }
  };
  const updateEmail = (e) => setEmail(e.target.value);
  const updateUsername = (e) => setUsername(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);

  return (
    <form onSubmit={submit}>
      <input type="email" value={currentEmail} onChange={updateEmail} />
      <input type="text" value={currentUsername} onChange={updateUsername} />
      <input
        type="password"
        value={currentPassword}
        onChange={updatePassword}
      />
      <input className="rounded-full bg-blue-600 p-3" type="submit" />
    </form>
  );
};

export { GetInfo, Delete, CreateAccount, UpdateAccount };
