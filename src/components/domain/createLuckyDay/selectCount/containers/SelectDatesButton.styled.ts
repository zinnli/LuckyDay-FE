import styled from "@emotion/styled";
import { Theme, css } from "@emotion/react";

export const svgFrame = (theme: Theme) => css`
  width: 100%;

  svg {
    width: 100%;

    path {
      fill: ${theme.colors.lightOrange};
    }
  }
`;

export const SelectDatesButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`;
