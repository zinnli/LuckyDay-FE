import React from "react";

export const TUTORIAL_STEPS = {
  WELCOME: "0",
  CREATE_CYCLE: {
    EMPTY_BOARD: "1",
    SELECT_ACTIVITY: {
      STEP_1: "2.1",
      STEP_2: "2.2",
      // ...
      STEP_8: "2.8",
    },
    SET_DATE: {
      STEP_1: "3.1",
      STEP_2: "3.2",
      STEP_3: "3.3",
    },
    SET_NUMBER: {
      STEP_1: "4.1",
      STEP_2: "4.2",
    },
    EXCEPT_DATE: {
      STEP_1: "5.1",
      STEP_2: "5.2",
    },
    CONFIRM: "6",
    ANIMATION: "7",
  },
  CHECK: {
    FILLED_BOARD: {
      STEP_1: "8.1",
      STEP_2: "8.2",
      STEP_3: "8.3",
    },
    VIEW_ACTIVITY: "9",
    REVIEW: "10",
  },
  FINISH: "11",
} as const;

export const TUTORIAL_STEP_ORDER = [
  TUTORIAL_STEPS.WELCOME,
  TUTORIAL_STEPS.CREATE_CYCLE.EMPTY_BOARD,
  // TUTORIAL_STEPS.CREATE_CYCLE.SELECT_ACTIVITY.STEP_1,
  // TUTORIAL_STEPS.CREATE_CYCLE.SELECT_ACTIVITY.STEP_2,
  // NOTE: ...  나머지 모든 단계 순서대로 나열
  TUTORIAL_STEPS.FINISH,
];

export type TutorialStepKey = (typeof TUTORIAL_STEP_ORDER)[number];

// 컴포넌트 매핑
export const TUTORIAL_COMPONENTS: Record<TutorialStepKey, React.ComponentType> =
  {
    "0": React.lazy(() => import("./00_welcome/Welcome")),
    "1": React.lazy(
      () => import("./01_createCycle/01_beforeBoard/BeforeBoard")
    ),
    // "2.1": React.lazy(() => import("./01_createCycle/02_selectActivity/Step1")),
    // "2.2": React.lazy(() => import("./01_createCycle/02_selectActivity/Step2")),
    // NOTE: ... 나머지 모든 단계에 대한 컴포넌트 매핑
    "11": React.lazy(() => import("./03_finish/Finish")),
  };
