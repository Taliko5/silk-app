import React, { FC, useEffect, useMemo, useRef } from 'react';
import { StageWrapper } from './Stage.style';
import { useTimedIndex } from '../../hooks/useTimedEnumeration';

export interface StageProps {
  imageList: Image[];
  height: string;
  interval?: number;
  fadeDuration?: number;
  itemNumber?: number;
  imagePosition?: string;
}

export type Image = {
  url: string;
  title: string;
};

export const Stage: FC<StageProps> = ({ ...stageProps }) => {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const previousRef = useRef<HTMLElement | null>(null);

  const { height, imageList, fadeDuration, interval = 5000, imagePosition = '0% 40%' } = stageProps;

  const commingIndex = useTimedIndex(interval, imageList.length - 1);
  const commingImage = useMemo(() => imageList[commingIndex], [commingIndex, imageList]);

  useEffect(() => {
    console.log(commingImage, 'commingImage');
    const { current: stage } = stageRef;
    if (!stage) return;
    const { current: previous } = previousRef;

    const fade = async (current: HTMLElement | null) => {
      const animation = await (async () => {
        try {
          if (previous) {
            console.log('previous');
            return previous.animate([{ opacity: 1 }, { opacity: 0 }], {
              duration: fadeDuration,
              fill: 'forwards',
            }).finished;
          }
          if (current) {
            console.log('current');
            return current.animate([{ opacity: 0 }, { opacity: 1 }], {
              duration: fadeDuration,
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

    const image = commingImage ? new Image() : null;

    if (image && commingImage) {
      image.crossOrigin = 'use-credentials';
      image.style.cssText = `--height: ${height};
                             --imagePosiion: ${imagePosition};
                             height: var(--height);
                             width: 100%; object-fit:
                             cover; grid-area:abc;
                             object-position: var(--imagePosiion);`;

      image.src = commingImage.url;

      image.onload = async () => {
        await image.decode?.();

        stage.prepend(image);

        fade(image);
      };

      image.onerror = () => {
        fade(null);
      };
    } else {
      fade(null);
    }

    for (const child of Array.from(stage.childNodes)) {
      if (image && child === image) continue;
      if (previous && child === previous) continue;

      if (child instanceof HTMLImageElement) {
        const { src } = child;
        if (!src.length) return;

        URL.revokeObjectURL(src);
      }

      child.remove();
    }
  }, [commingImage, fadeDuration]);

  return (
    <>
      <StageWrapper ref={stageRef} height={height}>
        {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain */}
        <img src={imageList.at(-1)?.url!} />
      </StageWrapper>
    </>
  );
};
