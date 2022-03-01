import { configureStore } from '@reduxjs/toolkit'
import calendarSlice from './reducers/calendarSlice'


export const store = configureStore({
	reducer: {
		calendarSlice,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false
	 }),
 })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch