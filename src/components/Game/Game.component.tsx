import React, { useEffect } from "react";
import { useThrottledCallback } from "use-debounce";
import { useGame } from "./hooks/useGame/useGame";
import { animationDuration, tileCount } from "../Board";
import { Board } from "../Board/Board.component";

export const Game = () => {
  const [tiles, moveLeft, moveRight, moveDown, moveUp] = useGame();

  const handleKeyDown = (e: KeyboardEvent) => {
    e.preventDefault();

    switch (e.code) {
      case "ArrowLeft":
        moveLeft();
        break;
      case "ArrowRight":
        moveRight();
        break;
      case "ArrowDown":
        moveDown();
        break;
      case "ArrowUp":
        moveUp();
        break;
    }
  };

  const throttleHandleKeyDown = useThrottledCallback(
    handleKeyDown,
    animationDuration,
    { leading: true, trailing: true }
  );

  useEffect(() => {
    window.addEventListener("keydown", throttleHandleKeyDown);

    return () => {
      window.addEventListener("keydown", throttleHandleKeyDown);
    };
  }, [throttleHandleKeyDown]);

  return <Board tiles={tiles} tileCountPerRow={tileCount} />;
};
