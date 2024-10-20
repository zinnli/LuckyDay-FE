import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 25px;
`;

export const TitleBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    padding: 30px;
    ${theme.fonts.headline1}
    color: ${theme.colors.black};
    border-top: 1px solid ${theme.colors.gray};
  `}
`;

export const MenuBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 80px;
    padding: 5px;
    ${theme.fonts.headline1}
    color: ${theme.colors.black};
    border-bottom: 1px solid ${theme.colors.gray};
    transition: color 0.2s ease;
    cursor: pointer;

    &:hover {
      color: ${theme.colors.orange};
    }

    @media (max-width: 375px) {
      ${theme.fonts.headline2}
    }
  `}
`;

export const DateBox = styled.div`
  ${({ theme }) => css`
    padding-top: 8px;
    ${theme.fonts.body2}
    color: ${theme.colors.gray};
  `}
`;
