import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../tetrominos";

const Cell = ({ type }) => {
  return (
    <StyledCell type={type} color={TETROMINOS[type].color}>
      {console.log("being rerendered")}
    </StyledCell>
  );
};

// React.memo will only rerender when the component changes
export default React.memo(Cell);
