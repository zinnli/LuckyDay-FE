import * as S from "./TutorialPage.styled";
import { useTutorial } from "components/tutorial/hooks";
import { TutorialSteps } from "components/tutorial/steps";

export default function TutorialPage() {
  const { currentStep } = useTutorial();

  const renderCurrentStep = (): React.ReactNode => {
    const CurrentStepComponent = TutorialSteps[currentStep];
    return CurrentStepComponent ? <CurrentStepComponent /> : null;
  };

  return (
    <>
      {currentStep === 0 || currentStep === 24 ? (
        renderCurrentStep()
      ) : (
        <S.TutorialLayoutContainer>
          <S.Layout>{renderCurrentStep()}</S.Layout>
        </S.TutorialLayoutContainer>
      )}
    </>
  );
}
