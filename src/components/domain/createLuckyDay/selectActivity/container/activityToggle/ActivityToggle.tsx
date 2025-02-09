import React, { useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";

import { Input } from "components";
import { ArrowIcon, CheckIcon, CloseIcon, activities } from "assets";
import type { Activities, CreateLuckyDayForm } from "types";
import { useCustomInput, useSelectActivities, useToggle } from "./hooks";
import * as S from "./ActivityToggle.styled";

interface ActivityToggleProps {
  activity: {
    icon: React.ReactNode;
    label: (typeof activities)[number]["label"];
  };
  data?: Activities;
  index: number;
  isOpen: boolean;
  toggle: string | null;
  checked: boolean;
  handleToggle: (toggle: string | null) => void;
}

function ActivityToggle({
  activity,
  data,
  index,
  checked,
  isOpen,
  toggle,
  handleToggle,
}: ActivityToggleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const activityRef = useRef<HTMLButtonElement>(null);

  const { watch } = useFormContext<CreateLuckyDayForm>();

  const actNos = data?.actList.map((item) => item.actNo);

  const {
    spanRef,
    inputWidth,
    text,
    handleEnterText,
    handleCustomItemChange,
    handleEnterCustomItemChange,
    DeleteCustomActivity,
    handleAddCustomActivity,
  } = useCustomInput();

  const { handleStopPropagation, handleItemClick } = useSelectActivities({
    index,
    actNos,
  });

  const { handleToggleClick, handleClickCheckbox } = useToggle({
    activityLabel: activity.label,
    toggle,
    text,
    handleToggle,
    handleEnterText,
    actNos,
  });

  useEffect(() => {
    const handleFocus = (e: MouseEvent): void => {
      if (
        ref.current?.contains(e.target as HTMLElement) ||
        toggle !== activity.label
      )
        return;
      handleToggle(null);
    };

    document.addEventListener("mouseup", handleFocus);
    return () => {
      document.removeEventListener("mouseup", handleFocus);
    };
  }, [handleToggle, toggle, activity.label]);

  return (
    <>
      <S.ActivityButton
        key={index}
        ref={ref}
        isOpen={isOpen}
        onClick={handleToggleClick}
      >
        <S.Img
          // TODO:innerShadow값이 있어 이미지로 따로 설정해줌
          isOpen={isOpen}
          src={
            isOpen
              ? "images/img_empty_mediumBox.webp"
              : "images/img_empty_longBox.webp"
          }
        />
        <S.ActivityBox isOpen={isOpen}>
          <S.ActivityInfo
            isOpen={isOpen}
            isChecked={activity.label !== "+) 직접 입력"}
          >
            {activity.icon}
            <S.ActivityTitle>{activity.label}</S.ActivityTitle>
            {activity.label !== "+) 직접 입력" && (
              <S.CheckboxWrapper isOpen={isOpen}>
                <input
                  type="checkbox"
                  checked={checked}
                  id={`check${index}`}
                  value=""
                  onChange={handleClickCheckbox(index)}
                />
                <label htmlFor={`check${index}`} />
              </S.CheckboxWrapper>
            )}
            <ArrowIcon css={S.arrowIcon(isOpen)} />
          </S.ActivityInfo>
          <S.Activities>
            {isOpen &&
              (data ? (
                data.actList?.map(({ actNo, keyword }) => {
                  const isSelected = watch(
                    `acts.${index}.selectedActs`
                  )?.includes(actNo);

                  return (
                    <S.Activity
                      isSelected={isSelected}
                      ref={activityRef}
                      key={actNo}
                      onClick={handleItemClick(actNo)}
                    >
                      <CheckIcon css={S.icon} />
                      {keyword}
                    </S.Activity>
                  );
                })
              ) : (
                <S.CustomActivityWrapper>
                  <S.customActiviyItem ref={spanRef}>
                    {text}
                  </S.customActiviyItem>
                  {(watch("customActs")?.length || 0) < 5 && (
                    <S.CustomActivity
                      ref={activityRef}
                      key={activities[5].label}
                      onClick={handleStopPropagation}
                    >
                      <Input
                        value={text}
                        css={S.input(inputWidth)}
                        placeholder=""
                        handleChange={handleCustomItemChange}
                        handleKeyDown={handleEnterCustomItemChange}
                      />
                    </S.CustomActivity>
                  )}
                  {watch("customActs")?.map((item, i) => {
                    return (
                      <S.CustomActivity
                        ref={activityRef}
                        key={item + i}
                        isSelected
                        hasValue
                        onClick={handleStopPropagation}
                      >
                        {item}
                        <CloseIcon onClick={DeleteCustomActivity(item)} />
                      </S.CustomActivity>
                    );
                  })}
                </S.CustomActivityWrapper>
              ))}
          </S.Activities>
        </S.ActivityBox>
        {isOpen && (
          <S.CustomInfo isCustom={activity.label === activities[5].label}>
            <S.ContentLength>{text.length}/14자</S.ContentLength>
            <S.AddButton onClick={handleAddCustomActivity}>추가</S.AddButton>
          </S.CustomInfo>
        )}
      </S.ActivityButton>
    </>
  );
}

export default ActivityToggle;
