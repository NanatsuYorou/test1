/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import clsx from "clsx";
import stylesGrid from "./tableComponent.module.scss";
import Button from "./Button";

export default function TableComponent({ plans, criteria }) {
  function isString(string) {
    return Object.prototype.toString.call(string) === "[object String]";
  }

  function decideClass(item) {
    if (isString(item)) {
      return stylesGrid.textCenter;
    }
    if (item) {
      return stylesGrid.positive;
    }
    return stylesGrid.negative;
  }

  return (
    <div className={stylesGrid.grid}>
      <ul className={stylesGrid.pros}>
        {Array.from(criteria.keys()).map((condition) => (
          <li className={stylesGrid.li} key={condition.replaceAll(" ", "")}>
            {condition}
          </li>
        ))}
      </ul>
      {plans.map((plan) => (
        <React.Fragment key={plan.title.replaceAll(" ", "") + plan.titleLetter}>
          <div
            className={`${stylesGrid.title} ${
              stylesGrid[`title${plan.titleLetter}`]
            }`}
            key={plan.titleLetter}
          >
            <p className={stylesGrid.letter}>{plan.titleLetter}</p>
            <p>{plan.title}</p>
          </div>
          <ul
            key={`${plan.titleLetter}list`}
            className={clsx(
              `${stylesGrid[`terms${plan.titleLetter}`]}`,
              plan.background && `${stylesGrid.bigColumn}`
            )}
          >
            {Array.from(criteria.values()).map((value, index) => (
              <li
                className={clsx(
                  stylesGrid.li,
                  decideClass(value[`plan${plan.titleLetter}`])
                )}
                // eslint-disable-next-line react/no-array-index-key
                key={plan.titleLetter + index}
              >
                {value[`plan${plan.titleLetter}`]}
              </li>
            ))}
          </ul>
          <div
            className={`${stylesGrid.btnContainer} ${
              stylesGrid[`btnContainer${plan.titleLetter}`]
            }`}
            key={`btnContainer${plan.titleLetter}`}
          >
            <p className={stylesGrid.price}>{plan.price} руб.</p>
            {plan.priceMonth && (
              <p className={stylesGrid.monthPrice}>
                {plan.priceMonth} руб./мес.
              </p>
            )}
            <Button
              caption={plan.buttonName}
              isBtnHighlighted={plan.buttonHighlighted}
            />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
