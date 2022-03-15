import dayjs from "dayjs";
import React, { FC } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  changeMonth,
  changeSmallMonth,
  changeStateMenu,
} from "../../store/reducers/calendarSlice";
import { getDate } from "../../utils/getDate";
import Arrows from "../Arrows/Arrows";
import styles from "./Navbar.module.scss";

const Navbar: FC = () => {
  const { currentMonth } = useAppSelector(
    (state) => state.calendarSlice
  );
  const dispatch = useAppDispatch();
  const currentDay = dayjs().format("DD");
  const { year, month } = getDate(currentMonth);

  const handlerMenu = () => dispatch(changeStateMenu());
  const handlerPrev = () => dispatch(changeMonth(currentMonth - 1));
  const handlerNext = () => dispatch(changeMonth(currentMonth + 1));
  const handlerToday = () => {
    dispatch(changeMonth(dayjs().month()));
    dispatch(changeSmallMonth(dayjs().month()));
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__menu}>
        <div onClick={handlerMenu} className={styles.navbar__burger}>
          <span></span>
        </div>
        <div className={styles.navbar__logo}>
          <Logo className={styles.navbar__img} />
          {currentDay}
        </div>
        <div className={styles.navbar__title}>Calendar</div>
        <div className={styles.navbar__controlPanel}>
          <button
            type="button"
            onClick={handlerToday}
            className={styles.navbar__button}
          >
            Today
          </button>
          <Arrows handlerPrev={handlerPrev} handlerNext={handlerNext} />
        </div>
        <div className={styles.navbar__currentDate}>{`${month} ${year}`}</div>
      </div>
    </div>
  );
};

export default Navbar;
