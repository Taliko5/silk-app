import React, { FC } from 'react';
import { Slider } from '../components/Slider/Slider';
import { demoImageList } from '../static/demo-image-list';
import { Stage } from '../components/Stage/Stage';
import { Tile } from '../components/Tile/Tile';

export const Home: FC = () => {
  return (
    <>
      <div>homepage</div>
      {/* <Stage imageList={demoImageList} height="500px" interval={5000} fadeDuration={1000} /> */}
      <Slider imageList={demoImageList} height="300px" gap={20} itemWidth={150} interval={3000} />
      <p></p>
      <Tile size={{ min: 100, max: 300 }} image={demoImageList[1]} />
    </>
  );
};
