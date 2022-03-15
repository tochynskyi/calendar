import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CalendarState {
  currentMonth: number;
  smallCalendarMonth: number;
  menuActive: boolean
}

const initialState: CalendarState = {
  currentMonth: 0,
  smallCalendarMonth: 0,
  menuActive: true
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    changeMonth(state, action: PayloadAction<number>) {
      state.currentMonth = action.payload;
    },
    changeSmallMonth(state, action: PayloadAction<number>) {
      state.smallCalendarMonth = action.payload;
    },
	 changeStateMenu(state) {
		 state.menuActive = !state.menuActive
	 }
  },
});

export default calendarSlice.reducer;
export const { changeMonth, changeSmallMonth, changeStateMenu } = calendarSlice.actions;
