import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useCalendar } from "../../../hooks/useCalendar";
import { changeSmallMonth } from "../../../store/reducers/calendarSlice";
import { getDate } from "../../../utils/getDate";
import Arrows from "../../Arrows/Arrows";
import DaysDisplay from "../../DaysDisplay/DaysDisplay";
import style from "./SmallCalendar.module.scss";

const SmallCalendar: FC = () => {
  const { currentMonth, smallCalendarMonth } = useAppSelector(
    (state) => state.calendarSlice
  );
  const dispatch = useAppDispatch();
  const smallCalendar = useCalendar(smallCalendarMonth);
  const date = getDate(smallCalendarMonth);

  useEffect(() => {
    dispatch(changeSmallMonth(currentMonth));
  }, [currentMonth]);

  return (
    <>
      <div className={style.calendar}>
        <div className={style.calendar__header}>
          <div
            className={style.calendar__currentDate}
          >{`${date.month} ${date.year}`}</div>
          <Arrows
            handlerPrev={() =>
              dispatch(changeSmallMonth(smallCalendarMonth - 1))
            }
            handlerNext={() =>
              dispatch(changeSmallMonth(smallCalendarMonth + 1))
            }
          />
        </div>
        <DaysDisplay display="small" calendar={smallCalendar} date={date}/>
      </div>
    </>
  );
};

export default SmallCalendar;
