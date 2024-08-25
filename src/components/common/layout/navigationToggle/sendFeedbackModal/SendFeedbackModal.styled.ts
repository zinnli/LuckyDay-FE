import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding: 40px 20px 20px 20px;
`;

export const Text_h1 = styled.div`
  ${({ theme }) => css`
    margin-bottom: 10px;
    ${theme.fonts.headline1}
    color: ${theme.colors.black};
  `}
`;

export const Textarea = styled.textarea`
  ${({ theme }) => css`
    width: 210px;
    height: 200px;
    padding: 15px 0px;
    border: none;
    outline: none;
    resize: none;
    background: transparent;
    ${theme.fonts.headline2};
    color: ${theme.colors.black};
    border-top: 1px solid ${theme.colors.gray};

    ::placeholder {
      ${theme.fonts.headline3};
      color: ${theme.colors.gray};
    }
  `}
`;

export const CharCount = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-self: flex-start;
    margin: 5px 0px 0px 20px;
    ${theme.fonts.body1};
    color: ${theme.colors.black};
  `}
`;

export const ErrorText = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 16px;
    margin: 10px 0px 5px 0px;
    ${theme.fonts.body2};
    color: ${theme.colors.orange};
  `}
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
