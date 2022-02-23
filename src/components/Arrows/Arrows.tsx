import React, { FC } from "react";
import styles from "./Arrows.module.scss";
import { ReactComponent as LeftArrow } from "../../assets/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../assets/right-arrow.svg";

const Arrows: FC = () => {
  return (
    <>
      <button className={styles.arrow}>
        <LeftArrow className={styles.arrow__item} />
      </button>
      <button className={styles.arrow}>
        <RightArrow className={styles.arrow__item} />
      </button>
    </>
  );
};

export default Arrows;
