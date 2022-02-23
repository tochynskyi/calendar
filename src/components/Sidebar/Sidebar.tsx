import React, { FC } from "react";
import ButtonCreate from "./ButtonCreate";
import style from './Sidebar.module.scss'


const Sidebar:FC = () => {
  return (
  <div className={style.sidebar}>
	  <ButtonCreate/>
  </div>)
};

export default Sidebar;
