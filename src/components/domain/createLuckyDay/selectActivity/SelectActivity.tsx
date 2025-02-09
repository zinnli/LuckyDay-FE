import React, { Fragment } from "react";
import { useFormContext } from "react-hook-form";

import { activities, CheckIcon } from "assets";
import type { ActivitiesServerModel, CreateLuckyDayForm } from "types";
import { ActivityToggle } from "./container";
import { useSelectActivity } from "./hooks";
import * as S from "./SelectActivity.styled";

interface SelectActivityProps {
  data?: ActivitiesServerModel;
}

function SelectActivity({ data }: SelectActivityProps) {
  const { watch } = useFormContext<CreateLuckyDayForm>();

  const actNos = data?.resData.flatMap((activity) =>
    activity.actList.map(({ actNo }) => actNo)
  );
  const currentActsUnChecked = watch("acts")?.filter(({ checked }) => !checked);

  const { toggle, handleToggle, handleCheckAllBoxes } = useSelectActivity({
    serverActivities: data?.resData,
    currentActsUnChecked,
  });

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
