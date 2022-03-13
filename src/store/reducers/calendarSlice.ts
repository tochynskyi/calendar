import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CalendarState {
  currentMonth: number
}

const initialState: CalendarState = {
	currentMonth: 0
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    changeMonth(state, action: PayloadAction<number>) {
		state.currentMonth = action.payload
    },
  },
});

export default calendarSlice.reducer;
export const { changeMonth } = calendarSlice.actions;
