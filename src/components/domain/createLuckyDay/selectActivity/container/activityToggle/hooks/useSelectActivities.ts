import type { UseFormSetValue, UseFormWatch } from "react-hook-form";

import type { CreateLuckyDayForm } from "types";

interface useSelectActivitiesProps {
  watch: UseFormWatch<CreateLuckyDayForm>;
  setValue: UseFormSetValue<CreateLuckyDayForm>;
  index: number;
  actNos?: number[];
}

const useSelectActivities = ({
  watch,
  setValue,
  index,
  actNos,
}: useSelectActivitiesProps) => {
  const handleStopPropagation = (e: React.MouseEvent): void => {
    e.stopPropagation();
  };

  const handleItemClick =
    (actNo: number) =>
    (e: React.MouseEvent): void => {
      handleStopPropagation(e);

      const selectActList = watch(`acts.${index}.actList`);

      const updatedSelectedItems = selectActList?.includes(actNo)
        ? selectActList?.filter((item) => item !== actNo)
        : [...(selectActList ?? []), actNo];

      setValue(`acts.${index}.actList`, [
        ...(selectActList ?? []),
        ...(actNos ?? []),
      ]);
      setValue(`acts.${index}.actList`, updatedSelectedItems);

      if (actNos?.length ?? 0 > (selectActList ?? [])?.length) {
        setValue(`acts.${index}.checked`, false);
      }
    };

  return { handleStopPropagation, handleItemClick };
};

export default useSelectActivities;
