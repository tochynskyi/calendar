import { configureStore } from '@reduxjs/toolkit'
import calendarSlice from './reducer'

const store = configureStore({
	reducer: {
		calendar: calendarSlice,
	}
 })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch