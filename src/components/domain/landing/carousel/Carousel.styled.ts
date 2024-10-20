import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: hidden;
`;

export const SlideContainer = styled.div<{ activeIndex: number }>`
  display: flex;
  max-width: 300px;
  transition: transform 0.5s ease-in-out;
  transform: ${({ activeIndex }) => `translateX(-${activeIndex * 100}%)`};
`;

interface SlideProps {
  active: boolean;
}

export const Slide = styled.div<SlideProps>`
  flex: 0 0 100%;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 430px;
  max-height: 414px;
  object-fit: contain;
  margin-bottom: 5%;

  @media (max-width: 405px) {
    max-height: 310px;
  }

  @media (max-height: 700px) {
    margin: 0px;
  }
`;

export const TextBox = styled.div`
  ${({ theme }) => css`
    width: 315px;
    height: 60px;
    margin: 0px 0px 24px 0px;
    text-align: center;
    white-space: pre-wrap;
    ${theme.fonts.logo};
    color: ${theme.colors.black};

    @media (max-height: 700px) {
      margin: 0px;
    }
  `}
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 8% 0px;
  padding: 0px 15px 0px 15px;
  box-sizing: border-box;

  @media (max-width: 405px) {
    width: 88%;
  }

  @media (max-height: 700px) {
    margin: 4% 0px;
  }
`;

export const button = css`
  width: 40px;
  height: 40px;
  background-size: cover;
  background-color: transparent;
  background-image: url("/images/img_empty_beige.png");
  border: none;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  & > svg {
    width: 24px;
    height: 24px;
  }
`;

export const PrevButton = styled.button`
  ${button};
`;

export const PrevArrowIcon = css`
  rotate: 270deg;
`;

export const NextButton = styled.button`
  ${button};
`;

export const NextArrowIcon = css`
  rotate: 90deg;
`;

export const DotContainer = styled.ul`
  width: 135px;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 10px 0;
`;

interface DotProps {
  active: boolean;
}

export const Dot = styled.li<DotProps>`
  ${({ theme, active }) => css`
    width: 10px;
    height: 10px;
    margin: 0 5px;
    border-radius: 50%;
    background-color: ${active ? theme.colors.black : theme.colors.gray};
  `}
`;
