import styled from "@emotion/styled";
import { css, Theme } from "@emotion/react";

export const TutorialFullPage = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 430px;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url("/images/background.webp");
  z-index: 50;
`;

export const TutorialOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 430px;
  height: 100vh;
  background: rgba(160, 159, 159, 0.3);
  z-index: 99;
`;

export const TutorialContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const TutorialTextBoxWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

export const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 4%;
  right: 25px;
  z-index: 1001;
`;

export const CloseButton = styled.button`
  position: relative;
  width: 35px;
  height: 35px;

  & > div {
    width: 100%;
    height: 100%;
  }

  & > span {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const HighlightedButtonWrapper = styled.div`
  position: absolute;
  cursor: pointer;
  z-index: 1002;
`;

export const svgFrame = (theme: Theme) => css`
  path {
    fill: ${theme.colors.white};
  }
`;
