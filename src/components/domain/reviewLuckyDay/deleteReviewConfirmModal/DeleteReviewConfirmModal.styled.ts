import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding: 45px 20px 20px 20px;
`;

export const Logo_Sad = styled.div`
  width: 100px;
  height: 100px;
  margin: 30px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/images/logo-sad-blue.webp");
`;

export const Text_h1 = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    ${theme.fonts.headline1}
  `}
`;

export const Text_h2 = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    ${theme.fonts.headline2}
    margin: 10px 0px;
  `}
`;

export const ButtonBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  bottom: 22px;
  width: 86%;
`;
