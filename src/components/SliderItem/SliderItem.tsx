import { FC } from 'react';
import { ExampleTile, SliderImg, SliderItemWrapper, SliderPicture, SliderSource } from './SliderItem.style';

export interface SliderItemProps {
  index: number;
  id: number;
  shwowItem: boolean;
  srcSet: string;
  src: string;
  alt: string;
  gap?: number;
  media?: string;
  itemNum?: number;
  onClick?: () => void;
}

export const SliderItem: FC<SliderItemProps> = ({ ...stageItemProps }) => {
  const { id, srcSet, media, src, alt, gap = 30, index, shwowItem, itemNum, onClick } = stageItemProps;
  return (
    <SliderItemWrapper index={index} shwowItem={shwowItem} itemNum={itemNum || 1} onClick={() => onClick}>
      <SliderPicture>
        <SliderSource srcSet={srcSet} media={media} />
        <ExampleTile size="300px">
          <SliderImg src={src} alt={alt} />
        </ExampleTile>
      </SliderPicture>
    </SliderItemWrapper>
  );
};
