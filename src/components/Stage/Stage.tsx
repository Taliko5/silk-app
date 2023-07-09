import React, { FC, useEffect, useRef, useState } from 'react';
import { StageWrapper } from './Stage.style';
import { log } from 'console';

export interface StageProps {
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

export const Stage: FC<StageProps> = ({ ...stageProps }) => {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const previousRef = useRef<HTMLElement | null>(null);

  const { height, imageList, fadeDuration = 250 } = stageProps;
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const { current: stage } = stageRef;
    const { current: previous } = previousRef;

    const fade = async (current: HTMLElement | null) => {
      const animation = await (async () => {
        try {
          if (previous) {
            return previous.animate([{ opacity: 0 }, { opacity: 1 }], {
              duration: current ? 10000 : fadeDuration,
              fill: 'forwards',
            }).finished;
          }

          if (current) {
            return current.animate([{ opacity: 0 }, { opacity: 1 }], {
              duration: previous ? 10000 : fadeDuration,
              fill: 'forwards',
            }).finished;
          }
          return console.log('nothing happens');
        } catch {
          return console.log('something happens');
        }
      })();

      if (previous instanceof HTMLImageElement) {
        const { src } = previous;
        if (!src.length) return;
        URL.revokeObjectURL(src);
      }

      previous?.remove();

      if (!previous && current) animation?.commitStyles();
      animation?.cancel();

      previousRef.current = current;
    };

    const imageArr = () => {
      const firstImg = imageList[count];

      if (count < imageList.length) {
        console.log(count, 'count');
        setCount(count + 1);
        console.log(count, 'count2');
      }
      if (count >= imageList.length) {
        setCount(0);
        console.log(count, 'count3');
      }

      const image = new Image();

      image.crossOrigin = 'use-credentials';
      image.src = firstImg.url;
      image.alt = firstImg.title;
      image.style.cssText = 'height: 100%; width: 100%; object-fit: cover;';

      image.onload = async () => {
        await image.decode();
        stage?.prepend(image);
        fade(image);
      };

      image.onerror = () => {
        fade(null);
      };

      return firstImg;
    };

    // imageList
    //   ? imageList.map((imageObj, index) => {
    //       const image = new Image();

    //       image.crossOrigin = 'use-credentials';
    //       image.src = imageObj.url;
    //       image.alt = imageObj.title;
    //       image.style.cssText = 'height: 100%; width: 100%; object-fit: cover;';

    //       image.onload = async () => {
    //         await image.decode();
    //         stage?.prepend(image);
    //         fade(image);
    //       };

    //       image.onerror = () => {
    //         fade(null);
    //       };

    //       //some second happends
    //     })
    imageList ? setInterval(imageArr, 5000) : fade(null);
  }, [count]);

  return (
    <>
      <StageWrapper ref={stageRef} height={height}></StageWrapper>
    </>
  );
};
