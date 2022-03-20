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

  // Додати обгортку (дивитись в Гугл календар)
  return (
    <div className={style.calendar__wrapper}>
      <DaysDisplay display="large" calendar={largeCalendar} date={date} />
    </div>
  );
};

export default LargeCalendar;
