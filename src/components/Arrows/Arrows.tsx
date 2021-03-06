import React, { FC, useEffect, useState } from "react";
import styles from "./Arrows.module.scss";
import { ReactComponent as LeftArrow } from "../../assets/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../assets/right-arrow.svg";
interface ArrowsProps {
  handlerPrev: () => void;
  handlerNext: () => void;
}
const Arrows: FC<ArrowsProps> = ({ handlerPrev, handlerNext }) => {

  return (
    <div className={styles.arrow__wrapper}>
      <button onClick={handlerPrev} className={styles.arrow}>
        <LeftArrow className={styles.arrow__item} />
      </button>
      <button onClick={handlerNext} className={styles.arrow}>
        <RightArrow className={styles.arrow__item} />
      </button>
    </div>
  );
};

export default Arrows;
