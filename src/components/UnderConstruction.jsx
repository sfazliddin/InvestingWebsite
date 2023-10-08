import Hexagon from "react-hexagon";
const UnderConstruction = () => {
  return (
    <>
      <Hexagon
        style={{ stroke: "#000", fill: "#f4bd61" }}
        diagonal={10}
        className="text"
      >
        <text x="25%" y="30%" fontSize="1.2px" fontWeight="bold">
          Under
        </text>

        <text x="5%" y="42%" fontSize="1.2px" fontWeight="bold">
          Construction
        </text>
      </Hexagon>
    </>
  );
};
export default UnderConstruction;
