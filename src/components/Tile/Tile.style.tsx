import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const animationFrame = keyframes`
  0% {
    outline-offset: 0;
  }
  30% {
    outline-offset: -3px;
    outline: 3px solid darkgrey;
  }
  100% {
    outline-offset: -16px;
    outline: 8px solid darkgrey;
  }
`;

export const TileWrapper = styled.div<{ size: { min: number; max: number } }>`
  width: ${(props) => props.size.max}px;
  min-width: ${(props) => props.size.min}px;
  max-width: 100%;
  aspect-ratio: 1 / 1;
`;

export const TileImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  outline: 3px solid transparent; // Initial state
  outline-offset: 0px;
  transition: outline-offset ease-in-out 0.5s, outline ease-in-out 0.5s; // Smooth transition for both properties

  &:hover {
    outline-offset: -16px;
    outline: 8px solid darkgrey;
  }
`;
