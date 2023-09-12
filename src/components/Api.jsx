import axios from "axios";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

const ApiComponent = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUserInfo = async () => {
    setLoading(true);
    setError(false);
    const request = await axios.get(
      "https://api-generator.retool.com/lQQWDe/user_info"
    );
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
        <div className="max-w-[230px]">
          <Skeleton count="10" />
        </div>
      )}
      {!error && !loading && (
        <>
          Users:
          {userInfo.map(({ id, email, username, password }) => {
            return (
              <div key={id}>
                <h4>
                  {id} : {email} : {username} : {password}
                </h4>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default ApiComponent;