import React from "react";
import styles from "./planComponent.module.scss";
import Button from "./Button";

const plan = {
  title: "Индивидуальный",
  terms:
    "Оставьте заявку, если вам нужен большой объем, API или готовая интеграция. Стоимость рассчитаем исходя из ваших задач.",
  buttonName: "Оставить заявку"
};

export default function IndividualPlan() {
  return (
    <div className={`${styles.container} ${styles.personal}`}>
      <div className={styles.titleAbsolute}>
        <span className={styles.circle} />
        <p className={styles.titleAbsolute_text}>{plan.title}</p>
      </div>
      <div className={styles.terms}>
        <p>{plan.terms}</p>
      </div>
      <div className={styles.footer}>
        <Button caption={plan.buttonName} />
      </div>
    </div>
  );
}
