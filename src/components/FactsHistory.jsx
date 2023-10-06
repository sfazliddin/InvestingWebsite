let facts = [];
const FactsHistory = () => {
  let allFacts = [];
  let allTimeStamps = [];
  const listFactDetails = () => {
    let counter = 0;
    facts.forEach((element) => {
      allFacts[counter] = element.factInfo;
      allTimeStamps[counter] = element.timeInfo;
      counter++;
      // console.log[facts];
    });
    console.log[allFacts];
    console.log[allTimeStamps];
    // console.log(allFacts);
  };

  return (
    <>
      <h1>Facts History</h1>
      {/* <h2>first fact : {fact}</h2>
      <h3>time: {factTime}</h3> */}
      <div className="row">
        <div className="col">
          {" "}
          <h3> Fact</h3>
        </div>
        <div className="col">
          {" "}
          <h3> Time Stamp</h3>{" "}
        </div>
      </div>
      <div className="row">
        <div className="col fact">{allFacts}</div>
        <div className="col timeStamp">{allTimeStamps}</div>
      </div>
      <button onClick={listFactDetails}>update history</button>
    </>
  );
};
export const AddFact = (fact, timeStamp) => {
  let Fact = {
    factInfo: fact,
    timeInfo: timeStamp,
  };

  facts[facts.length] = Fact;
};

export default FactsHistory;
