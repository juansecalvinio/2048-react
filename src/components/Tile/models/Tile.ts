export type TileMeta = {
  id: number;
  position: [number, number];
  value: number;
  mergeWith?: number;
};

const tileMargin = 16;

const tileWidth = 100;

export const tileTotalWidth = tileWidth + tileMargin;
