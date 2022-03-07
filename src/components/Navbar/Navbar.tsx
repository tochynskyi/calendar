import React, { FC } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { currentDate } from "../../store/reducers/calendarSlice";
import { getDate } from "../../utils/getDate";
import Arrows from "../Arrows/Arrows";
import styles from "./Navbar.module.scss";

const Navbar: FC = () => {
  const dispatch = useAppDispatch();
  const { currentMonthYear } = useAppSelector((state) => state.calendarSlice);

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
          {currentMonthYear.day}
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
        <div
          className={styles.navbar__currentDate}
        >{`${currentMonthYear.month} ${currentMonthYear.year}`}</div>
      </div>
    </div>
  );
};

export default Navbar;
