import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

import { useToast } from "hooks";
import { LUCKYDAY_PERIODS } from "assets";

const useCalendar = (
  period: number,
  dates: string,
  expDates: string[],
  makeExpDates: (dates: string) => void
) => {
  // 현재 보고 있는 달
  const [currentMonth, setCurrentMonth] = useState<Dayjs>(dayjs());

  const { addToast } = useToast();

  // 오늘 날짜
  const today = dayjs();
  // 오늘 날짜 기준 기간 마지막 날짜 (today + period 일)
  const currentDate = today.add(period, "day");
  // 이번 달의 첫 날
  const firstDayOfMonth = currentMonth.startOf("month").locale("ko");
  // 이번 달 총 일수
  const daysInMonth = currentMonth.daysInMonth();
  // 이번 달 날짜 배열
  const existDates = Array.from({ length: daysInMonth }, (_, idx) =>
    firstDayOfMonth.add(idx, "day")
  );
  // 이번 달 첫날의 요일 숫자만큼 빈칸 배열 생성
  const emptyDates = Array.from({ length: firstDayOfMonth.day() }, () => null);
  // 달력에 표시할 날짜 리스트 (빈칸 + 실제 날짜)
  const calendarList = [...emptyDates, ...existDates];
  const diffDays = currentDate.startOf("day").diff(today.startOf("day"), "day");
  // today 부터 currentDate까지 날짜 배열 (YYYY-MM-DD)
  const monthsData = Array.from({ length: diffDays }, (_, i) =>
    today.add(i, "day").format("YYYY-MM-DD")
  );

  const handleMoveToPrevMonth = () =>
    setCurrentMonth((prev) => prev.subtract(1, "month"));
  const handleMoveToNextMonth = () =>
    setCurrentMonth((prev) => prev.add(1, "month"));
  // 날짜 선택 시 제외 날짜 처리 및 토스트 알림
  const handleDisabledCheck = (date: Dayjs) => () => {
    if (!date) return;

    const formattedDate = date.format("YYYY-MM-DD");
    const luckyday = LUCKYDAY_PERIODS.find((item) => item.period === +dates);

    // 제외 날짜 최대 개수 초과 시 토스트 출력
    if (expDates.length >= (luckyday?.expDate ?? 1)) {
      addToast({
        content: `최대 ${luckyday?.expDate}개의 제외 날짜를 선택할 수 있어요.`,
      });
      return;
    }

    // 선택한 날짜가 기간 내에 없으면 무시
    if (!monthsData.includes(formattedDate)) return;

    makeExpDates(formattedDate);
  };

  return {
    currentMonth,
    monthsData,
    emptyDates,
    calendarList,
    handleMoveToPrevMonth,
    handleMoveToNextMonth,
    handleDisabledCheck,
  };
};

export default useCalendar;
