import React, { FC } from "react";
import { useAppSelector } from "../../hooks/redux";
import { useCalendar } from "../../hooks/useCalendar";
import { getDate } from "../../utils/getDate";
import DaysDisplay from "../DaysDisplay/DaysDisplay";
import style from "./LargeCalendar.module.scss";

const LargeCalendar: FC = () => {
  const { currentMonth } = useAppSelector((state) => state.calendarSlice);
  const largeCalendar = useCalendar(currentMonth);
  const date = getDate(currentMonth);

  const onScroll = (e: any) => {
	 return  console.log(`scroll`, e.target.scrollTop);
  }
  return (
    <div onScroll={onScroll} className={style.calendar__wrapper}>
      <DaysDisplay display="large" calendar={largeCalendar} date={date} />
    </div>
  );
};

export default LargeCalendar;
