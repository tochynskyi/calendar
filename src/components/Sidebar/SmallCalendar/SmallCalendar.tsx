import React, { FC, useEffect } from "react";
import { useAppSelector } from "../../../hooks/redux";
import Arrows from "../../Arrows/Arrows";
import style from "./SmallCalendar.module.scss";

const SmallCalendar: FC = () => {
  const { daysMatrix, currentMonthYearDay } = useAppSelector(
    (state) => state.calendarSlice
  );
	
  return (
    <>
      {!daysMatrix ? (
        <div>Loading...</div>
      ) : (
        <div className={style.calendar}>
          <div className={style.calendar__header}>
            <div
              className={style.calendar__currentDate}
            >{`${currentMonthYearDay.month} ${currentMonthYearDay.year}`}</div>
            <Arrows />
          </div>
          <div className={style.calendar__body}>
            <div className={style.calendar__weekDays}>
              {daysMatrix[0].map(({dayName}, i) => (
                <div key={i} className={style.calendar__dayName}>{dayName}</div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SmallCalendar;
