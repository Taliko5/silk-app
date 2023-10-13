import { FC, PropsWithChildren, useCallback, useEffect, useRef, useState } from 'react';
import { SliderInner, SliderWrapper } from './Slider.style';
import { SliderItem } from '../SliderItem/SliderItem';
import { Image } from '../Utils';

export interface SliderProps {
  imageList: Image[];
  height: string;
  interval?: number;
  fadeDuration?: number;
  itemNumber?: number;
  itemWidth: number;
  gap: number;
}

export const Slider: FC<SliderProps & PropsWithChildren> = ({
  imageList,
  height,
  itemNumber,
  interval,
  gap = 30,
  itemWidth = 100,
}) => {
  if (!imageList) throw new Error('no iamage');

  const sliderRef = useRef<HTMLDivElement>(null);
  const { current: container } = sliderRef;
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [stageWidth, setStageWidth] = useState<number>(0);
  const [imageArray, setImageArray] = useState<Image[] | null>(null);
  const [lastImageId, setLastImageId] = useState<number>(0);
  const [isAnimationActive, setAnimationActive] = useState(true);

  // const changeStageItem = useCallback(() => {
  //   return Number(((100 / imageList.length) * -activeIndex).toFixed(2));
  // }, [activeIndex, imageList]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const newImageList = [imageList[imageList.length - 1], ...imageList];
    console.log(newImageList, 'newImageList');
    const listWidth = (itemWidth + gap) * imageList.length;
    const containerWidth = window['innerWidth'];
    console.log(listWidth, ':listWidth', containerWidth, ':containerWidth');

    const isListEnoghLength = listWidth / containerWidth >= 1.2;
    const additionalImageNumber = (1.5 * containerWidth - listWidth) / itemWidth;
    return isListEnoghLength ? setImageArray(newImageList) : addImage(additionalImageNumber);
  }, []);

  useEffect(() => {
    const next = (activeIndex + 1) % imageList.length;

    const id = isAnimationActive
      ? setTimeout(() => {
          setActiveIndex(next);

          goToNextSlide(activeIndex);
        }, interval)
      : null;
    // add setAnimation: boolean -> mouseenter, pointerdown
    // スライドが一こ左に行くたび,同じindexを追加
    // index pop
    imageList.splice(0, 1);

    imageList.push(imageList[activeIndex]);

    return () => {
      id && clearTimeout(id);
    };
  }, [activeIndex]);

  const addImage = useCallback(
    (indexNumber: number) => {
      let addtionalIndex = 0;
      // const extendedImageList = [...imageList];
      do {
        if (imageList.length - 1 < addtionalIndex) addtionalIndex = 0;

        imageList.push(imageList[addtionalIndex]);

        addtionalIndex = addtionalIndex + 1;
      } while (addtionalIndex <= indexNumber);

      console.log(imageArray, 'imageArray');

      setLastImageId(imageList[imageList.length - 1].id);

      return setImageArray(imageList);
    },
    [imageList, imageArray, lastImageId]
  );

  const goToNextSlide = useCallback(
    (index: number) => {
      if (!container) return;

      const selectedChild = Array.from(container.children)[index] as HTMLElement | undefined;
      console.log(selectedChild, 'selectedChild');
      if (!selectedChild) return;

      container.scrollTo({
        behavior: 'smooth',
        left: selectedChild.offsetLeft,
      });
    },
    [container]
  );

  // on hover-> stop scrolling
  // on click => jump to next url

  console.log(imageArray, 'imageArray');

  return (
    <>
      <SliderWrapper height={height} interval={3000}>
        <SliderInner position={stageWidth} gap={gap} ref={sliderRef}>
          {imageArray?.map((image, index) => {
            return (
              <>
                <SliderItem
                  gap={gap}
                  key={index + image.title}
                  shwowItem={activeIndex === index}
                  index={index}
                  id={index}
                  src={image.url}
                  alt={image.title}
                  srcSet={image.url}
                  itemNum={itemNumber}
                  onClick={() => console.log('hi')}
                />
                {image.id}
              </>
            );
          })}
        </SliderInner>
      </SliderWrapper>
      {/* <button onClick={() => changeIndex()}>click</button> */}
      {activeIndex} {stageWidth} {activeIndex === 1 ? 'true' : 'false'}
    </>
  );
};
