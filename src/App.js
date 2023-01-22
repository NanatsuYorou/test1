import React, { useEffect, useState } from "react";
import "./App.css";
import styles from "./styles/css/main.module.css";
import PlanComponent from "./components/PlanComponent";
import TableComponent from "./components/TableComponent";

const BREAKPOINT_L = 1019;
const plans = [
  {
    title: "Доступ на 2 месяца, чтобы начать проводить опросы регулярно",
    titleLetter: "M",
    prosList: [
      "До 500 ответов на 60 дней",
      "Анкета с нуля и готовые шаблоны",
      "Сложная логика опроса",
      "Отображение результатов без excel",
      "UTM-метки в ссылке на опрос",
      "Динамическая логика ответов    (май 2021)",
    ],
    price: "4 000",
    priceMonth: "2000",
    terms: null,
    buttonName: "Оставить заявку",
  },
  {
    title:
      "Бесплатный доступ, чтобы запускать небольшие опросы от случая к случаю",
    titleLetter: "XS",
    prosList: [
      "До 50 ответов на 30 дней",
      "Анкета с нуля и готовые шаблоны",
      "Сложная логика опроса",
      "Отображение результатов без excel",
    ],
    price: "0",
    priceMonth: null,
    terms: null,
    buttonName: "Создать опрос",
  },
  {
    title:
      "Доступ на год, чтобы постоянно собирать обратную связь и не думать о лимитах",
    titleLetter: "L",
    prosList: [
      "До 10 000 ответов на 365 дней",
      "Анкета с нуля и готовые шаблоны",
      "Сложная логика опроса",
      "Отображение результатов без excel",
      "UTM-метки в ссылке на опрос",
      "Динамическая логика ответов    (май 2021)",
      "Без логотипа в опросах (май 2021)",
      "Отправка писем (июнь 2021)",
    ],
    price: "20 000",
    priceMonth: "1667",
    terms: null,
    buttonName: "Оставить заявку",
  },
  {
    title: "Индивидуальный",
    titleLetter: "",
    prosList: [],
    price: null,
    priceMonth: null,
    terms:
      "Оставьте заявку, если вам нужен большой объем, API или готовая интеграция. Стоимость рассчитаем исходя из ваших задач.",
    buttonName: "Оставить заявку",
  },
];

function App() {
  const [width, setWidth] = useState(window.innerWidth > BREAKPOINT_L);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth > BREAKPOINT_L);

    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Тарифы</h1>

      {width ? (
        <TableComponent />
      ) : (
        <ul className={styles.list}>
          {plans.map((plan) => (
            <li className={styles.item}>
              <PlanComponent
                key={plan.title.replaceAll(" ", "")}
                title={plan.title}
                titleLetter={plan.titleLetter}
                terms={plan.terms}
                prosList={plan.prosList}
                price={plan.price}
                priceMonth={plan.priceMonth}
                buttonName={plan.buttonName}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
