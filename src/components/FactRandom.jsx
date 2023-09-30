/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { numbersHost, numbersKey, numbersUrl } from "../utils/numbersApi";
import Select from "react-select";

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
    const randomUrl = `${numbersUrl}/random/${type.value}`;
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
        <div className="mt-5 m-auto w-50 ">
          <Select
            options={factTypes}
            onChange={handleChange}
            autoFocus={true}
            placeholder="Pick a Fact Type"
          />
          <p>{fact}</p>
        </div>
      </div>
    </>
  );
};

export default RandomFact;
