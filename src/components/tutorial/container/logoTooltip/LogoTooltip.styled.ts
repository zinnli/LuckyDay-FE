import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

const bounceUpDown = keyframes`
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-10px);
  }
`;

export const TooltipContainer = styled.div`
  position: relative;
`;

export const Tooltip = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: 0;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(-50%);
    width: 120px;
    height: 120px;
    padding: 20px;
    margin-bottom: 40px;
    border-radius: 50%;
    background-color: ${theme.colors.black};
    animation: ${bounceUpDown} 2s ease-in-out infinite;

    &::after {
      content: "";
      position: absolute;
      top: 90%;
      left: 50%;
      transform: translateX(-50%);
      border-style: solid;
      border-width: 36px 18px 0 18px;
      border-color: ${theme.colors.black} transparent transparent transparent;
    }
  `}
`;

export const Logo_Basic = styled.div`
  width: 80px;
  height: 80px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/images/logo.webp");
`;
