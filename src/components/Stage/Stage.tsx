import React, { FC } from 'react';
import { StageImg, StageItem, StagePicture, StageSource, StageWrapper } from './Stage.style';

export interface StageProps {
  imageList: Image[];
  height: string;
  itemChangeDuration?: number;
  fadeDuration?:number,
}

export type Image = {
  url: string;
  title: string;
};

export const Stage: FC<StageProps> = ({ imageList, height }) => {
  if (!imageList) throw new Error('no iamage');

  return (
    <StageWrapper height={height}>
      {imageList.map((image, index) => {
        return (
          <StageItem>
            <StagePicture key={index + image.title}>
              <StageSource srcSet={image.url} media="(min-width: 365px)" />
              <StageImg src={image.url} alt={image.title} />
            </StagePicture>
          </StageItem>
        );
      })}
    </StageWrapper>
  );
};
