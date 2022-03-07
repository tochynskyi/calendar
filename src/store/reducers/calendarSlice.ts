import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDate } from "../../interfaces/IDate";

interface CalendarState {
  daysMatrix: IDate[][];
  currentMonthYear: IDate
}

const initialState: CalendarState = {
  daysMatrix: [],
  currentMonthYear: {
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
		const {currMonthYear, daysMatrix} = action.payload
      state.daysMatrix.push(daysMatrix);
		state.currentMonthYear = currMonthYear
    },
  },
});

export default calendarSlice.reducer;
export const { prevMonth, nextMonth, currentDate } = calendarSlice.actions;
