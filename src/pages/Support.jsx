import { GetInfo, CreateAccount } from "../components/ApiCalls";

const Support = () => {
  return (
    <>
      <div>support page</div>
      {/* <button className="rounded-full bg-red-600 p-3" onClick={Delete()}>
        DELETE ACCOUNT
      </button> */}

      <CreateAccount />
      <GetInfo />
    </>
  );
};
export default Support;
