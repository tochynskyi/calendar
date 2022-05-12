import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEvent } from "../../interfaces/IEvent";

interface eventState {
	modalOpen: boolean,
	events: IEvent[]
}

const initialState: eventState = {
	modalOpen: false,
	events: []
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    changeMonth(state, action: PayloadAction<number>) {
    },
    changeSmallCalendarMonth(state, action: PayloadAction<number>) {
    },
	 changeStateMenu(state) {
	 }
  },
});

export default eventSlice.reducer;
export const { changeMonth, changeSmallCalendarMonth, changeStateMenu } = eventSlice.actions;
