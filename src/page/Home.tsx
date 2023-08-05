import React, { FC } from 'react';
import { Slider } from '../components/Slider/Slider';
import { demoImageList } from '../static/demo-image-list';
import { Stage } from '../components/Stage/Stage';

export const Home: FC = () => {
  return (
    <>
      <div>homepage</div>
      <Stage height="500px" imageList={demoImageList} fadeDuration={1000} interval={5000} />
      <Slider imageList={demoImageList} height="300px" gap="20px" />
    </>
  );
};
