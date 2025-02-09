import React, { Fragment, useState } from "react";
import { useFormContext } from "react-hook-form";

import { activities, CheckIcon } from "assets";
import type {
  Activities,
  ActivitiesServerModel,
  CreateLuckyDayForm,
} from "types";
import { ActivityToggle } from "./container";
import * as S from "./SelectActivity.styled";

interface SelectActivityProps {
  data?: ActivitiesServerModel;
}

function SelectActivity({ data }: SelectActivityProps) {
  const [toggle, setToggle] = useState<string | null>(null);

  const { watch, setValue } = useFormContext<CreateLuckyDayForm>();

  const actNos = data?.resData.flatMap((activity) =>
    activity.actList.map(({ actNo }) => actNo)
  );
  const currentActsUnChecked = watch("acts")?.filter(({ checked }) => !checked);

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
    const arr = changeIndex(data?.resData, 2, 3);
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

  return (
    <>
      <S.HeadLineWrapper>
        <S.HeadLine>
          나에게 랜덤 배정될
          <br />
          럭키 데이 활동을 모두 골라 보세요.
        </S.HeadLine>
        <S.Button
          isNotChecked={currentActsUnChecked?.length === 5}
          onClick={handleCheckAllBoxes}
        >
          <CheckIcon css={S.icon} />
          {currentActsUnChecked?.length === 5 ? (
            <span>모두 선택</span>
          ) : (
            <span>전체 해제</span>
          )}
        </S.Button>
      </S.HeadLineWrapper>
      <S.Activities>
        {activities.map((activity, i) => {
          if (!actNos) return null;

          const checked = watch(`acts.${i}.checked`);
          const selectedActivity = data?.resData?.find(
            (item) => item.category === activity.label
          );
          const isOpen =
            toggle === activity.label ||
            (activity.label === toggle && toggle === activities[5].label);

          return (
            <Fragment key={activity.label}>
              <ActivityToggle
                activity={activity}
                data={selectedActivity}
                checked={checked}
                index={i}
                toggle={toggle}
                isOpen={isOpen}
                handleToggle={handleToggle}
              />
              {toggle === activities[5].label && i === 5 && (
                <S.CustomInfoText>
                  직접 입력 활동은 최대 <strong>5개</strong>까지 추가 가능해요.
                </S.CustomInfoText>
              )}
            </Fragment>
          );
        })}
      </S.Activities>
    </>
  );
}

export default SelectActivity;
