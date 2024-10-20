import { Theme, css } from "@emotion/react";
import styled from "@emotion/styled";

export const ViewLuckyActivityPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-height: 945px) {
    min-height: 80vh;
  }
`;

export const Img = styled.img`
  padding: 20px 30px;
`;

export const LuckydayInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-top: 8%;
    gap: 8px;

    span:first-of-type,
    span:last-of-type {
      ${theme.fonts.headline1};
    }
  `}
`;

interface LuckydayDetailInfoProps {
  isLongText: boolean;
}

export const LuckydayDetailInfo = styled.div<LuckydayDetailInfoProps>`
  ${({ theme, isLongText }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    svg {
      position: absolute;
      top: 27px;
      left: 50%;
      transform: translateX(-50%);
    }

    p:first-of-type {
      ${theme.fonts.headline1};
      position: absolute;
      top: 25%;
      left: 50%;
      transform: translateX(-50%);

      @media (max-width: 425px) {
        ${isLongText &&
        css`
          ${theme.fonts.headline2};
          top: 26%;
        `}
      }
    }

    p:last-of-type {
      ${theme.fonts.headline2};
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }
  `}
`;

export const svgFrame = (theme: Theme) => css`
  width: 100px;

  path {
    fill: ${theme.colors.beige};
  }
`;

export const Button = styled.button`
  ${({ theme }) => css`
    position: relative;
    margin: 8% 0px;

    & > span {
      ${theme.fonts.headline2};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `}
`;
