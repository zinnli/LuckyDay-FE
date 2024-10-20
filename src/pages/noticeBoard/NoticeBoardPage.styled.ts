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
    color: ${theme.colors.black};
    ${theme.fonts.headline1}
    border-top: 1px  solid ${theme.colors.gray};
  `}
`;

export const MenuBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    height: 65px;
    padding: 5px;
    color: ${theme.colors.black};
    ${theme.fonts.headline1}
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
