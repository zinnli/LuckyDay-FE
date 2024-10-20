import { useTutorial } from "components/tutorial/hooks";
import { SvgButton } from "components/common";
import { LongBoxIcon } from "assets";

export default function TutorialStartButton() {
  const { startTutorial } = useTutorial();

  const handleStartTutorial = () => {
    startTutorial();
  };

  return (
    <SvgButton
      label="튜토리얼 체험하기"
      icon={<LongBoxIcon />}
      onClick={handleStartTutorial}
    />
  );
}
