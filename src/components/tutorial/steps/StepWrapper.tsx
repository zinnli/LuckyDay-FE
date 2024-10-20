import { useEffect, useContext } from "react";
import { TutorialContext } from "../context/TutorialContext";
import { HighlightedButton, TutorialTextBoxPosition } from "types";

interface StepWrapperProps {
  children: React.ReactNode;
  stepNumber: number;
  tutorialTextBoxPosition?: TutorialTextBoxPosition;
  highlightedButton?: HighlightedButton;
}

export function StepWrapper({
  stepNumber,
  tutorialTextBoxPosition,
  highlightedButton,
  children,
}: StepWrapperProps) {
  const { setTutorialTextBoxPosition, setHighlightedButton, currentStep } =
    useContext(TutorialContext);

  useEffect(() => {
    if (currentStep === stepNumber) {
      setTutorialTextBoxPosition(tutorialTextBoxPosition || null);
      setHighlightedButton(highlightedButton || null);
    }

    return () => {
      if (currentStep === stepNumber) {
        setTutorialTextBoxPosition(null);
        setHighlightedButton(null);
      }
    };
  }, [
    currentStep,
    stepNumber,
    tutorialTextBoxPosition,
    highlightedButton,
    setTutorialTextBoxPosition,
    setHighlightedButton,
  ]);

  return <>{children}</>;
}
