import React, { FC } from "react";
import { ReactComponent as Plus } from "../../assets/plus-for-btn.svg";
import style from './ButtonCreate.module.scss'

const ButtonCreate: FC = () => {
  return (
    <div className={style.button}>
      <Plus className={style.button__plus}/>
		<div className={style.button__text}>Create</div>
    </div>
  );
};

export default ButtonCreate;
