import { useEffect, useState } from "react";
import { numbersKey, numbersUrl } from "../utils/numbersApi";
import Popup from "reactjs-popup";
const Numbers = () => {
  const [fact, setFact] = useState("");
  const [type, setType] = useState("");

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
    const url = `${numbersUrl}/random/${type}`;
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
    setRandomFactType();
    getFact();
  }, [type]);

  return (
    <div>
      <h1>Number Facts</h1>

      <p>{fact}</p>
      <h4>About:</h4>
      <h6>
        In this page you can get facts about different kinds of numbers. The
        different types are Date, Math, Trivia, and Year Facts. If you want you
        can get a random fact as well.
      </h6>
      <Popup trigger={<button>Random Fact</button>}>
        <div className="dropdown">
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
              <button className="dropdown-item" type="button">
                Date
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Math
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Trivia
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Year
              </button>
            </li>
          </ul>
        </div>
      </Popup>
      <button
        onClick={(type) => {
          setRandomFactType(type);
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
