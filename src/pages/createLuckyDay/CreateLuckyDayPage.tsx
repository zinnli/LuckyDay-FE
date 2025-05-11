import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormProvider } from "react-hook-form";

import {
  SelectActivity,
  SelectCount,
  SelectPeriod,
  SelectExceptDate,
  ProgressBar,
  ButtonLayout,
  CreateLuckyDayModal,
} from "components";
import { ArrowIcon } from "assets";
import { useModal, useToast } from "hooks";
import { useGetLuckyDaysActivities } from "services";
import { useCreateLuckyDayForm } from "./hooks";
import * as S from "./CreateLuckyDayPage.styled";

const PROGRESS_STATE = {
  ACTIVITY: 0,
  PERIOD: 1,
  COUNT: 2,
  EXP_DATE: 3,
};

export default function CreateLuckyDayPage() {
  const navigate = useNavigate();

  const [currentProgress, setCurrentProgress] = useState(0);

  const { data } = useGetLuckyDaysActivities();

  const { formMethod } = useCreateLuckyDayForm({ data });
  const { handleOpenModal } = useModal();
  const { addToast } = useToast();

  const changeCurrentProgress = (progress: number) => (): void => {
    const changedProgress = currentProgress + progress;

    if (changedProgress < 0) return addToast({ content: "첫 페이지 입니다." });

    if (changedProgress > 3)
      return addToast({ content: "마지막 페이지 입니다." });

    setCurrentProgress(changedProgress);
  };

  const handleClickNextButton = () => {
    const emptyActs = formMethod
      .watch("acts")
      .filter(({ selectedActs }) => !!selectedActs)
      .flatMap(({ selectedActs }) => selectedActs);

    if (
      currentProgress === 0 &&
      !emptyActs?.length &&
      !formMethod.watch("customActs")?.length
    ) {
      return addToast({ content: "최소 1개의 카테고리를 선택해 주세요." });
    }

    if (currentProgress === 1 && formMethod.watch("period") === 0) {
      return addToast({ content: "최소 1개의 기간을 선택해 주세요." });
    }

    if (currentProgress !== 3) return changeCurrentProgress(+1)();

    handleOpenModal(
      <CreateLuckyDayModal
        watch={formMethod.watch}
        handleSubmit={formMethod.handleSubmit}
      />
    );
  };

  useEffect(() => {
    const hasLuckyday = sessionStorage.getItem("hasLuckyday");

    if (hasLuckyday === "1") {
      navigate("/luckyboard");
      return addToast({ content: "이미 생성된 럭키데이가 있어요." });
    }
  }, []);

  return (
    <ButtonLayout
      variant="hasIcon"
      firstLabel="prev"
      secondLabel="next"
      icon={<ArrowIcon />}
      handleClickFirstButton={changeCurrentProgress(-1)}
      handleClickSecondButton={handleClickNextButton}
    >
      <S.CreateLuckyDay>
        <FormProvider {...formMethod}>
          <ProgressBar progressState={currentProgress} />
          {PROGRESS_STATE.ACTIVITY === currentProgress && (
            <SelectActivity data={data} />
          )}
          {PROGRESS_STATE.PERIOD === currentProgress && <SelectPeriod />}
          {PROGRESS_STATE.COUNT === currentProgress && <SelectCount />}
          {PROGRESS_STATE.EXP_DATE === currentProgress && <SelectExceptDate />}
        </FormProvider>
      </S.CreateLuckyDay>
    </ButtonLayout>
  );
}
