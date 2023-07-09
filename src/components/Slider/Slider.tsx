import { FC, useCallback, useEffect, useState } from 'react';
import { SliderInner, SliderWrapper } from './Slider.style';
import { SliderItem } from '../SliderItem/SliderItem';

export interface SliderProps {
  imageList: Image[];
  height: string;
  interval?: number;
  fadeDuration?: number;
  itemNumber?: number;
}

export type Image = {
  url: string;
  title: string;
};

export const Slider: FC<SliderProps> = ({ imageList, height, itemNumber, interval }) => {
  if (!imageList) throw new Error('no iamage');

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [stageWidth, setStageWidth] = useState<number>(0);

  const changeStageItem = useCallback(() => {
    return Number(((100 / imageList.length) * -activeIndex).toFixed(2));
  }, [activeIndex, imageList]);

  // useEffect(() => {
  //   if (activeIndex === imageList.length) return setActiveIndex(0);
  //   const _interval = setInterval(() => changeIndex(), interval);
  //   return () => {
  //     if (_interval) clearInterval(_interval);
  //   };
  // }, [activeIndex]);

  const changeIndex = useCallback(() => {
    setActiveIndex(activeIndex + 1);
    setStageWidth(changeStageItem());
  }, [activeIndex]);

  return (
    <>
      <SliderWrapper height={height} interval={3000}>
        <SliderInner position={stageWidth}>
          {imageList.map((image, index) => {
            return (
              <SliderItem
                key={index + image.title}
                shwowItem={activeIndex === index}
                index={index}
                id={index}
                src={image.url}
                alt={image.title}
                srcSet={image.url}
                itemNum={itemNumber}
                onClick={() => console.log(activeIndex === index)}
              />
            );
          })}
        </SliderInner>
      </SliderWrapper>
      {/* <button onClick={() => changeIndex()}>click</button> */}
      {activeIndex} {stageWidth} {activeIndex === 1 ? 'true' : 'false'}
    </>
  );
};
