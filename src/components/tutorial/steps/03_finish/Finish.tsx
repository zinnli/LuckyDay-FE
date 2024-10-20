import * as S from "./Finish.styled";
import { TUTORIAL_STEP_ORDER } from "../tutorialSteps";
import { LogoTooltip, TutorialTextBox } from "components/tutorial";
import { StepWrapper } from "../StepWrapper";

export default function Finish() {
  return (
    <StepWrapper stepNumber={TUTORIAL_STEP_ORDER.length - 1}>
      <S.FinishContainer>
        <LogoTooltip />
        <TutorialTextBox currentStep={TUTORIAL_STEP_ORDER.length - 1} />
      </S.FinishContainer>
    </StepWrapper>
  );
}
