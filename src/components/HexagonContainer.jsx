/* eslint-disable react/prop-types */

import Hexagon from "react-svg-hexagon";

const HexagonContainer = ({ children }) => {
  return (
    <>
      <Hexagon
        fill="green"
        stroke="black"
        strokeWidth={4}
        radius={10}
        side={200}
      >
        <div>
          <div>{children}</div>
        </div>
      </Hexagon>
    </>
  );
};

export default HexagonContainer;
