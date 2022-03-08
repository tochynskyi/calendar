import React, { FC } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { currentDate } from "../../store/reducers/calendarSlice";
import { getDate } from "../../utils/getDate";
import Arrows from "../Arrows/Arrows";
import styles from "./Navbar.module.scss";

const Navbar: FC = () => {
  const dispatch = useAppDispatch();
  const { daysMatrix ,currentMonthYearDay } = useAppSelector(
    (state) => state.calendarSlice
  );
	// console.log(currentMonthYearDay);
	
  const todayHandler = () => {
    dispatch(currentDate(getDate()));
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__menu}>
        <div className={styles.navbar__burger}>
          <span></span>
        </div>
        <div className={styles.navbar__logo}>
          <Logo className={styles.navbar__img} />
          {currentMonthYearDay.day}
        </div>
        <div className={styles.navbar__title}>Calendar</div>
        <div className={styles.navbar__controlPanel}>
          <button
            type="button"
            onClick={todayHandler}
            className={styles.navbar__button}
          >
            Today
          </button>
          <Arrows />
        </div>
        <div className={styles.navbar__currentDate}>
          {`${currentMonthYearDay.month} ${currentMonthYearDay.year}`}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
