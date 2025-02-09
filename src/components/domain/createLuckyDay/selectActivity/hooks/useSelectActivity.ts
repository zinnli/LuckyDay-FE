import { useState } from "react";
import type { UseFormSetValue, UseFormWatch } from "react-hook-form";

import type {
  Activities,
  ActivitiesServerModel,
  CreateLuckyDayForm,
} from "types";

interface useSelectActivityProps {
  dataRes?: ActivitiesServerModel["resData"];
  currentActsUnChecked: {
    category: string;
    actList?: number[];
    checked: boolean;
  }[];
  setValue: UseFormSetValue<CreateLuckyDayForm>;
  watch: UseFormWatch<CreateLuckyDayForm>;
}

const useSelectActivity = ({
  dataRes,
  currentActsUnChecked,
  setValue,
  watch,
}: useSelectActivityProps) => {
  const [toggle, setToggle] = useState<string | null>(null);

  const handleToggle = (toggleLabel: string | null): void =>
    setToggle(toggleLabel);

  const changeIndex = (
    arr: Activities[] | undefined,
    idx1: number,
    idx2: number
  ): Activities[] => {
    if (!arr) return [];

    const newArr = [...arr];
    [newArr[idx1], newArr[idx2]] = [newArr[idx2], newArr[idx1]];

    return newArr;
  };

  const handleCheckAllBoxes = (): void => {
    const arr = changeIndex(dataRes, 2, 3);
    const actListArr = watch("acts").flatMap((item) => item.actList);

    const acts = arr
      .map((activity) => ({
        category: activity.category ?? "",
        actList:
          activity.actList.length > 0 && actListArr.length === 0
            ? activity.actList.map(({ actNo }) => actNo)
            : [],
        checked: currentActsUnChecked?.length === 5,
      }))
      .filter(({ category }) => category !== "직접 입력");

    if (!acts) return;

    setValue("acts", acts.reverse());
  };

  return { toggle, handleToggle, handleCheckAllBoxes };
};

export default useSelectActivity;
