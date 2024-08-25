import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
  overflow-y: scroll;
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

export const NoticeTitle = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 70px;
    padding: 5px;
    ${theme.fonts.headline1}
    color: ${theme.colors.black};
    border-bottom: 1px solid ${theme.colors.lightPurple};
  `}
`;

export const NoticeDate = styled.div`
  ${({ theme }) => css`
    padding-top: 8px;
    ${theme.fonts.body2}
    color: ${theme.colors.gray};
  `}
`;

export const NoticeContent = styled.div`
  ${({ theme }) => css`
    padding: 18px 5px;
    text-align: left;
    line-height: 1.6;
    white-space: pre-wrap;
    ${theme.fonts.headline2}
    color: ${theme.colors.black};

    span {
      color: ${theme.colors.orange};
    }

    a {
      text-decoration: underline;
      color: ${theme.colors.lightOrange};
    }

    ul {
      list-style-type: disc;
      margin-left: 10px;
      padding: 0px 10px;
    }

    li {
      margin: 10px 0px;
    }
  `}
`;
