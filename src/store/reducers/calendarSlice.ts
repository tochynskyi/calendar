import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MonthState {
	month: any[],
}

const initialState: MonthState = {
	month: [],
}


const calendarSlice = createSlice({
	name: 'calendar',
	initialState,
	reducers: {
		prevMonth() {

		},
		nextMonth() {

		},
		currentMonth(state, action) {
			state.month.push(action.payload)
		},
	}
})

export default calendarSlice.reducer
export const {prevMonth, nextMonth, currentMonth} = calendarSlice.actions