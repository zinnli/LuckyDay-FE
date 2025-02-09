import { useFormContext } from "react-hook-form";

import type { CreateLuckyDayForm } from "types";

interface useSelectActivitiesProps {
  index: number;
  actNos?: number[];
}

const useSelectActivities = ({ index, actNos }: useSelectActivitiesProps) => {
  const { watch, setValue } = useFormContext<CreateLuckyDayForm>();

  const handleStopPropagation = (e: React.MouseEvent): void => {
    e.stopPropagation();
  };

  const handleItemClick =
    (actNo: number) =>
    (e: React.MouseEvent): void => {
      handleStopPropagation(e);

      const selectActList = watch(`acts.${index}.selectedActs`);

      const updatedSelectedItems = selectActList?.includes(actNo)
        ? selectActList?.filter((item) => item !== actNo)
        : [...(selectActList ?? []), actNo];

      setValue(`acts.${index}.selectedActs`, [
        ...(selectActList ?? []),
        ...(actNos ?? []),
      ]);
      setValue(`acts.${index}.selectedActs`, updatedSelectedItems);

      if (actNos?.length ?? 0 > (selectActList ?? [])?.length) {
        setValue(`acts.${index}.checked`, false);
      }
    };

  return { handleStopPropagation, handleItemClick };
};

export default useSelectActivities;
