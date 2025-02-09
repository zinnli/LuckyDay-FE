import React, { useRef, useState } from "react";
import { useFormContext } from "react-hook-form";

import { useToast } from "hooks";
import type { CreateLuckyDayForm } from "types";

const useCustomInput = () => {
  const [text, setText] = useState("");

  const spanRef = useRef<HTMLSpanElement>(null);

  const { watch, setValue } = useFormContext<CreateLuckyDayForm>();

  const inputWidth = text.length
    ? spanRef.current?.getBoundingClientRect().width
    : 0;
  const { addToast } = useToast();

  const handleCustomItemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 14) return;

    setText(e.target.value);
  };

  const handleAddCustomActivity = (e: React.MouseEvent): void => {
    e.stopPropagation();

    const checkSameActivity = watch("customActs")?.includes(text);

    if (checkSameActivity) {
      addToast({ content: "이미 추가된 활동입니다." });
      setText("");

      return;
    }

    setValue("customActs", [...(watch("customActs") ?? ""), text]);
    setText("");
  };

  const handleEnterCustomItemChange = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      handleAddCustomActivity(e as unknown as React.MouseEvent);
    }
  };

  const DeleteCustomActivity = (selectedActivity: string) => (): void => {
    const filteredActivities = watch("customActs")?.filter(
      (item) => item !== selectedActivity
    );

    setValue("customActs", filteredActivities);
  };

  const handleEnterText = (text: string): void => {
    setText(text);
  };

  return {
    spanRef,
    inputWidth,
    text,
    handleEnterText,
    handleCustomItemChange,
    handleEnterCustomItemChange,
    handleAddCustomActivity,
    DeleteCustomActivity,
  };
};

export default useCustomInput;
