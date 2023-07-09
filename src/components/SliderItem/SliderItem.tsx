import { FC } from 'react';
import { StageItemWrapper, StagePicture, StageSource, StageImg } from './SliderItem.style';

export interface SliderItemProps {
  index: number;
  id: number;
  shwowItem: boolean;
  srcSet: string;
  src: string;
  alt: string;
  media?: string;
  itemNum?: number;
  onClick?: () => void;
}

export const SliderItem: FC<SliderItemProps> = ({ ...stageItemProps }) => {
  const { id, srcSet, media, src, alt, index, shwowItem, itemNum, onClick } = stageItemProps;
  return (
    <StageItemWrapper index={index} shwowItem={shwowItem} itemNum={itemNum || 1} onClick={() => onClick}>
      <StagePicture>
        <StageSource srcSet={srcSet} media={media} />
        <StageImg src={src} alt={alt} />
      </StagePicture>
    </StageItemWrapper>
  );
};
