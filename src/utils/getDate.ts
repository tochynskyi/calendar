import dayjs from "dayjs";

export const getDate = (month:number = dayjs().month()) => {
	const year = dayjs().year()
	return {year, month}
}