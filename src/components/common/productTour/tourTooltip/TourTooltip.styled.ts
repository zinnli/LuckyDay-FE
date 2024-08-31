import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const TourTooltip = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 330px;
    border-radius: 15px;
    padding: 13px 48px;
    background-color: ${theme.colors.black};
    spacing: 1;
  `}
`;

export const Content = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.headline2};
    display: flex;
    color: ${theme.colors.white};
    word-break: normal;
    text-align: center;
    white-space: break-spaces;
    text-overflow: ellipsis;
  `}
`;
