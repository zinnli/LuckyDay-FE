import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";
import * as S from "pages/luckyBoard/luckyBoardBefore/LuckyBoardBeforePage.styled";

export const Container = styled(S.Container)``;

export const ActivitiesRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ActivityButton = styled.div<{
  isOpen: boolean;
  isDisabled?: boolean;
}>`
  ${({ isOpen, isDisabled }) => css`
    position: relative;
    width: 368px;
    height: fit-content;
    margin-bottom: ${isOpen && "16px"};
    cursor: ${isDisabled && "not-allowed"};

    @media (max-width: 380px) {
      width: 308px;
    }
  `}
`;

export const Img = styled.img`
  width: 100%;
`;

export const ActivityBox = styled.div<{ isOpen: boolean }>`
  ${({ isOpen }) => css`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    //NOTE: 피그마와 다르게 적용해야 제 위치에 붙음
    padding: ${isOpen ? "0 20px 0 37px" : "0 20px 0 30px"};

    @media (max-width: 380px) {
      padding: ${isOpen ? "0 17px 0 28px" : "0 10px 0 23px"};
    }
  `}
`;

export const ActivityInfo = styled.div<{ isOpen: boolean; isChecked: boolean }>`
  ${({ isOpen, isChecked }) => css`
    display: grid;
    grid-template-columns: ${isChecked
      ? "35px 1fr 24px 24px"
      : "35px 1fr 24px"};
    column-gap: 10px;
    align-items: center;
    height: fit-content;
    padding: 15px 0 ${isOpen ? "20px" : "18px"} 0;
    text-align: start;
    cursor: pointer;

    & > svg:first-of-type {
      margin: ${isOpen ? "8px 0 0 -3px" : "8px 5px 0 5px"};
    }

    @media (max-width: 380px) {
      padding: 11px 0 ${isOpen ? "8px" : "18px"} 0;

      & > svg:first-of-type {
        margin-left: ${isOpen ? "-3px" : "3px"};
      }
    }
  `}
`;

export const ActivityTitle = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.headline1};
    margin-top: 4%;

    @media (max-width: 380px) {
      ${theme.fonts.headline3};
    }
  `}
`;

export const arrowIcon = (isOpen: boolean) =>
  css`
    width: 24px;
    height: 24px;
    rotate: ${isOpen ? "0deg" : "180deg"};
  `;

export const Activities = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 14px;
  row-gap: 8px;
  width: 320px;
  flex-wrap: wrap;

  @media (max-width: 380px) {
    width: 260px;
  }
`;

export const Activity = styled.button<{
  isClickable?: boolean;
  isSelected?: boolean;
}>`
  ${({ theme, isClickable, isSelected }) => css`
    ${theme.fonts.body1};
    display: flex;
    align-items: center;
    column-gap: 3px;
    width: fit-content;
    border-radius: 30px;
    padding: ${isSelected ? "0 11px 0 6px" : "0 11px"};
    color: ${isSelected
      ? theme.colors.black
      : !isClickable
      ? theme.colors.lightGray
      : theme.colors.gray};
    background-color: ${isSelected
      ? theme.colors.lightOrange
      : isClickable
      ? theme.colors.lightBeige
      : theme.colors.gray};

    svg {
      display: ${!isSelected && "none"};
    }

    &:hover {
      color: ${isClickable && theme.colors.orange};

      & > svg > path {
        fill: ${theme.colors.orange};
      }
    }

    @media (max-width: 380px) {
      ${theme.fonts.headline2};
    }
  `}
`;

export const icon = css`
  width: 12px;
  height: 12px;
`;

export const input = (theme: Theme) =>
  css`
    ${theme.fonts.body1};
    width: 22px;
    padding: 0;
    border: 0;
    background-color: ${theme.colors.lightBeige};
    outline: none;
  `;

export const customActiviyItem = styled.span`
  position: absolute;
  visibility: hidden;
`;

export const CustomInfo = styled.div<{ isCustom?: boolean }>`
  ${({ theme, isCustom }) => css`
    ${theme.fonts.body1};
    position: absolute;
    bottom: 20px;
    right: 20px;
    display: ${isCustom ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    row-gap: 5px;
    width: fit-content;

    @media (max-width: 380px) {
      & > span,
      button {
        ${theme.fonts.body2};
      }
    }
  `}
`;

export const ContentLength = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.black};
  `}
`;

export const AddButton = styled.button`
  ${({ theme }) => css`
    ${theme.fonts.body1};
    height: 20px;
    padding: 0 18px;
    border-radius: 10px;
    color: ${theme.colors.lightBeige};
    background-color: ${theme.colors.black};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  `}
`;

export const CustomActivity = styled(Activity)<{ hasValue?: boolean }>`
  ${({ hasValue, isSelected, theme }) => css`
    height: 20px;
    padding: ${hasValue && "0 6px 0 11px"};
    background-color: ${isSelected
      ? theme.colors.lightOrange
      : theme.colors.lightBeige};

    svg {
      width: 15px;
      height: 15px;
    }
  `}
`;

export const CustomActivityWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 14px;
  row-gap: 8px;
  height: 100%;
  overflow-y: auto;
`;

export const CheckboxWrapper = styled.div<{
  isOpen: boolean;
  isDisabled: boolean;
}>`
  ${({ isOpen, isDisabled }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      display: none;
    }

    input + label {
      width: 24px;
      height: 24px;
      background: ${isOpen
          ? `url("images/ic_uncheckedOrange.svg")`
          : `url("images/ic_uncheckedBeige.svg")`}
        no-repeat;
      cursor: ${isDisabled ? "not-allowed" : "pointer"};
    }
    input:checked + label {
      width: 24px;
      height: 24px;
      background: ${isOpen
          ? `url("images/ic_checkedOrange.svg")`
          : `url("images/ic_checkedBeige.svg")`}
        no-repeat;
    }
  `}
`;

export const ButtonBox = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.headline2};
    position: absolute;
    top: 8px;
    left: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 6px;
  `}
`;

export const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: calc(var(--vh, 1vh) * 100 - 80px);
  min-height: calc(100% - 80px);
`;

export const Button = styled.button`
  position: absolute;
  bottom: 7%;
  right: 5%;
  width: 90px;

  @media (max-width: 380px) {
    bottom: 6%;
  }
`;

export const beigeIcon = (theme: Theme) => css`
  path {
    fill: ${theme.colors.beige};
  }
`;

export const buttonArrowIcon = css`
  width: 24px;
  height: 24px;
  rotate: 90deg;
`;

export const CustomInfoText = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.body1};

    & > strong {
      color: ${theme.colors.orange};
    }
  `}
`;
