import React, { FC, useEffect } from "react";
import { useAppSelector } from "../../../hooks/redux";
import style from "./SmallCalendar.module.scss";

const SmallCalendar: FC = () => {
  const { daysMatrix, currentMonthYear } = useAppSelector(
    (state) => state.calendarSlice
  );

  console.log(daysMatrix, currentMonthYear);

  return (
    <div className={style.calendar__wrapper}>
      <div className={style.calendar__header}>
			
		</div>
    </div>
  );
};

export default SmallCalendar;