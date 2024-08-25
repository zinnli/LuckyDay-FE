import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { TooltipFlow } from "types";

export const TooltipWrapper = styled.div`
  display: inline-flex;
  cursor: pointer;

  &:hover > div {
    opacity: 1;
    visibility: visible;
  }
`;

export const TooltipBox = styled.div<{
  flow: TooltipFlow;
  isVisible: boolean;
}>`
  ${({ theme, flow, isVisible }) => css`
    position: absolute;
    text-align: center;
    padding: 10px;
    border-radius: 20px;
    opacity: ${isVisible ? 1 : 0};
    visibility: ${isVisible ? "visible" : "hidden"};
    color: white;
    white-space: nowrap;
    background-color: ${theme.colors.gray};
    transition: opacity 0.3s ease, visibility 0.3s ease;
    z-index: 1000;

    ${flow === "down" &&
    css`
      top: calc(100% + 20px);
      right: -10px;
      transform: translateX(0%);
    `}
    ${flow === "up" &&
    css`
      bottom: calc(100% + 20px);
      right: -10px;
      transform: translateX(0%);
    `}
    ${flow === "left" &&
    css`
      right: calc(100% + 20px);
      top: 50%;
      transform: translateY(-50%);
    `}
    ${flow === "right" &&
    css`
      left: calc(100% + 20px);
      top: 50%;
      transform: translateY(-50%);
    `}
  `}
`;

export const TooltipArrow = styled.div<{
  flow: TooltipFlow;
}>`
  ${({ theme, flow }) => css`
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    z-index: 999;

    ${flow === "down" &&
    css`
      top: -15px;
      right: 20px;
      border-width: 0 10px 15px 10px;
      border-color: transparent transparent ${theme.colors.gray} transparent;
    `}
    ${flow === "up" &&
    css`
      bottom: -15px;
      right: 20px;
      border-width: 15px 10px 0 10px;
      border-color: ${theme.colors.gray} transparent transparent transparent;
    `}
    ${flow === "left" &&
    css`
      right: -15px;
      top: 50%;
      transform: translateY(-50%) rotate(180deg);
      border-width: 10px 15px 10px 0;
      border-color: transparent ${theme.colors.gray} transparent transparent;
    `}
    ${flow === "right" &&
    css`
      left: -15px;
      top: 50%;
      transform: translateY(-50%) rotate(180deg);
      border-width: 10px 0 10px 15px;
      border-color: transparent transparent transparent ${theme.colors.gray};
    `}
  `}
`;

export const TooltipContent = styled.div`
  ${({ theme }) => css`
    padding: 8px 12px;
    border-radius: 10px;
    text-align: center;
    color: white;
    ${theme.fonts.headline2}
    background-color: ${theme.colors.gray};
  `}
`;
