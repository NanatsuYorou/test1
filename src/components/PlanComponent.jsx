/* eslint-disable react/jsx-one-expression-per-line */

import React from "react";
import clsx from "clsx";
import planStyles from "./planComponent.module.scss";
import Button from "./Button";

export default function PlanComponent({
  title,
  titleLetter,
  prosList,
  price,
  priceMonth,
  buttonName,
  buttonHighlighted,
  background
}) {
  return (
    <div
      className={clsx(
        planStyles.container,
        background && planStyles.background
      )}
    >
      <header className={planStyles.title}>
        <span className={planStyles.circle}>{titleLetter}</span>
        <p className={planStyles.title_text}>{title}</p>
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
              {price !== null && (
                <p
                  className={`${planStyles.price_text}  ${planStyles.price_full}`}
                >
                  {price} руб.
                </p>
              )}
              {priceMonth !== null && (
                <p
                  className={`${planStyles.price_text}  ${planStyles.price_month}`}
                >
                  {priceMonth} руб./месяц
                </p>
              )}
            </div>
            <div className={planStyles.btnContainer}>
              <Button
                caption={buttonName}
                id={titleLetter}
                isBtnHighlighted={buttonHighlighted}
              />
            </div>
          </>
        )}
      </footer>
    </div>
  );
}
