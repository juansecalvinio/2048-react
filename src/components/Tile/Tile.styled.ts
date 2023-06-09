import styled from "styled-components";

export const TileContainer = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  margin: 8px;
  border-radius: 4px;
  background-color: #eee4da;
  color: #776e65;
  font-weight: bold;
  text-align: center;
  font-size: 48px;
  line-height: 2.1;
  transition-property: left, top, transform;
  transition-duration: 250ms, 250ms, 100ms;
  transform: scale(1);

  &.tile-128,
  &.tile-256,
  &.tile-512 {
    font-size: 44px;
    line-height: 2.28;
  }

  &.tile-1024,
  &.tile-2048 {
    font-size: 32px;
    line-height: 3.18;
  }

  &.tile-2 {
    background: #eee4da;
    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0),
      inset 0 0 0 1px rgba(255, 255, 255, 0);
  }

  &.tile-4 {
    background: #ede0c8;
    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0),
      inset 0 0 0 1px rgba(255, 255, 255, 0);
  }

  &.tile-8 {
    color: #f9f6f2;
    background: #f2b179;
  }

  &.tile-16 {
    color: #f9f6f2;
    background: #f59563;
  }

  &.tile-32 {
    color: #f9f6f2;
    background: #f67c5f;
  }

  &.tile-64 {
    color: #f9f6f2;
    background: #f65e3b;
  }

  &.tile-128 {
    color: #f9f6f2;
    background: #edcf72;
    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.2381),
      inset 0 0 0 1px rgba(255, 255, 255, 0.14286);
  }

  &.tile-256 {
    color: #f9f6f2;
    background: #edcc61;
    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.31746),
      inset 0 0 0 1px rgba(255, 255, 255, 0.19048);
  }

  &.tile-512 {
    color: #f9f6f2;
    background: #edc850;
    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.39683),
      inset 0 0 0 1px rgba(255, 255, 255, 0.2381);
  }

  &.tile-1024 {
    color: #f9f6f2;
    background: #edc53f;
    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.47619),
      inset 0 0 0 1px rgba(255, 255, 255, 0.28571);
  }

  &.tile-2048 {
    color: #f9f6f2;
    background: #edc22e;
    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.55556),
      inset 0 0 0 1px rgba(255, 255, 255, 0.33333);
  }
`;
