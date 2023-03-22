import React from "react";
import { boardMargin, tileCount as defaultTileCount } from "./models/Board";
import { TileMeta, tileTotalWidth, Tile } from "../Tile";
import { BoardContainer, TileListContainer } from "./Board.styled";
import { BoardProvider } from "./context/BoardContext";
import { Grid } from "../Grid";

type Props = {
  tiles: TileMeta[];
  tileCountPerRow: number;
};

export const Board = ({ tiles, tileCountPerRow = defaultTileCount }: Props) => {
  const containerWidth = tileTotalWidth * tileCountPerRow;

  const boardWidth = containerWidth + boardMargin;

  const tileList = tiles.map(({ id, ...restProps }) => (
    <Tile key={`tile-${id}`} {...restProps} zIndex={id} />
  ));

  return (
    <BoardContainer style={{ width: boardWidth }}>
      <BoardProvider
        containerWidth={containerWidth}
        tileCount={tileCountPerRow}
      >
        <TileListContainer>{tileList}</TileListContainer>
        <Grid />
      </BoardProvider>
    </BoardContainer>
  );
};
