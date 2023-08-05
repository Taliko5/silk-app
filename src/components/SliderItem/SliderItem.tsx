import { FC } from 'react';
import { SliderItemWrapper, StagePicture, StageSource, StageImg } from './SliderItem.style';

export interface SliderItemProps {
  index: number;
  id: number;
  shwowItem: boolean;
  srcSet: string;
  src: string;
  alt: string;
  gap?: string;
  media?: string;
  itemNum?: number;
  onClick?: () => void;
}

export const SliderItem: FC<SliderItemProps> = ({ ...stageItemProps }) => {
  const { id, srcSet, media, src, alt, gap = '30px', index, shwowItem, itemNum, onClick } = stageItemProps;
  return (
    <SliderItemWrapper index={index} shwowItem={shwowItem} gap={gap} itemNum={itemNum || 1} onClick={() => onClick}>
      <StagePicture>
        <StageSource srcSet={srcSet} media={media} />
        <StageImg src={src} alt={alt} />
      </StagePicture>
    </SliderItemWrapper>
  );
};
