import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const SliderItemWrapper = styled.div<{ index: number; shwowItem: boolean; itemNum: number; gap: string }>`
  width: 100%;
  height: 100%;
  margin: ${(props) => props.gap};
`;

export const StagePicture = styled.picture``;

export const StageImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StageSource = styled.source``;
