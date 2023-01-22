/* eslint-disable react/prop-types */
import React from "react";
import styles from "../styles/css/planComponent.module.css";
import mainStyles from "../styles/css/main.module.css";

export default function IndividualPlan({ title, terms, buttonName }) {
  return (
    <div className={`${styles.container} ${styles.personal}`}>
      <div className={styles.titleAbsolute}>
        <span className={styles.circle} />
        <p>{title}</p>
      </div>
      <div className={styles.terms}>
        <p>{terms}</p>
      </div>
      <div className={styles.footer}>
        <button
          type="button"
          className={`${mainStyles.button} ${styles.buttonPersonal}`}
        >
          {buttonName}
        </button>
      </div>
    </div>
  );
}
