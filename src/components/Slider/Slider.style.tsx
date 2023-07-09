import styled from '@emotion/styled';

export const SliderWrapper = styled.div<{ height: string; interval: number }>`
  display: flex;
  height: ${(props) => props.height};
  overflow: hidden;
`;

export const SliderInner = styled.div<{ position: number }>`
  transform: ${(props) => `translateX(${props.position}%)`};
  display: flex;
`;
