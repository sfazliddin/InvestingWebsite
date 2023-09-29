/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Select from "react-select";
import { numbersHost, numbersKey, numbersUrl } from "../utils/numbersApi";
const url = numbersUrl;
const RandomFact = () => {
  const [fact, setFact] = useState(null);
  const [type, setType] = useState(null);
  const factTypes = [
    { value: "math", label: "Math" },
    { value: "trivia", label: "Trivia" },
    { value: "date", label: "Date" },
    { value: "year", label: "Year" },
  ];
  const handleChange = (selectedOption) => {
    setType(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };
  const getFact = async () => {
    const randomUrl = `${url}/random/${type.value}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": numbersKey,
        "X-RapidAPI-Host": numbersHost,
      },
    };
    try {
      const response = await fetch(randomUrl, options, type);
      const result = await response.text();
      setFact(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getFact();
    handleChange();
  }, [type]);
  return (
    <>
      <div className="container">
        <div className="mt-5 m-auto w-50">
          <Select
            options={factTypes}
            onChange={handleChange}
            autoFocus={true}
            // styles={customStyles}
          />
        </div>
      </div>
      <p>{fact}</p>
    </>
  );
};
const DateFact = () => {
  const [month, setMonth] = useState(null);
  const [day, setDay] = useState(null);
  const [dateFact, setDateFact] = useState(null);
  const getDateFact = async () => {
    const dateUrl = `${url}/${month}/${day}/date`;
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
        <div>
          <input
            required
            type="number"
            id="month"
            value={month}
            onChange={updateMonth}
          />
          <label htmlFor="month">Month</label>
        </div>
        <div>
          <input
            required
            type="number"
            id="day"
            value={day}
            onChange={updateDay}
          />
          <label htmlFor="day">Day</label>
        </div>
        <button type="submit">get date fact</button>
      </form>
      <h4>{dateFact}</h4>
    </>
  );
};
const MathFact = () => {};
const TriviaFact = () => {};
const YearFact = () => {};

export { RandomFact, DateFact, MathFact, TriviaFact, YearFact };
