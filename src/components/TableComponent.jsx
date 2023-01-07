import React from 'react'
import '../styles/css/tableComponent.css'

export default function TableComponent() {
  return (
    <table>
    <thead>
        <tr>
            <th className="first"></th>
            <th colSpan="2">
                <p className='table__header letter'>XS</p>
                <p className='table__header'>Бесплатный доступ, чтобы запускать небольшие опросы от случая к случаю</p>
            </th>
            <th colSpan="2">
                <p className='table__header letter'>M</p>
                <p className='table__header'>Доступ на 2 месяца, чтобы начать проводить опросы регулярно</p>
            </th>
            <th colSpan="2">
                <p className='table__header letter'>L</p>
                <p className='table__header'>Доступ на год, чтобы постоянно собирать обратную связь и не думать о лимитах</p>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="first">Количество ответов и дней доступа</td>
            <td colSpan="2">До 50 ответов на 30 дней</td>
            <td colSpan="2">До 500 ответов на 60 дней</td>
            <td colSpan="2">До 10 000 ответов на 365 дней</td>
        </tr>
        <tr>
            <td className="first">Анкета с нуля и готовые шаблоны</td>
            <td colSpan="2" className='positive'></td>
            <td colSpan="2" className='positive'></td>
            <td colSpan="2" className='positive'></td>
        </tr>
        <tr>
            <td className="first">Сложная логика опроса</td>
            <td colSpan="2" className='positive'></td>
            <td colSpan="2" className='positive'></td>
            <td colSpan="2" className='positive'></td>
        </tr>
        <tr>
            <td className="first">Отображение результатов без excel</td>
            <td colSpan="2" className='positive'></td>
            <td colSpan="2" className='positive'></td>
            <td colSpan="2" className='positive'></td>
        </tr>
        <tr>
            <td className="first">UTM-метки в ссылке на опрос</td>
            <td colSpan="2" className='negative'></td>
            <td colSpan="2" className='positive'></td>
            <td colSpan="2" className='positive'></td>
        </tr>
        <tr>
            <td className="first">Динамическая логика ответов</td>
            <td colSpan="2" className='negative'></td>
            <td colSpan="2">Май 2021</td>
            <td colSpan="2">Май 2021</td>
        </tr>
        <tr>
            <td className="first">Без логотипа в опросах</td>
            <td colSpan="2" className='negative'></td>
            <td colSpan="2" className='negative'></td>
            <td colSpan="2">Май 2021</td>
        </tr>
        <tr>
            <td className="first">Отправка писем</td>
            <td colSpan="2" className='negative'></td>
            <td colSpan="2" className='negative'></td>
            <td colSpan="2">Июнь 2021</td>
        </tr>
        <tr>
            <td className="first"></td>
            <td colSpan="2">
                <div className="btn__container">
                    <p className='price'>0 руб.</p>
                    <button  className='button'>Создать опрос</button>
                </div>
            </td>
            <td colSpan="2">
                <div className="btn__container">
                    <p className='price'>4 000 руб.</p>
                    <p className='price month'>2 000 руб.</p>
                    <button  className='button button_highlighted'>Оставить заявку</button>
                </div>
            </td>
            <td colSpan="2">
                <div className="btn__container">
                    <p className='price'>20 000 руб.</p>
                    <p className='price month'>1667 руб./месяц</p>
                    <button className='button'>Оставить заявку</button>
                </div>
            </td>
        </tr>
    </tbody>
  </table>
  )
}
