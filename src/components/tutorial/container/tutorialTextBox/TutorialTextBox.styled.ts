import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 330px;
    padding: 15px;
    border-radius: 15px;
    background-color: ${theme.colors.black};
    z-index: 500;

    &[role="button"] {
      cursor: pointer;
    }

    &[role="text"] {
      cursor: default;
    }

    @media (max-width: 375px) {
      width: 290px;
    }
  `}
`;

export const TextBox = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.body1}
    color: ${theme.colors.lightBeige};
    z-index: 500;
  `}
`;

const bounceRight = keyframes`
  0%, 100% {
    transform: translateX(0) rotate(90deg);
  }
  50% {
    transform: translateX(5px) rotate(90deg);
  }
`;

export const NextIconWrapper = styled.div`
  position: absolute;
  bottom: 11px;
  right: 14px;
`;

export const NextIcon = styled.div`
  ${({ theme }) => css`
    transform: rotate(90deg);
    animation: ${bounceRight} 1s ease-in-out infinite;

    & > svg {
      width: 24px;
      height: 24px;
    }

    & > svg > path {
      fill: ${theme.colors.lightBeige};
    }
  `}
`;
