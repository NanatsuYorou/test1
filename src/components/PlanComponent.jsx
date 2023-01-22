/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from "react";
import IndividualPlan from "./IndividualPlan";
import planStyles from "../styles/css/planComponent.module.css";
import mainStyles from "../styles/css/main.module.css";

export default function PlanComponent({
  title,
  titleLetter,
  prosList,
  price,
  priceMonth,
  terms,
  buttonName,
}) {
  if (titleLetter === "") {
    return (
      <IndividualPlan title={title} terms={terms} buttonName={buttonName} />
    );
  }
  return (
    <div className={planStyles.container}>
      <header className={planStyles.title}>
        <span className={planStyles.circle}>{titleLetter}</span>
        <p>{title}</p>
      </header>
      <ul className={planStyles.list}>
        {prosList.map((pros) => (
          <li
            className={planStyles.item}
            key={pros.replaceAll(" ", "") + titleLetter}
          >
            <p>{pros}</p>
          </li>
        ))}
      </ul>
      <footer className={planStyles.footer}>
        {price !== null && (
          <>
            <div className={planStyles.price}>
              {price !== null && <p>{price} руб.</p>}
              {priceMonth !== null && <p>{priceMonth} руб./месяц</p>}
            </div>
            <div className={planStyles.btnContainer}>
              <button
                type="button"
                className={mainStyles.button}
                id={titleLetter}
              >
                {buttonName}
              </button>
            </div>
          </>
        )}
      </footer>
    </div>
  );
}
