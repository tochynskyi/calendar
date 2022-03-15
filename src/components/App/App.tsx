import dayjs from "dayjs";
import React, { FC, useEffect } from "react";
import ButtonCreate from "../ButtonCreate/ButtonCreate";
import LargeCalendar from "../LargeCalendar/LargeCalendar";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { changeMonth } from "../../store/reducers/calendarSlice";
import style from './App.module.scss'


const App: FC = () => {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(changeMonth(dayjs().month()));
  }, []);

  return (
    <>
      <Navbar />
		<div className={style.wrapper}>
		<ButtonCreate/>
      <Sidebar />
		<LargeCalendar/>
		</div>
    </>
  );
};

export default App;
