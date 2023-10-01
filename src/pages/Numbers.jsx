import RandomFact from "../components/FactRandom";
import MathFact from "../components/FactMath";
import TriviaFact from "../components/FactTrivia";
import DateFact from "../components/FactDate";
import YearFact from "../components/FactYear";
const Numbers = () => {
  return (
    <div>
      <h1>Number Facts</h1>
      <h4>About:</h4>
      <h6>
        In this page you can get facts about different kinds of numbers. The
        different types are Date, Math, Trivia, and Year Facts. If you want you
        can get a random fact as well.
      </h6>
      <h3>Select a fact category to get a random fact from it</h3>
      <RandomFact />

      <DateFact />
      <MathFact />
      <TriviaFact />
      <YearFact />
    </div>
  );
};
export default Numbers;
