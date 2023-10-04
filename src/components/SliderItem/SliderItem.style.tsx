import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const SliderItemWrapper = styled.div<{ index: number; shwowItem: boolean; itemNum: number }>`
  width: 100%;
  height: 100%;
`;

export const SliderPicture = styled.picture``;

export const SliderImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SliderSource = styled.source``;

export const ExampleTile = styled.div<{ size: string }>`
  height: ${(props) => props.size};
  width: ${(props) => props.size};
`;
