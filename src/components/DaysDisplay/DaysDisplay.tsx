import React, { FC } from "react";
import { useAppSelector } from "../../hooks/redux";
import { useCalendar } from "../../hooks/useCalendar";
import { getDate } from "../../utils/getDate";
import { isActiveDay } from "../../utils/isActive";
import style from "./DaysDisplay.module.scss";

interface DaysDisplayProps {
  display: string;
}

const DaysDisplay: FC<DaysDisplayProps> = ({ display }) => {
  const { currentMonth } = useAppSelector((state) => state.calendarSlice);
  const calendar = useCalendar(currentMonth);
  const date = getDate(currentMonth);

  return (
    <div className={style.calendar__body}>
      {display === "small" && (
        <div className={style.calendar__dayNames}>
          {calendar[0].map(({ dayName }, i) => (
            <div key={i} className={style.calendar__dayName}>
              {dayName}
            </div>
          ))}
        </div>
      )}
      <div className={style.calendar__monthDaysDisplay}>
        {calendar.map((week, i) => (
          <div key={i} className={style.calendar__row}>
            {week.map(({ year, month, day, dayName }, id) => (
              <div className={`${display === "large" && `${style.calendar__day__large}`}`}>
                {i === 0 && display === "large" && (
                  <div key={dayName}>{dayName}</div>
                )}
                <div
                  key={id}
                  className={`${style.calendar__day}
                     ${date.month === month && `${style.calendar__day__current}`}
							${isActiveDay(year, month, day) && `${style.calendar__day__active}`}
						`}
                >
                  {day}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DaysDisplay;
