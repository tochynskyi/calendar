import React, { FC } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import Arrows from "../Arrows/Arrows";
import styles from "./Navbar.module.scss";

const Navbar: FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__menu}>
        <div className={styles.navbar__burger}>
          <span></span>
        </div>
        <div className={styles.navbar__logo}>
          <Logo className={styles.navbar__img} />
          31
        </div>
        <div className={styles.navbar__title}>Calendar</div>
        <div className={styles.navbar__controlPanel}>
          <button type="button" className={styles.navbar__button}>
            Today
          </button>
          <Arrows />
        </div>
        <div className={styles.navbar__currentDate}>Fabruary 2022</div>
      </div>
    </div>
  );
};

export default Navbar;
