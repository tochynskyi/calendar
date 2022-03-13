import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { IDate } from "../interfaces/IDate";

export const useCalendar = (month = dayjs().month()) => {
	const [currentMonth, setCurrentMonth] = useState<number>(month)

	useEffect(() => {
		setCurrentMonth(month)
	}, [month])
	

	// month = Math.floor(month);
	const year = dayjs().year();
	const firstDayOfTheMonth = dayjs(new Date(year, currentMonth, 1)).day();
	let currentMonthCount = 0 - firstDayOfTheMonth;

	const daysMatrix: IDate[][] = Array(6)
	.fill([])
	.map(() => {
	  return Array(7)
		 .fill(null)
		 .map(() => {
			currentMonthCount++;
			const date = (type: string) =>
			  dayjs(new Date(year, currentMonth, currentMonthCount)).format(type);
			return {
			  year: +date("YYYY"),
			  month: date("MMMM"),
			  day: +date("D"),
			  dayName: date('ddd')
			};
		 });
	});

	return daysMatrix
}