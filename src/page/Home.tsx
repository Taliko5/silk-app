import React, { FC } from 'react';
import { Stage } from '../components/Stage/Stage';
import { demoImageList } from '../static/demo-image-list';

export const Home: FC = () => {
  return (
    <>
      <div>homepage</div>
      <Stage imageList={demoImageList} height="800px" />
    </>
  );
};
