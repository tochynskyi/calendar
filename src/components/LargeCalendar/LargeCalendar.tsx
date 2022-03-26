import React, { FC } from "react";
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
  const { currentMonth } = useAppSelector((state) => state.calendarSlice);
  const dispatch = useAppDispatch();
  const largeCalendar = useCalendar(currentMonth);
  const date = getDate(currentMonth);

  const onWheelHandler = (e: any) => {
    if (e.deltaY > 0) {
      dispatch(changeMonth(currentMonth + 1));
      dispatch(changeSmallCalendarMonth(currentMonth + 1));
    } else {
      dispatch(changeMonth(currentMonth - 1));
      dispatch(changeSmallCalendarMonth(currentMonth - 1));
    }
  };
  return (
    <div onWheel={onWheelHandler} className={style.calendar__wrapper}>
      <DaysDisplay display="large" calendar={largeCalendar} date={date} />
    </div>
  );
};

export default LargeCalendar;
