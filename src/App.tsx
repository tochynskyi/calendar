import React, { FC, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { getDate } from './utils/getDate'
import { currentDate } from "./store/reducers/calendarSlice";

const App: FC = () => {
	const dispatch = useAppDispatch()
	const {daysMatrix} = useAppSelector(state => state.calendarSlice)

	useEffect(() => {
		!daysMatrix.length && dispatch(currentDate(getDate()))
	}, [])

  return (
    <>
      <Navbar />
      <Sidebar />
    </>
  );
};

export default App;
