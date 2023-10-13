import React, { FC } from 'react';
import { TileWwapper, TileImage } from './Tile.style';
import { Image } from '../Utils';

export type TileProps = {
  size: {
    min: number;
    max: number;
  };
  image: Image;
};

export const Tile: FC<TileProps> = ({ size, image }) => {
  const { title, url, id } = image;
  return (
    <TileWwapper size={size}>
      <TileImage src={url} alt={title} id={title + id} />
    </TileWwapper>
  );
};
