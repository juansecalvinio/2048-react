import React from "react";
import { useBoard } from "../Board";
import { GridCell, GridContainer } from "./Grid.styled";

export const Grid = () => {
  const [, tileCount] = useBoard();

  const renderGrid = () => {
    const length = tileCount * tileCount;
    const cells = [] as JSX.Element[];

    for (let index = 0; index < length; index += 1) {
      cells.push(<GridCell key={`${index}`} />);
    }

    return cells;
  };

  return <GridContainer>{renderGrid()}</GridContainer>;
};
