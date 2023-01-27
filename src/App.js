import React, { useEffect, useState } from "react";
import "./App.css";
import PlanComponent from "./components/PlanComponent";
import TableComponent from "./components/TableComponent";
import IndividualPlan from "./components/IndividualPlan";

const BREAKPOINT_L = 1019;

const criteria = new Map([
  [
    "Количество ответов и дней доступа",
    {
      planXS: "До 50 ответов на 30 дней",
      planM: "До 500 ответов на 60 дней",
      planL: "До 10 000 ответов на 365 дней"
    }
  ],
  [
    "Анкета с нуля и готовые шаблоны",
    { planXS: true, planM: true, planL: true }
  ],
  ["Сложная логика опроса", { planXS: true, planM: true, planL: true }],
  [
    "Отображение результатов без excel",
    { planXS: true, planM: true, planL: true }
  ],
  ["UTM-метки в ссылке на опрос", { planXS: false, planM: true, planL: true }],
  [
    "Динамическая логика ответов",
    { planXS: false, planM: "Май 2021", planL: "Май 2021" }
  ],
  [
    "Без логотипа в опросах",
    { planXS: false, planM: false, planL: "Май 2021" }
  ],
  ["Отправка писем", { planXS: false, planM: false, planL: "Июнь 2021" }]
]);

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
      "Динамическая логика ответов    (май 2021)"
    ],
    price: "4 000",
    priceMonth: "2000",
    buttonName: "Оставить заявку",
    buttonHighlighted: true,
    background: true
  },
  {
    title:
      "Бесплатный доступ, чтобы запускать небольшие опросы от случая к случаю",
    titleLetter: "XS",
    prosList: [
      "До 50 ответов на 30 дней",
      "Анкета с нуля и готовые шаблоны",
      "Сложная логика опроса",
      "Отображение результатов без excel"
    ],
    price: "0",
    priceMonth: null,
    buttonName: "Создать опрос",
    buttonHighlighted: false,
    background: false
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
      "Отправка писем (июнь 2021)"
    ],
    price: "20 000",
    priceMonth: "1667",
    buttonName: "Оставить заявку",
    buttonHighlighted: false,
    background: false
  }
];

function App() {
  const [isLargeScreen, checkScreen] = useState(
    window.innerWidth > BREAKPOINT_L
  );

  useEffect(() => {
    const handleResizeWindow = () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      checkScreen(window.innerWidth > BREAKPOINT_L);

    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <div className="wrapper">
      <h1 className="heading">Тарифы</h1>

      {isLargeScreen ? (
        <TableComponent plans={plans} criteria={criteria} />
      ) : (
        <ul className="list">
          {plans.map((plan) => (
            <li className="item">
              <PlanComponent
                key={plan.title.replaceAll(" ", "")}
                title={plan.title}
                titleLetter={plan.titleLetter}
                prosList={plan.prosList}
                price={plan.price}
                priceMonth={plan.priceMonth}
                buttonName={plan.buttonName}
                buttonHighlighted={plan.buttonHighlighted}
                background={plan.background}
              />
            </li>
          ))}
        </ul>
      )}
      <IndividualPlan />
    </div>
  );
}

export default App;
