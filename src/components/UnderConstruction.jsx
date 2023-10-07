import Hexagon from "react-hexagon";
const UnderConstruction = () => {
  return (
    <>
      <Hexagon
        style={{ stroke: "#000", fill: "#ffff0f" }}
        diagonal={10}
        className="text"
      >
        <text x="12%" y="30%" fontSize="1px">
          This Page is
        </text>
        <text x="5%" y="40%" fontSize="1px">
          Currently Under
        </text>
        <text x="12%" y="50%" fontSize="1px">
          Construction
        </text>
      </Hexagon>
    </>
  );
};
export default UnderConstruction;
