import React, { FC, useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { getMonth } from './utils/getMonth'
import { currentMonth } from "./store/reducers/calendarSlice";

const App: FC = () => {
	const [months, setMonths] = useState(getMonth())
	const {month} = useAppSelector(state => state.calendarSlice)
	const dispatch = useAppDispatch()
	
	useEffect(() => {
		dispatch(currentMonth(months))
		console.log(month);
	}, [months])

  return (
    <>
      <Navbar />
      <Sidebar />
    </>
  );
};

export default App;
