import { useForm } from "react-hook-form";

import type { ActivitiesServerModel, CreateLuckyDayForm } from "types";

interface UseCreateLuckyDayFormProps {
  data?: ActivitiesServerModel;
}

const DEFAULT_VALUES = {
  customActs: [],
  period: 0,
  cnt: 1,
  expDate: [],
  acts: [],
};

export default function useCreateLuckyDayForm({
  data,
}: UseCreateLuckyDayFormProps) {
  const actsData = data?.resData
    .map((item) => ({
      category: item.category,
      selectedActs: [],
      checked: false,
    }))
    .filter(({ category }) => category !== "직접 입력");

  const formMethod = useForm<CreateLuckyDayForm>({
    defaultValues: DEFAULT_VALUES,
    values: data ? { ...DEFAULT_VALUES, acts: actsData || [] } : DEFAULT_VALUES,
    mode: "onTouched",
  });

  return { formMethod };
}
