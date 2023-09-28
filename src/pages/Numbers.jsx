import { useEffect, useState } from "react";
import { numbersKey, numbersUrl } from "../utils/numbersApi";
// import Popup from "reactjs-popup";
import Select from "react-select";

const Numbers = () => {
  const [fact, setFact] = useState("");
  const [type, setType] = useState("math");
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
  const setRandomFactType = () => {
    const num = Math.floor(Math.random() * (4 - 1 + 1) + 1);
    switch (num) {
      case 1:
        setType("math");
        console.log(num);
        break;
      case 2:
        setType("trivia");
        console.log(num);
        break;
      case 3:
        setType("year");
        console.log(num);
        break;
      case 4:
        setType("date");
        console.log(num);
        break;
    }
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
    <div>
      <h1>Number Facts</h1>
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
      <h4>About:</h4>
      <h6>
        In this page you can get facts about different kinds of numbers. The
        different types are Date, Math, Trivia, and Year Facts. If you want you
        can get a random fact as well.
      </h6>
      {/* <Popup trigger={<button>Random Fact Type</button>}>
        <div className="dropdown" id="factTypes">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <ul className="dropdown-menu">
            <li>
              {" "}
              <button
                id="randomFactType"
                className="dropdown-item"
                type="button"
              >
                <option value={"random"}>Random</option>
              </button>
            </li>
            <li>
              {" "}
              <button id="dateFactType" className="dropdown-item" type="button">
                <option value={"date"}>Date</option>
              </button>
            </li>
            <li>
              <button id="mathFactType" className="dropdown-item" type="button">
                <option value={"math"}>Math</option>
              </button>
            </li>
            <li>
              <button
                id="triviaFactType"
                className="dropdown-item"
                type="button"
              >
                <option value={"trivia"}>Trivia</option>
              </button>
            </li>
            <li>
              <button id="yearFactType" className="dropdown-item" type="button">
                <option value={"year"}>Year</option>
              </button>
            </li>
          </ul>
        </div>
      </Popup> */}
      <button
        onClick={() => {
          getFact;
        }}
      >
        Generate Random Fact
      </button>
      <button>Date Fact</button>
      <button>Math Fact</button>
      <button>Trivia Fact</button>
      <button>Year Fact</button>
    </div>
  );
};
export default Numbers;
