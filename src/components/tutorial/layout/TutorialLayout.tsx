import * as S from "./TutorialLayout.styled";
import React, { useState, useContext } from "react";
import { TutorialContext } from "../context/TutorialContext";
import { useTutorial } from "components/tutorial/hooks";
import { TUTORIAL_STEP_ORDER } from "../steps/tutorialSteps";
import { TutorialTextBox, CloseTutorialConfirmModal } from "components";
import { CloseIcon, CircleBoxIcon } from "assets";
import { SvgFrame } from "components/common";
import TutorialPage from "pages/tutorial/TutorialPage";

export default function TutorialLayout() {
  const { isTutorialActive, endTutorial, currentStep } = useTutorial();
  const { tutorialTextBoxPosition, highlightedButton } =
    useContext(TutorialContext);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleCloseClick = () => {
    setShowConfirmModal(true);
  };

  const handleConfirm = () => {
    endTutorial();
  };

  if (!isTutorialActive) return null;

  const isWelcomeOrFinishStep =
    currentStep === 0 || currentStep === TUTORIAL_STEP_ORDER.length - 1;

  const renderHighlightedButton = () => {
    console.log("Rendering highlighted button:", highlightedButton);
    if (!highlightedButton) return null;

    let style: React.CSSProperties = {
      position: "absolute",
      zIndex: 999,
    };

    if (highlightedButton.selector) {
      const element = document.querySelector(highlightedButton.selector);
      if (element) {
        const rect = element.getBoundingClientRect();
        style = {
          ...style,
          top: `${rect.top}px`,
          left: `${rect.left}px`,
          width: `${rect.width}px`,
          height: `${rect.height}px`,
        };
      }
    } else if (highlightedButton.position) {
      style = { ...style, ...highlightedButton.position };
    }

    return (
      <S.HighlightedButtonWrapper style={style}>
        {React.cloneElement(highlightedButton.component as React.ReactElement, {
          style: { width: "100%", height: "100%" },
        })}
      </S.HighlightedButtonWrapper>
    );
  };

  return (
    <>
      {!isWelcomeOrFinishStep && (
        <S.TutorialFullPage>
          <TutorialPage />
        </S.TutorialFullPage>
      )}
      <S.TutorialOverlay>
        <S.TutorialContent>
          <S.CloseButtonWrapper>
            <S.CloseButton onClick={handleCloseClick}>
              <SvgFrame css={S.svgFrame} icon={<CircleBoxIcon />} />
              <span>
                <CloseIcon />
              </span>
            </S.CloseButton>
          </S.CloseButtonWrapper>
          {isWelcomeOrFinishStep && <TutorialPage />}
        </S.TutorialContent>

        <S.TutorialTextBoxWrapper
          style={isWelcomeOrFinishStep ? undefined : tutorialTextBoxPosition}
        >
          <TutorialTextBox currentStep={currentStep} />
        </S.TutorialTextBoxWrapper>
      </S.TutorialOverlay>
      {!isWelcomeOrFinishStep && renderHighlightedButton()}
      {showConfirmModal && (
        <CloseTutorialConfirmModal
          onClose={() => setShowConfirmModal(false)}
          onConfirm={handleConfirm}
        />
      )}
    </>
  );
}
