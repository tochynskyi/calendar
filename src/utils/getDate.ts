import dayjs from "dayjs";
import { IDate } from "../interfaces/IDate";

export function getDate(month = dayjs().month()) {
  month = Math.floor(month);
  const year = dayjs().year();
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;

  const date = (type: string) =>
    dayjs(new Date(year, month, currentMonthCount)).format(type);

  const daysMatrix: IDate[][] = Array(6)
    .fill([])
    .map(() => {
      return Array(7)
        .fill(null)
        .map(() => {
          currentMonthCount++;
          return {
            year: +date("YYYY"),
            month: date("MMMM"),
            day: +date("D"),
          };
        });
    });
  const getMonthYear = (type: string) =>
    dayjs(new Date(year, month)).format(type);

  const currMonthYear: IDate = {
    month: getMonthYear("MMMM"),
    year: +getMonthYear("YYYY"),
	 day: +dayjs().format('D')
  };
  return { daysMatrix, currMonthYear };
}
