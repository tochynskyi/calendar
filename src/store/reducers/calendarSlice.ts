import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDate } from "../../interfaces/IDate";

interface CalendarState {
  daysMatrix: IDate[][];
  currentMonthYearDay: IDate
}

const initialState: CalendarState = {
  daysMatrix: [],
  currentMonthYearDay: {
	  month: '',
	  year: 0,
	  day: 0
  }
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    prevMonth() {},
    nextMonth() {},
    currentDate(state, action: PayloadAction<any>) {
		const {currentMonthYearDay, daysMatrix} = action.payload
      state.daysMatrix.push(daysMatrix);
		state.currentMonthYearDay = currentMonthYearDay
    },
  },
});

export default calendarSlice.reducer;
export const { prevMonth, nextMonth, currentDate } = calendarSlice.actions;
