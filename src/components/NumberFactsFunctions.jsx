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
        <div className="col-10 col-md-8 col-lg-6 d-flex flex-column mx-auto bg-primary rounded p-2 mb-5">
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
            className="btn btn-lg btn-dark col-6 mx-auto m-2"
          >
            get date fact
          </button>

          <h4>{dateFact}</h4>
        </div>
      </form>
    </>
  );
};
const MathFact = () => {
  const [number, setNumber] = useState(null);
  const [mathFact, setMathFact] = useState(null);
  const getMathFact = async () => {
    const mathUrl = `${url}/${number}/math`;
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
        <div className="col-10 col-md-8 col-lg-6 d-flex flex-column mx-auto bg-primary rounded p-2 mb-5">
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
            className="btn btn-lg btn-dark col-6 mx-auto m-2"
          >
            get math fact
          </button>

          <h4>{mathFact}</h4>
        </div>
      </form>
    </>
  );
};
const TriviaFact = () => {
  const [number, setNumber] = useState(null);
  const [triviaFact, setTriviaFact] = useState(null);
  const getTriviaFact = async () => {
    const triviaUrl = `${url}/${number}/trivia`;
    const options = {
      method: "GET",

      headers: {
        "X-RapidAPI-Key": numbersKey,
        "X-RapidAPI-Host": numbersHost,
      },
    };

    try {
      const response = await fetch(triviaUrl, options);
      const result = await response.text();
      console.log(result);
      setTriviaFact(result);
    } catch (error) {
      console.error(error);
    }
  };
  const submit = async (e) => {
    e.preventDefault();
    try {
      const isNumber = !null;

      isNumber ? getTriviaFact() : alert("Please Put in a Valid Number");
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
        <div className="col-10 col-md-8 col-lg-6 d-flex flex-column mx-auto bg-primary rounded p-2 mb-5">
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
            className="btn btn-lg btn-dark col-6 mx-auto m-2"
          >
            get trivia fact
          </button>

          <h4>{triviaFact}</h4>
        </div>
      </form>
    </>
  );
};
const YearFact = () => {
  const [number, setNumber] = useState(null);
  const [yearFact, setYearFact] = useState(null);
  const getYearFact = async () => {
    const yearUrl = `${url}/${number}/year`;
    const options = {
      method: "GET",

      headers: {
        "X-RapidAPI-Key": numbersKey,
        "X-RapidAPI-Host": numbersHost,
      },
    };

    try {
      const response = await fetch(yearUrl, options);
      const result = await response.text();
      console.log(result);
      setYearFact(result);
    } catch (error) {
      console.error(error);
    }
  };
  const submit = async (e) => {
    e.preventDefault();
    try {
      const isNumber = !null;

      isNumber ? getYearFact() : alert("Please Put in a Valid Year");
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
        <div className="col-10 col-md-8 col-lg-6 d-flex flex-column mx-auto bg-primary rounded p-2 mb-5">
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
              Year
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-lg btn-dark col-6 mx-auto m-2"
          >
            get year fact
          </button>

          <h4>{yearFact}</h4>
        </div>
      </form>
    </>
  );
};

export { RandomFact, DateFact, MathFact, TriviaFact, YearFact };
