import styled from '@emotion/styled';

export const StageWrapper = styled.div<{ height: string }>`
  z-index: -2;
  height: ${(props) => props.height};
  background-color: pink;
  object-fit: cover;
`;
