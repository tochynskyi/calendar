import React, { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useCalendar } from "../../hooks/useCalendar";
import {
  changeMonth,
  changeSmallCalendarMonth,
} from "../../store/reducers/calendarSlice";
import { getDate } from "../../utils/getDate";
import DaysDisplay from "../DaysDisplay/DaysDisplay";
import style from "./LargeCalendar.module.scss";

const LargeCalendar: FC = () => {
  const [timeStamp, setTimeStamp] = useState(0);
  const [changing, setChanging] = useState(false);
  const { currentMonth } = useAppSelector((state) => state.calendarSlice);
  const dispatch = useAppDispatch();
  const largeCalendar = useCalendar(currentMonth);
  const date = getDate(currentMonth);

  const onWheelHandler = (e: any) => {
    if (timeStamp <= e.timeStamp - 200) {
		setChanging(true);
      if (e.deltaY > 0) {
        dispatch(changeMonth(currentMonth + 1));
        dispatch(changeSmallCalendarMonth(currentMonth + 1));
      } else {
        dispatch(changeMonth(currentMonth - 1));
        dispatch(changeSmallCalendarMonth(currentMonth - 1));
      }
    }
    setTimeStamp(e.timeStamp);
	 setTimeout(() => {
		setChanging(false)
	 }, 200)
  };

  return (
    <div
      onWheel={onWheelHandler}
      className={style.calendar__wrapper}
    >
      <DaysDisplay display="large" calendar={largeCalendar} date={date} changing={changing} />
    </div>
  );
};

export default LargeCalendar;
