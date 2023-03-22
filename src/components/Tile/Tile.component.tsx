import React, { useEffect, useState } from "react";
import { useBoard } from "../Board";
import { usePrevProps } from "../../hooks/usePrevProps";
import { TileContainer } from "./Tile.styled";

type Props = {
  value: number;
  position: [number, number];
  zIndex: number;
};

export const Tile = ({ value, position, zIndex }: Props) => {
  const [containerWidth, tileCount] = useBoard();
  const [scale, setScale] = useState(1);

  const previousValue = usePrevProps<number>(value);

  const withinBoardBoundaries =
    position[0] < tileCount && position[1] < tileCount;

  if (!withinBoardBoundaries) console.error("Tile out of bound");

  const isNew = previousValue === undefined;
  const hasChanged = previousValue !== value;
  const shallHighlight = isNew || hasChanged;

  useEffect(() => {
    if (shallHighlight) {
      setScale(1.1);
      setTimeout(() => setScale(1), 100);
    }
  }, [shallHighlight, scale]);

  const positionToPixels = (position: number) => {
    return (position / tileCount) * (containerWidth as number);
  };

  // animations
  const style = {
    top: positionToPixels(position[1]),
    left: positionToPixels(position[0]),
    transform: `scale(${scale})`,
    zIndex,
  };

  return (
    <TileContainer className={`tile-${value}`} style={style}>
      {value}
    </TileContainer>
  );
};
