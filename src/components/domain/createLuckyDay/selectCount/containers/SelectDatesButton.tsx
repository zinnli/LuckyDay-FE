import React from "react";

import { SvgFrame } from "components";
import { CircleBoxIcon } from "assets";
import * as S from "./SelectDatesButton.styled";

interface SelectDatesButtonProps {
  Icon: React.ReactNode;
  handleSelectCounts: () => void;
}

export default function SelectDatesButton({
  Icon,
  handleSelectCounts,
}: SelectDatesButtonProps) {
  return (
    <S.SelectDatesButton onClick={handleSelectCounts}>
      <SvgFrame css={S.svgFrame} icon={<CircleBoxIcon />} />
      {Icon}
    </S.SelectDatesButton>
  );
}
