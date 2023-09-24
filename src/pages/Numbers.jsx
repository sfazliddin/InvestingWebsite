import axios from "axios";
import { useEffect, useState } from "react";
const url = "https://numbersapi.p.rapidapi.com/random/trivia";
// const randomFact = () => {
//   const [fact, setFact] = useState("");
//   // const [loading, setLoading] = useState(false);
//   // const [error, setError] = useState(false);
//   const getFact = async () => {
//     // setLoading(true);
//     // setError(false);
//     const request = await axios.get(url);
//     // setLoading(false);
//     setFact(request.data);
//   };
//   // useEffect(()=>{
//   //   getFact()
//   // },[])
// };

const Numbers = () => {
  const [fact, setFact] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  const getFact = async () => {
    // setLoading(true);
    // setError(false);
    const request = await axios.get(url);
    // setLoading(false);
    setFact(request.data);
  };
  useEffect((fact) => {
    getFact();
    console.log(fact);
  }, []);
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
      <button>Random Fact</button>
      <button>Date Fact</button>
      <button>Math Fact</button>
      <button>Trivia Fact</button>
      <button>Year Fact</button>
    </div>
  );
};
export default Numbers;
