import { LogoTooltip, TutorialTextBox } from "components/tutorial";

export default function Welcome() {
  return (
    <>
      <LogoTooltip />
      <TutorialTextBox currentStep={0} />
    </>
  );
}
