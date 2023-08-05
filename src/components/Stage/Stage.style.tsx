import styled from '@emotion/styled';

export const StageWrapper = styled.div<{ height: string }>`
  z-index: -2;
  height: ${(props) => props.height};
  display: grid;
  grid-template-areas: 'abc';
`;
