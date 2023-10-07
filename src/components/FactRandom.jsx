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
      <div className="container col-10 col-md-8 col-lg-8 bg-primary rounded py-4 d-flex flex-column mt-5">
        <div className=" w-10 ">
          <h4>Get A Random Fact</h4>
          <Select
            options={factTypes}
            onChange={handleChange}
            autoFocus={true}
            placeholder="Pick a Fact Type"
          />
          <h4>{fact}</h4>
        </div>
      </div>
    </>
  );
};

export default RandomFact;
