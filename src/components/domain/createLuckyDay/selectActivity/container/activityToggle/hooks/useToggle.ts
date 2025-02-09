import { UseFormSetValue, UseFormWatch } from "react-hook-form";
import { CreateLuckyDayForm } from "types";

interface useToogleProps {
  activityLabel: string;
  toggle: string | null;
  text: string | null;
  watch: UseFormWatch<CreateLuckyDayForm>;
  setValue: UseFormSetValue<CreateLuckyDayForm>;
  handleToggle: (toggle: string | null) => void;
  handleEnterText: (text: string) => void;
  actNos?: number[];
}

const useToggle = ({
  activityLabel,
  toggle,
  text,
  setValue,
  watch,
  actNos,
  handleToggle,
  handleEnterText,
}: useToogleProps) => {
  const handleToggleClick = (): void => {
    if (text) {
      handleEnterText("");
    }

    if (activityLabel === toggle) {
      return handleToggle(null);
    }

    handleToggle(activityLabel);
  };

  const handleClickCheckbox =
    (index: number) =>
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      const currentCheckedValue = e.target?.checked;

      if (!currentCheckedValue) {
        setValue(`acts.${index}.checked`, false);
        setValue(`acts.${index}.actList`, []);
      }
      if (currentCheckedValue) {
        setValue(`acts.${index}.checked`, true);
        setValue(`acts.${index}.actList`, [
          ...(watch(`acts.${index}.actList`) ?? []),
          ...(actNos ?? []),
        ]);
      }
    };

  return { handleToggleClick, handleClickCheckbox };
};

export default useToggle;
