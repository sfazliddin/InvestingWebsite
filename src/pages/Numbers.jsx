import RandomFact from "../components/FactRandom";
import MathFact from "../components/FactMath";
import TriviaFact from "../components/FactTrivia";
import DateFact from "../components/FactDate";
import YearFact from "../components/FactYear";
import HexagonContainer from "../components/HexagonContainer";

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
      <HexagonContainer>
        <RandomFact />
      </HexagonContainer>
      <HexagonContainer>
        <DateFact />
      </HexagonContainer>
      <HexagonContainer>
        <MathFact />
      </HexagonContainer>
      <HexagonContainer>
        <TriviaFact />
      </HexagonContainer>
      <HexagonContainer>
        <YearFact />
      </HexagonContainer>

      {/* <div className="container">
        <div className="row">
          <div className="col">
            {" "}
            <Hexagon
              style={{ fill: "transparent" }}
              diagonal={10}
              flatTop="true"
            >
              <text x="20%" y="40%" fontSize={1}>
                1
              </text>
            </Hexagon>
          </div>
          <div className="col">
            {" "}
            <Hexagon
              style={{ fill: "transparent" }}
              diagonal={10}
              flatTop="true"
              className="mb-0"
            >
              <text x="20%" y="40%" fontSize={1}>
                2
              </text>
            </Hexagon>
          </div>
          <div className="col">
            {" "}
            <Hexagon
              style={{ fill: "transparent" }}
              diagonal={10}
              flatTop="true"
            >
              <text x="20%" y="40%" fontSize={1}>
                3
              </text>
            </Hexagon>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {" "}
            <Hexagon
              style={{ fill: "transparent" }}
              diagonal={10}
              flatTop="true"
            >
              <text x="20%" y="40%" fontSize={1}>
                4
              </text>
            </Hexagon>
          </div>
          <div className="col">
            {" "}
            <Hexagon
              style={{ fill: "transparent" }}
              diagonal={10}
              flatTop="true"
            >
              <text x="20%" y="40%" fontSize={1}>
                5
              </text>
            </Hexagon>
          </div>
          <div className="col">
            {" "}
            <Hexagon
              style={{ fill: "transparent" }}
              diagonal={10}
              flatTop="true"
            >
              <text x="20%" y="40%" fontSize={1}>
                6
              </text>
            </Hexagon>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {" "}
            <Hexagon
              style={{ fill: "transparent" }}
              diagonal={10}
              flatTop="true"
            >
              <text x="20%" y="40%" fontSize={1}>
                7
              </text>
            </Hexagon>
          </div>
          <div className="col">
            {" "}
            <Hexagon
              style={{ fill: "transparent" }}
              diagonal={10}
              flatTop="true"
            >
              <text x="20%" y="40%" fontSize={1}>
                8
              </text>
            </Hexagon>
          </div>
          <div className="col">
            {" "}
            <Hexagon
              style={{ fill: "transparent" }}
              diagonal={10}
              flatTop="true"
            >
              <text x="20%" y="40%" fontSize={1}>
                9
              </text>
            </Hexagon>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default Numbers;
