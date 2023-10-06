/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { numbersHost, numbersKey, numbersUrl } from "../utils/numbersApi";

const MathFact = () => {
  const [number, setNumber] = useState(null);
  const [mathFact, setMathFact] = useState(null);

  const getMathFact = async () => {
    const mathUrl = `${numbersUrl}/${number}/math`;
    const options = {
      method: "GET",

      headers: {
        "X-RapidAPI-Key": numbersKey,
        "X-RapidAPI-Host": numbersHost,
      },
    };

    try {
      const response = await fetch(mathUrl, options);
      const result = await response.text();
      console.log(result);
      setMathFact(result);
    } catch (error) {
      console.error(error);
    }
  };
  const submit = async (e) => {
    e.preventDefault();
    try {
      const isNumber = !null;

      isNumber ? getMathFact() : alert("Please Put in a Valid Number");
    } catch (err) {
      console.error(err.message);
    }
  };
  const updateNumber = (e) => setNumber(e.target.value);
  let responseOutput = <></>;

  return (
    <>
      <form onSubmit={submit}>
        {responseOutput}
        <div className="col-10 col-md-8 col-lg-8 d-flex flex-column mx-auto bg-primary rounded p-2 mb-5">
          <div className="form-floating p-1 my-1">
            <input
              required
              type="number"
              className="form-control"
              id="number"
              value={number}
              onChange={updateNumber}
            />
            <label htmlFor="month" className="ps-3">
              Number
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-lg btn-dark col-8 mx-auto m-2"
          >
            Get Math Fact
          </button>

          <h4>{mathFact}</h4>
        </div>
      </form>
    </>
  );
};
export default MathFact;
