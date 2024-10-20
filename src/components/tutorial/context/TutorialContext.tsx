import {
  ReactNode,
  useState,
  useEffect,
  useCallback,
  createContext,
} from "react";
import { TUTORIAL_STEP_ORDER } from "../steps/tutorialSteps";
import { HighlightedButton, TutorialTextBoxPosition } from "types";

const TOTAL_STEPS = TUTORIAL_STEP_ORDER.length;

const DEFAULT_TEXT_BOX_POSITION: TutorialTextBoxPosition = { top: "15%" };

interface TutorialContextType {
  isTutorialActive: boolean;
  setIsTutorialActive: (value: boolean) => void;
  startTutorial: () => void;
  endTutorial: () => void;
  nextStep: () => void;
  currentStep: number;
  isLastStep: boolean;
  tutorialTextBoxPosition: TutorialTextBoxPosition;
  setTutorialTextBoxPosition: (
    position: TutorialTextBoxPosition | null
  ) => void;
  highlightedButton: HighlightedButton | null;
  setHighlightedButton: (button: HighlightedButton | null) => void;
}

export const TutorialContext = createContext<TutorialContextType>({
  isTutorialActive: false,
  setIsTutorialActive: () => {},
  startTutorial: () => {},
  endTutorial: () => {},
  nextStep: () => {},
  currentStep: 0,
  isLastStep: false,
  tutorialTextBoxPosition: DEFAULT_TEXT_BOX_POSITION,
  setTutorialTextBoxPosition: () => {},
  highlightedButton: null,
  setHighlightedButton: () => {},
});

interface TutorialProviderProps {
  children: ReactNode;
}

export default function TutorialProvider({ children }: TutorialProviderProps) {
  const [isTutorialActive, setIsTutorialActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [tutorialTextBoxPosition, setTutorialTextBoxPosition] =
    useState<TutorialTextBoxPosition>(DEFAULT_TEXT_BOX_POSITION);
  const [highlightedButton, setHighlightedButton] =
    useState<HighlightedButton | null>(null);

  // NOTE: currentStep이 변경될 때마다 isLastStep 업데이트
  useEffect(() => {
    setIsLastStep(currentStep === TOTAL_STEPS - 1);
  }, [currentStep]);

  const startTutorial = () => {
    setIsTutorialActive(true);
    setCurrentStep(0);
  };

  const endTutorial = useCallback(() => {
    setIsTutorialActive(false);
    setCurrentStep(0);
    setTutorialTextBoxPosition(DEFAULT_TEXT_BOX_POSITION);
    setHighlightedButton(null);
  }, []);

  const nextStep = useCallback(() => {
    setCurrentStep((prev) => {
      const next =
        prev === TOTAL_STEPS - 1 ? 0 : Math.min(prev + 1, TOTAL_STEPS - 1);
      if (next === 0) {
        endTutorial();
      }
      return next;
    });
  }, [endTutorial]);

  const setTutorialTextBoxPositionWithDefault = useCallback(
    (position: TutorialTextBoxPosition | null) => {
      setTutorialTextBoxPosition(position || DEFAULT_TEXT_BOX_POSITION);
    },
    []
  );

  return (
    <TutorialContext.Provider
      value={{
        isTutorialActive,
        setIsTutorialActive,
        startTutorial,
        endTutorial,
        nextStep,
        currentStep,
        isLastStep,
        tutorialTextBoxPosition,
        setTutorialTextBoxPosition: setTutorialTextBoxPositionWithDefault,
        highlightedButton,
        setHighlightedButton,
      }}
    >
      {children}
    </TutorialContext.Provider>
  );
}
