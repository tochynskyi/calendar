import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDate } from "../../interfaces/IDate";


const initialState: IDate = {
	year: 0,
	month: 0,
	daysMatrix: []
} 

const calendarSlice = createSlice({
	name: 'calendar',
	initialState,
	reducers: {
		prevMonth() {

		},
		nextMonth() {

		},
		currentDate(state, action: PayloadAction<IDate>) {	
			const {year, month, daysMatrix} = action.payload
			state.year = year
			state.month = month
			state.daysMatrix = daysMatrix
		},
	}
})

export default calendarSlice.reducer
export const {prevMonth, nextMonth, currentDate} = calendarSlice.actions