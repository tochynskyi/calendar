import React, { FC } from "react";
import ButtonCreate from "./ButtonCreate/ButtonCreate";
import MiniCalendar from "./SmallCalendar/SmallCalendar";
import style from './Sidebar.module.scss'


const Sidebar:FC = () => {
  return (
  <div className={style.sidebar}>
	  <ButtonCreate/>
	  <MiniCalendar/>
  </div>)
};

export default Sidebar;
