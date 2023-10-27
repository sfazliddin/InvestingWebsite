import UnderConstruction from "../components/UnderConstruction";
import Container from "../components/Container";
import {
  chuckNorrisHost,
  chuckNorrisURL,
  numbersKey,
} from "../utils/numbersApi";
import { useState } from "react";
//link=https://api.chucknorris.io/jokes/random?category={category}
const ChuckNorris = () => {
  const [category, setCategory] = useState(null);
  const [joke, setJoke] = useState(null);
  const getJoke = async () => {
    setCategory("movie");
    const url = `${chuckNorrisURL}=${category}`;
    // `${chuckNorrisURL}=${category}`
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-RapidAPI-Key": numbersKey,
        "X-RapidAPI-Host": chuckNorrisHost,
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
      setJoke(result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Container>
        <h1 className="d-flex justify-content-center">Chuck Norris</h1>
        <button onClick={getJoke}>click this</button>
        <p>{joke}</p>
        <UnderConstruction />
      </Container>
    </>
  );
};
export default ChuckNorris;
