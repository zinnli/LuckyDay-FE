import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 20px;
  overflow-y: auto;
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
    flex-direction: column;
    width: 100%;
    padding: 2px;
    margin-bottom: 15px;
    color: ${theme.colors.black};
    ${theme.fonts.headline1}
    border-bottom: 1px solid ${theme.colors.gray};
  `}
`;

export const JobBox = styled.div`
  ${({ theme }) => css`
    margin: 0px 10px;
    color: ${theme.colors.orange};
    ${theme.fonts.headline2};
  `}
`;

export const ProfileBox = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProfileImage = styled.img`
  width: 45px;
  height: 45px;
  margin: 12px 15px;
  object-fit: cover;
`;

export const EmailBox = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    ${theme.fonts.headline2}
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    color: ${theme.colors.gray};
    ${theme.fonts.body2}
  `}
`;
