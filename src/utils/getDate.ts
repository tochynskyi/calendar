import dayjs from "dayjs";
import { IDate } from "../interfaces/IDate";

export function getDate(month = dayjs().month()) {
  month = Math.floor(month);
  const year = dayjs().year();

  const getMonthYearDay = (type: string) =>
    dayjs(new Date(year, month)).format(type);
  const currentMonthYearDay: IDate = {
    month: getMonthYearDay("MMMM"),
    year: +getMonthYearDay("YYYY"),
    day: +dayjs().format("D"),
  };
  return currentMonthYearDay ;
}
