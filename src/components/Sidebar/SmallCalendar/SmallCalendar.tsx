import React, { FC, useEffect } from "react";
import { useAppSelector } from "../../../hooks/redux";
import { isActiveDay } from "../../../utils/isActive";
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
              {daysMatrix[0].map(({ dayName }, i) => (
                <div key={i} className={style.calendar__dayName}>
                  {dayName}
                </div>
              ))}
            </div>
            <div className={style.calendar__monthDaysDisplay}>
              {daysMatrix.map((weekArray, i) => (
                <div key={i} className={style.calendar__row}>
                  {weekArray.map(({year, month, day }, i) => (
                    <div
                      key={i}
                      className={
                        isActiveDay(year, month, day)
                          ? `${style.calendar__day} ${style.calendar__day__active}`
                          : currentMonthYearDay.month === month
                          ? `${style.calendar__day} ${style.calendar__day__current}`
                          : `${style.calendar__day}`
                      }
                    >
                      {day}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SmallCalendar;
