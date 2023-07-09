import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const StageItemWrapper = styled.div<{ index: number; shwowItem: boolean; itemNum: number }>`
  width: 100vw;
  animation: ${(props) =>
    props.shwowItem
      ? css`
          ${fade} 0.5s ease-in-out
        `
      : 'none'};
`;

export const StagePicture = styled.picture``;

export const StageImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 0% 40%;
`;

export const StageSource = styled.source``;

export const fade = keyframes`
  0% {
    opecity: 0.1
  }
  100% {
    opecity: 1
  }
`;
