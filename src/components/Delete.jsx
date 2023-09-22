import axios from "axios";

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
export default Delete;
