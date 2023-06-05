import styled from '@emotion/styled';

export const StageWrapper = styled.div<{ height: string }>`
  display: flex;
  height: ${(props) => props.height};
`;

export const StageItem = styled.div``;

export const StagePicture = styled.picture``;

export const StageImg = styled.img`
  width: 100vw;
  height: 100%;
  object-fit: cover;
  object-position: 0% 40%;
`;

export const StageSource = styled.source``;
