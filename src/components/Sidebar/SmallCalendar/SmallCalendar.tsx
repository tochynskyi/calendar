import React, { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks/redux";
import { useCalendar } from "../../../hooks/useCalendar";
import { getDate } from "../../../utils/getDate";
import { isActiveDay } from "../../../utils/isActive";
import Arrows from "../../Arrows/Arrows";
import style from "./SmallCalendar.module.scss";

const SmallCalendar: FC = () => {
  const { currentMonth } = useAppSelector((state) => state.calendarSlice);
  const [localMonth, setLocalMonth] = useState<number>(0);
  const { year, month } = getDate(localMonth);

  const calendar = useCalendar(localMonth);

  useEffect(() => {
    setLocalMonth(currentMonth);
  }, [currentMonth]);

  return (
    <>
      <div className={style.calendar}>
        <div className={style.calendar__header}>
          <div
            className={style.calendar__currentDate}
          >{`${month} ${year}`}</div>
          <Arrows
            handlerPrev={() => setLocalMonth(localMonth - 1)}
            handlerNext={() => setLocalMonth(localMonth + 1)}
          />
        </div>
        <div className={style.calendar__body}>
            <div className={style.calendar__weekDays}>
              {calendar[0].map(({ dayName }, i) => (
                <div key={i} className={style.calendar__dayName}>
                  {dayName}
                </div>
              ))}
            </div>
            <div className={style.calendar__monthDaysDisplay}>
              {calendar.map((weekArray, i) => (
                <div key={i} className={style.calendar__row}>
                  {weekArray.map(({year, month, day }, i) => (
                    <div
                      key={i}
                      className={
                        isActiveDay(year, month, day)
                          ? `${style.calendar__day} ${style.calendar__day__active}`
                          : month === month
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
    </>
  );
};

export default SmallCalendar;
