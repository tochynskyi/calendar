import dayjs from "dayjs";
import React, { FC, useEffect } from "react";
import ButtonCreate from "../ButtonCreate/ButtonCreate";
import LargeCalendar from "../LargeCalendar/LargeCalendar";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { useAppDispatch} from "../../hooks/redux";
import { changeMonth } from "../../store/reducers/calendarSlice";
import style from "./App.module.scss";
import EventModal from "../EventModal/EventModal";

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeMonth(dayjs().month()));
  }, []);

  return (
    <div className={style.wrapper}>
      <Navbar />
      <div className={style.wrapper__content}>
        <ButtonCreate />
        <Sidebar />
        <LargeCalendar />
      </div>
		<EventModal/>
    </div>
  );
};

export default App;
