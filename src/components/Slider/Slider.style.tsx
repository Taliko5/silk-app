import styled from '@emotion/styled';

export const SliderWrapper = styled.div<{ height: string; interval: number }>`
  display: flex;
  height: ${(props) => props.height};
  overflow: hidden;
  margin-top: 500px;
  background-color: lightcyan;
`;

export const SliderInner = styled.div<{ position: number }>`
  transform: ${(props) => `translateX(${props.position}%)`};
  display: flex;
`;
