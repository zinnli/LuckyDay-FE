import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding-top: 8%;

  @media (min-height: 945px) {
    min-height: 77.6vh;
  }

  @media (min-height: 1024px) {
    min-height: 78vh;
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

export const ReviewTextarea = styled.textarea`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 270px;
  height: 120px;
  padding: 5px 20px;
  margin-top: 70px;
  margin-bottom: 35px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.headline2};
  border: 0;
  resize: none;
  overflow-y: auto;
  white-space: pre-wrap;

  &:focus {
    outline: none;
  }
`;

export const ImageUploadBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 140px;
  margin-top: 30px;
`;

export const ImageBox = styled.div`
  position: absolute;
  overflow: hidden;
  top: -15px;
  width: 100%;
  height: 140px;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const CharCount = styled.div`
  ${({ theme }) => css`
    position: relative;
    align-self: flex-end;
    right: 42px;
    bottom: 35px;
    ${theme.fonts.body1};
    color: ${theme.colors.black};
  `}
`;

export const ErrorContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
`;

export const ErrorText = styled.p`
  ${({ theme }) => css`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin-top: 20px;
    color: ${theme.colors.black};
    ${theme.fonts.body2}
  `}
`;
