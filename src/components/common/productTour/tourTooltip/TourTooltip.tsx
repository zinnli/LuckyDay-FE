import * as S from "./TourTooltip.styled";

export default function TourTooltip({
  step,
  index,
  continuous,
  backProps,
  primaryProps,
  closeProps,
}: any) {
  return (
    <div>
      <S.TourTooltip>
        <S.Content>{step.content}</S.Content>
      </S.TourTooltip>
    </div>
  );
}
