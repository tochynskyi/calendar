import React, { FC } from "react";
import { useAppSelector } from "../../hooks/redux";
import { useCalendar } from "../../hooks/useCalendar";
import { IDate } from "../../interfaces/IDate";
import { getDate } from "../../utils/getDate";
import { isActiveDay } from "../../utils/isActive";
import style from "./DaysDisplay.module.scss";

interface DaysDisplayProps {
  display: string;
  calendar: IDate[][];
  date: IDate;
}

const DaysDisplay: FC<DaysDisplayProps> = ({ display, calendar, date }) => {
  return (
    <>
      {display === "small" && (
        <div className={style.smallCalendar__wrapper}>
          <div className={style.smallCalendar__dayNames}>
            {calendar[0].map(({ dayName }, i) => (
              <div key={i} className={style.smallCalendar__dayName}>
                {dayName}
              </div>
            ))}
          </div>
          {calendar.map((week, i) => (
            <div key={i} className={style.row}>
              {week.map(({ year, month, day }, id) => (
                <div
                  key={id}
                  className={`${style.day} ${style.smallCalendar__day}
        			${date.month === month && `${style.day__current}`}
        			${isActiveDay(year, month, day) && `${style.day__active}`}
        		`}
                >
                  {day}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
      {display === "large" && (
        <div className={style.largeCalendar__wrapper}>
          {calendar.map((week, i) => (
            <div key={i} className={`${style.largeCalendar__row} ${style.row}`}>
              {week.map(({ year, month, day, dayName }, id) => (
                <div className={style.largeCalendar__dayWrapper}>
                  {i === 0 && (
                    <div key={dayName} className={style.largeCalendar__dayName}>
                      {dayName}
                    </div>
                  )}
                  <div
                    key={id}
                    className={`${style.day} ${style.largeCalendar__day}
        			${date.month === month && `${style.day__current}`}
        			${isActiveDay(year, month, day) && `${style.day__active}`}
        		`}
                  >
                    {day}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default DaysDisplay;
