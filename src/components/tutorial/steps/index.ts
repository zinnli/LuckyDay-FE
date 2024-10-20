import Welcome from "./00_welcome/Welcome";
import BeforeBoard from "./01_createCycle/01_beforeBoard/BeforeBoard";
// import SelectActivityStep1 from "./01_createCycle/02_selectActivity/Step1";
// import SelectActivityStep2 from "./01_createCycle/02_selectActivity/Step2";
// NOTE: 이 곳에 나머지 step 추가
import Finish from "./03_finish/Finish";

export const TutorialSteps = [
  Welcome,
  BeforeBoard,
  //   SelectActivityStep1,
  //   SelectActivityStep2,
  // NOTE: 다른 모든 Step 컴포넌트들 추가
  Finish,
];
