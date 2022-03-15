import React, { FC } from "react";
import ButtonCreate from "../ButtonCreate/ButtonCreate";
import MiniCalendar from "./SmallCalendar/SmallCalendar";
import style from "./Sidebar.module.scss";
import { useAppSelector } from "../../hooks/redux";

const Sidebar: FC = () => {
  const { menuActive } = useAppSelector((state) => state.calendarSlice);

  return (
    <div
      className={
        menuActive
          ? `${style.sidebar} ${style.sidebar__active}`
          : `${style.sidebar}`
      }
    >
      <div className={style.sidebar__buttonCreate}>
      </div>
      <div className={style.sidebar__body}>
        <MiniCalendar />
      </div>
    </div>
  );
};

export default Sidebar;
