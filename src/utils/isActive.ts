import dayjs from "dayjs";

export const isActiveDay = (year: number, month: string, day: number) => {
  const { currentYear, currentMonth, currentDay } = {
    currentYear: +dayjs().format("YYYY"),
    currentMonth: dayjs().format("MMMM"),
    currentDay: +dayjs().format("DD"),
  };

  return currentYear === year && currentMonth === month && currentDay === day
    ? true
    : false;
};
