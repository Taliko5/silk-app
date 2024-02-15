import styled from '@emotion/styled';

export const SliderWrapper = styled.div<{ height: string; interval: number }>`
  display: flex;
  height: ${(props) => props.height};
  overflow: hidden;
  margin-top: 200px;
  background-color: lightcyan;
  padding: 30px 0;
  -ms-overflow-style: none; /* IE and Edge */
`;

export const SliderInner = styled.div<{ position: number; gap: number }>`
  overflow-x: scroll;
  transform: ${(props) => `translateX(${props.position}%)`};
  display: flex;
  gap: ${(props) => `${props.gap}px`};
  margin: ${(props) => ` 0 -${props.gap}`};
  background-color: pink;
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;
