import { createSlice } from "@reduxjs/toolkit";

interface MonthState {
	month: []
}

const initialState: MonthState = {
	month: []
}


const calendarSlice = createSlice({
	name: 'calendar',
	initialState,
	reducers: {
		prevMonth() {

		},
		nextMonth() {

		},
		currentMonth() {

		},
	}
})

export default calendarSlice.reducer
export const {prevMonth, nextMonth, currentMonth} = calendarSlice.actions