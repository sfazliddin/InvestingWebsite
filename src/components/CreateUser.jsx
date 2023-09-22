import axios from "axios";

const CreateUser = (email, username, password, confirmPassword) => {
  const makeUser = async () => {
    console.log(email);
    const url = "https://api-generator.retool.com/lQQWDe/user_info";
    axios
      .post(url, {
        email: email,
        username: username,
        password: password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  //   const updateEmail =  email;
  //   const updateUserName =  username;
  //   const updatePassword =  password;
  //   let responseOutput = <></>;
  const submit = async (e) => {
    e.preventDefault();
    try {
      const matches = password === confirmPassword;
      matches
        ? makeUser() && alert("PASSWORD MATCHES")
        : alert("PASSWORD DOES NOT MATCH");
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <button
      type="submit"
      className="btn btn-lg btn-dark col-6 mx-auto m-2"
      onClick={submit}
    >
      Sign up
    </button>
  );
};

export default CreateUser;
