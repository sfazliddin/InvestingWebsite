import { RandomFact } from "../components/NumberFactsFunctions";

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

      <button>Date Fact</button>
      <button>Math Fact</button>
      <button>Trivia Fact</button>
      <button>Year Fact</button>
    </div>
  );
};
export default Numbers;

//the following function is to randomize the fact type
// const setRandomFactType = () => {
//   const num = Math.floor(Math.random() * (4 - 1 + 1) + 1);
//   switch (num) {
//     case 1:
//       setType("math");
//       console.log(num);
//       break;
//     case 2:
//       setType("trivia");
//       console.log(num);
//       break;
//     case 3:
//       setType("year");
//       console.log(num);
//       break;
//     case 4:
//       setType("date");
//       console.log(num);
//       break;
//   }
// };
