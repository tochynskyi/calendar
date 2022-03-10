import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDate } from "../../interfaces/IDate";

interface CalendarState {
  daysMatrix: null | IDate[][];
  currentMonthYearDay: IDate
}

const initialState: CalendarState = {
  daysMatrix: null,
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
    currentDate(state, action: PayloadAction<{daysMatrix: IDate[][], currentMonthYearDay: IDate}>) {
		const {currentMonthYearDay, daysMatrix} = action.payload
		state.daysMatrix = null
      state.daysMatrix = daysMatrix;
		state.currentMonthYearDay = currentMonthYearDay
    },
  },
});

export default calendarSlice.reducer;
export const { currentDate } = calendarSlice.actions;
