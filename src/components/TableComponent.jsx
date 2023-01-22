import React from "react";
import stylesGrid from "../styles/css/tableGrid.module.css";
import mainStyles from "../styles/css/main.module.css";
import IndividualPlan from "./IndividualPlan";

export default function TableComponent() {
  return (
    <>
      <div className={stylesGrid.grid}>
        <ul className={stylesGrid.pros}>
          <li className={stylesGrid.li}>
            Количество ответов и&nbsp;дней доступа
          </li>
          <li className={stylesGrid.li}>
            Анкета с&nbsp;нуля и&nbsp;готовые шаблоны
          </li>
          <li className={stylesGrid.li}>Сложная логика опроса</li>
          <li className={stylesGrid.li}>Отображение результатов без excel</li>
          <li className={stylesGrid.li}>
            UTM-метки в&nbsp;ссылке на&nbsp;опрос
          </li>
          <li className={stylesGrid.li}>Динамическая логика ответов</li>
          <li className={stylesGrid.li}>Без логотипа в&nbsp;опросах</li>
          <li className={stylesGrid.li}>Отправка писем</li>
        </ul>
        <div className={`${stylesGrid.xsTitle} ${stylesGrid.title}`}>
          <p className={`${stylesGrid.table__header} ${stylesGrid.letter}`}>
            XS
          </p>
          <p>
            Бесплатный доступ, чтобы запускать небольшие опросы от&nbsp;случая
            к&nbsp;случаю
          </p>
        </div>
        <ul className={stylesGrid.xsUl}>
          <li className={`${stylesGrid.li} ${stylesGrid.textCenter}`}>
            До&nbsp;50&nbsp;ответов на&nbsp;30&nbsp;дней
          </li>
          <li className={`${stylesGrid.li} ${stylesGrid.positive}`} />
          <li className={`${stylesGrid.li} ${stylesGrid.positive}`} />
          <li className={`${stylesGrid.li} ${stylesGrid.positive}`} />
          <li className={`${stylesGrid.li} ${stylesGrid.negative}`} />
          <li className={`${stylesGrid.li} ${stylesGrid.negative}`} />
          <li className={`${stylesGrid.li} ${stylesGrid.negative}`} />
          <li className={`${stylesGrid.li} ${stylesGrid.negative}`} />
        </ul>
        <div className={`${stylesGrid.mTitle} ${stylesGrid.title}`}>
          <p className={`${stylesGrid.table__header} ${stylesGrid.letter}`}>
            M
          </p>
          <p className={stylesGrid.table__header}>
            Доступ на&nbsp;2&nbsp;месяца, чтобы начать проводить опросы
            регулярно
          </p>
        </div>
        <ul className={stylesGrid.mUl}>
          <li className={`${stylesGrid.li} ${stylesGrid.textCenter}`}>
            <span>До&nbsp;500 ответов на&nbsp;60&nbsp;дней</span>
          </li>
          <li className={`${stylesGrid.li} ${stylesGrid.positive}`} />
          <li className={`${stylesGrid.li} ${stylesGrid.positive}`} />
          <li className={`${stylesGrid.li} ${stylesGrid.positive}`} />
          <li className={`${stylesGrid.li} ${stylesGrid.positive}`} />
          <li className={`${stylesGrid.li} ${stylesGrid.textCenter}`}>
            Май 2021
          </li>
          <li className={`${stylesGrid.li} ${stylesGrid.negative}`} />
          <li className={`${stylesGrid.li} ${stylesGrid.negative}`} />
        </ul>
        <div className={`${stylesGrid.lTitle} ${stylesGrid.title}`}>
          <p className={`${stylesGrid.table__header} ${stylesGrid.letter}`}>
            L
          </p>
          <p className={stylesGrid.table__header}>
            Доступ на&nbsp;год, чтобы постоянно собирать обратную связь
            и&nbsp;не&nbsp;думать о&nbsp;лимитах
          </p>
        </div>
        <ul className={stylesGrid.lUl}>
          <li className={`${stylesGrid.li} ${stylesGrid.textCenter}`}>
            <span>До&nbsp;10&nbsp;000 ответов на&nbsp;365 дней</span>
          </li>
          <li className={`${stylesGrid.li} ${stylesGrid.positive}`} />
          <li className={`${stylesGrid.li} ${stylesGrid.positive}`} />
          <li className={`${stylesGrid.li} ${stylesGrid.positive}`} />
          <li className={`${stylesGrid.li} ${stylesGrid.positive}`} />
          <li className={`${stylesGrid.li} ${stylesGrid.textCenter}`}>
            Май 2021
          </li>
          <li className={`${stylesGrid.li} ${stylesGrid.textCenter}`}>
            Май 2021
          </li>
          <li className={`${stylesGrid.li} ${stylesGrid.textCenter}`}>
            Июнь 2021
          </li>
        </ul>
        <div className={`${stylesGrid.xsBtn} ${stylesGrid.btnContainer}`}>
          <p className={stylesGrid.price}>0 руб.</p>
          <button type="button" className={mainStyles.button}>
            Создать опрос
          </button>
        </div>
        <div className={`${stylesGrid.mBtn} ${stylesGrid.btnContainer}`}>
          <p className={stylesGrid.price}>4 000 руб.</p>
          <p className={stylesGrid.monthPrice}>2000 руб./месяц</p>
          <button
            type="button"
            className={`${mainStyles.button} ${stylesGrid.button_highlighted}`}
          >
            Оставить заявку
          </button>
        </div>
        <div className={`${stylesGrid.lBtn} ${stylesGrid.btnContainer}`}>
          <p className={stylesGrid.price}>20 000 руб.</p>
          <p className={stylesGrid.monthPrice}>1667 руб./месяц</p>
          <button type="button" className={mainStyles.button}>
            Оставить заявку
          </button>
        </div>
      </div>
      <IndividualPlan
        title="Индивидуальный"
        terms="Оставьте заявку, если вам нужен большой объем, API или готовая интеграция. Стоимость рассчитаем исходя из ваших задач."
        buttonName="Оставить заявку"
      />
    </>
  );
}
