import React, { FC } from "react";
import { ReactComponent as Plus } from "../../assets/plus-for-btn.svg";
import { useAppSelector } from "../../hooks/redux";
import style from "./ButtonCreate.module.scss";

const ButtonCreate: FC = () => {
  const { menuActive } = useAppSelector((state) => state.calendarSlice);
  return (
    <div
      className={
        menuActive
          ? `${style.button}`
          : `${style.button} ${style.button__small}`
      }
    >
      <Plus className={style.button__plus} />
      <div
        className={
          menuActive
            ? `${style.button__title}`
            : `${style.button__title__hide}`
        }
      >
        Create
      </div>
    </div>
  );
};

export default ButtonCreate;
