import React, { FC, useState } from "react";
import styles from "./EventModal.module.scss";
const EventModal: FC = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      {open && (
        <div className={styles.modal}>
          <div className={styles.modal__header}><div className={styles.modal__close}></div></div>
          <div className={styles.modal__content}>Content</div>
        </div>
      )}
    </>
  );
};

export default EventModal;
