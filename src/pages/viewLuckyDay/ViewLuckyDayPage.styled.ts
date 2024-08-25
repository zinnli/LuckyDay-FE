import styled from "@emotion/styled";
import { css, Theme } from "@emotion/react";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding-top: 8%;

  @media (min-height: 945px) {
    min-height: 70vh;
  }

  @media (min-height: 1024px) {
    min-height: 71.3vh;
  }
`;

export const ReviewBox = styled.div`
  aspect-ratio: 370 / 390;
  max-width: 370px;
  width: 100%;
  margin: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/img-review.webp");

  @media (max-width: 390px) {
    max-width: 350px;
    margin: 24px;
  }
`;

export const TextBox = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    ${theme.fonts.headline1};
    text-align: center;
    white-space: pre-wrap;
  `}
`;

export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -30px;
`;

export const Image = styled.div`
  width: 200px;
  height: 140px;
  margin-top: 10px;
  margin-bottom: 100px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const DefaultImage = styled.div`
  width: 100px;
  height: 100px;
  margin-top: 20px;
  margin-bottom: 120px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ReviewTextBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 270px;
    height: 120px;
    padding: 20px;
    margin-top: -65px;
    color: ${theme.colors.black};
    ${theme.fonts.headline2}
    word-break: break-word;
    white-space: pre-wrap;
    overflow-y: auto;
  `}
`;

export const SpinnerBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: -120px;
    background-color: ${theme.colors.lightBeige};
  `}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 70%;
  height: 60px;

  @media (max-width: 380px) {
    margin-top: -20px;
  }
`;

export const Button = styled.button`
  ${({ theme }) => css`
    position: relative;
    width: 110px;
    height: 42px;

    & > div {
      width: 100%;
      height: 100%;
    }

    & > span {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      ${theme.fonts.headline2};
      column-gap: 4px;
    }
  `}
`;

export const svgFrame = (theme: Theme) => css`
  path {
    fill: ${theme.colors.beige};
  }
`;
