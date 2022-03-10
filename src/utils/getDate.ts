import dayjs from "dayjs";
import { IDate } from "../interfaces/IDate";

export function getDate(month = dayjs().month()) {
  month = Math.floor(month);
  const year = dayjs().year();
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;

  const daysMatrix: IDate[][] = Array(6)
    .fill([])
    .map(() => {
      return Array(7)
        .fill(null)
        .map(() => {
          currentMonthCount++;
          const date = (type: string) =>
            dayjs(new Date(year, month, currentMonthCount)).format(type);
          return {
            year: +date("YYYY"),
            month: date("MMMM"),
            day: +date("D"),
				dayName: date('ddd')
          };
        });
    });

  const getMonthYearDay = (type: string) =>
    dayjs(new Date(year, month)).format(type);
  const currentMonthYearDay: IDate = {
    month: getMonthYearDay("MMMM"),
    year: +getMonthYearDay("YYYY"),
    day: +dayjs().format("D"),
  };
  return { daysMatrix, currentMonthYearDay };
}
