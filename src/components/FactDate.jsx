/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { numbersHost, numbersKey, numbersUrl } from "../utils/numbersApi";
const DateFact = () => {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [dateFact, setDateFact] = useState(null);
  // const Fact = {
  //   fact: "date fact",
  //   time: Date.now(),
  // };
  const getDateFact = async () => {
    const dateUrl = `${numbersUrl}/${month}/${day}/date`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": numbersKey,
        "X-RapidAPI-Host": numbersHost,
      },
    };
    try {
      const response = await fetch(dateUrl, options);
      const result = await response.text();
      setDateFact(result);
    } catch (error) {
      console.error(error);
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const dayIsValid = day < 32;
      const monthIsValid = month < 13;
      const fitsParameters = dayIsValid && monthIsValid;
      fitsParameters ? getDateFact() : alert("Please Put in a Valid Date");
    } catch (err) {
      console.error(err.message);
    }
  };
  const updateDay = (e) => setDay(e.target.value);
  const updateMonth = (e) => setMonth(e.target.value);
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
              id="month"
              value={month}
              onChange={updateMonth}
            />
            <label htmlFor="month" className="ps-3">
              Month
            </label>
          </div>
          <div className="form-floating p-1 my-1">
            <input
              required
              type="number"
              className="form-control"
              id="day"
              value={day}
              onChange={updateDay}
            />
            <label htmlFor="day" className="ps-3">
              Day
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-lg btn-dark col-5 mx-auto m-2"
          >
            Get Date Fact
          </button>

          <h4>{dateFact}</h4>
        </div>
      </form>
    </>
  );
};
export default DateFact;
