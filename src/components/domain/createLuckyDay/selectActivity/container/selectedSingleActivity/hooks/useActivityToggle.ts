import { useFormContext } from "react-hook-form";

import type { CreateLuckyDayForm } from "types";

interface useActivityToggleProps {
  activityLabel: string;
  toggle: string | null;
  text: string | null;
  handleToggle: (toggle: string | null) => void;
  handleEnterText: (text: string) => void;
  actNos?: number[];
}

const useActivityToggle = ({
  activityLabel,
  toggle,
  text,
  actNos,
  handleToggle,
  handleEnterText,
}: useActivityToggleProps) => {
  const { watch, setValue } = useFormContext<CreateLuckyDayForm>();

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
        setValue(`acts.${index}.selectedActs`, []);
      }
      if (currentCheckedValue) {
        setValue(`acts.${index}.checked`, true);
        setValue(`acts.${index}.selectedActs`, [
          ...(watch(`acts.${index}.selectedActs`) ?? []),
          ...(actNos ?? []),
        ]);
      }
    };

  return { handleToggleClick, handleClickCheckbox };
};

export default useActivityToggle;
