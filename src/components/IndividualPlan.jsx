import React from "react";
import styles from "../styles/css/planComponent.module.css";
import Button from "./Button";

export default function IndividualPlan({ title, terms, buttonName }) {
  return (
    <div className={`${styles.container} ${styles.personal}`}>
      <div className={styles.titleAbsolute}>
        <span className={styles.circle} />
        <p className={styles.titleAbsolute_text}>{title}</p>
      </div>
      <div className={styles.terms}>
        <p>{terms}</p>
      </div>
      <div className={styles.footer}>
        <Button caption={buttonName} />
      </div>
    </div>
  );
}
