/* eslint-disable react/prop-types */

import Hexagon from "react-svg-hexagon";

const HexagonContainer = ({ children }) => {
  return (
    <>
      <Hexagon
        className="col"
        fill="green"
        stroke="black"
        strokeWidth={4}
        radius={10}
        height={500}
        flatTop="true"
      >
        {children}
      </Hexagon>
    </>
  );
};

export default HexagonContainer;
