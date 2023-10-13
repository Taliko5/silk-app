import styled from '@emotion/styled';

export const TileWwapper = styled.div<{ size: { min: number; max: number } }>`
  width: minmax(100px, 300px);
  height: 300px;
  object-fit: cover;
`;
export const TileImage = styled.img`
  height: 100%;
  width: 100%;
`;
