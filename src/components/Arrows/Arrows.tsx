import React, { FC, useEffect, useState } from "react";
import styles from "./Arrows.module.scss";
import { ReactComponent as LeftArrow } from "../../assets/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../assets/right-arrow.svg";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import dayjs from "dayjs";
import { currentDate } from "../../store/reducers/calendarSlice";
import { getDate } from "../../utils/getDate";

const Arrows: FC = () => {
  const [currentMonthIdx, setCurrentMonthIdx] = useState<number>(
    dayjs().month()
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(currentDate(getDate(currentMonthIdx)));
  }, [currentMonthIdx]);

  const handleNextMonth = () => {
    setCurrentMonthIdx(currentMonthIdx + 1);
  };

  const handlePrevMonth = () => {
    setCurrentMonthIdx(currentMonthIdx - 1);
  };
  return (
    <div className={styles.arrow__wrapper}>
      <button onClick={handlePrevMonth} className={styles.arrow}>
        <LeftArrow className={styles.arrow__item} />
      </button>
      <button onClick={handleNextMonth} className={styles.arrow}>
        <RightArrow className={styles.arrow__item} />
      </button>
    </div>
  );
};

export default Arrows;
