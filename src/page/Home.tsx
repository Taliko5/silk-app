import React, { FC } from 'react';
import { Slider } from '../components/Slider/Slider';
import { demoImageList } from '../static/demo-image-list';
import { Stage } from '../components/Stage/Stage';

export const Home: FC = () => {
  return (
    <>
      <div>homepage</div>
      {/* <Stage imageList={demoImageList} height="500px" interval={5000} fadeDuration={1000} /> */}
      <Slider imageList={demoImageList} height="300px" gap={20} itemWidth={150} interval={3000} />
    </>
  );
};
