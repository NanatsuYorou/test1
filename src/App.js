import './App.css';
import './styles/css/main.css'
import PlanComponent from './components/PlanComponent';
import TableComponent from './components/TableComponent';
import { useEffect, useState } from 'react';


const plans = [
  {
    title: 'Доступ на 2 месяца, чтобы начать проводить опросы регулярно',
    title_letter: 'M',
    pros_list: ['До 500 ответов на 60 дней', 'Анкета с нуля и готовые шаблоны', 'Сложная логика опроса', 'Отображение результатов без excel', 'UTM-метки в ссылке на опрос', 'Динамическая логика ответов    (май 2021)'],
    price: '4 000',
    price_month: '2000',
    terms: null,
    button_name: 'Оставить заявку'
  },
  {
    title: 'Бесплатный доступ, чтобы запускать небольшие опросы от случая к случаю',
    title_letter: 'XS',
    pros_list: ['До 50 ответов на 30 дней', 'Анкета с нуля и готовые шаблоны', 'Сложная логика опроса', 'Отображение результатов без excel'],
    price: '0',
    price_month: null,
    terms: null,
    button_name: 'Создать опрос'
  },
  {
    title: 'Доступ на год, чтобы постоянно собирать обратную связь и не думать о лимитах',
    title_letter: 'L',
    pros_list: ['До 10 000 ответов на 365 дней', 'Анкета с нуля и готовые шаблоны', 'Сложная логика опроса', 'Отображение результатов без excel', 'UTM-метки в ссылке на опрос', 'Динамическая логика ответов    (май 2021)', 'Без логотипа в опросах (май 2021)', 'Отправка писем (июнь 2021)'],
    price: "20 000",
    price_month: '1667',
    terms: null,
    button_name: 'Оставить заявку'
  },
  {
    title: 'Индивидуальный',
    title_letter: '',
    pros_list: [],
    price: null,
    price_month: null,
    terms: 'Оставьте заявку, если вам нужен большой объем, API или готовая интеграция. Стоимость рассчитаем исходя из ваших задач.',
    button_name: 'Оставить заявку'
  },
]

function App() {

  const [width, setWidth] = useState(window.innerWidth)

  const breakpoint = 1019

  useEffect(()=>{
    const handleResizeWindow = () => setWidth(window.innerWidth)

    window.addEventListener('resize', handleResizeWindow)

    return() => {
      window.removeEventListener('resize', handleResizeWindow)
    }
  }, [])

  return (
    <div className='wrapper'>
      <h1>Тарифы</h1>

      {
        width > breakpoint ? 
        <TableComponent /> :
        <ul className='plans__list'>
        {
          plans.map((plan, index) => (
            <li className='plans__item'>
              <PlanComponent key={index} {...plan} />
            </li>
          ))
        }
        </ul>

      }
    </div>
  );
}

export default App;
