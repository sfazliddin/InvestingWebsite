/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Select from "react-select";
import { numbersKey, numbersUrl } from "../utils/numbersApi";

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
    const url = `${numbersUrl}/random/${type.value}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": numbersKey,
        "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url, options, type);
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

          <div className="mt-4">
            {type && (
              <>
                <p>You've selected {type.label}</p>
                <h4>{fact}</h4>
              </>
            )}
          </div>
        </div>
      </div>
      <p>{fact}</p>
    </>
  );
};
const DateFact = () => {};
const MathFact = () => {};
const TriviaFact = () => {};
const YearFact = () => {};

export { RandomFact, DateFact, MathFact, TriviaFact, YearFact };
