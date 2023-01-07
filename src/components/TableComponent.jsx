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
                <p className='table__header'>Бесплатный доступ, чтобы запускать небольшие опросы от&nbsp;случая к&nbsp;случаю</p>
            </th>
            <th colSpan="2">
                <p className='table__header letter'>M</p>
                <p className='table__header'>Доступ на&nbsp;2&nbsp;месяца, чтобы начать проводить опросы регулярно</p>
            </th>
            <th colSpan="2">
                <p className='table__header letter'>L</p>
                <p className='table__header'>Доступ на&nbsp;год, чтобы постоянно собирать обратную связь и&nbsp;не&nbsp;думать о&nbsp;лимитах</p>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="first">Количество ответов и&nbsp;дней доступа</td>
            <td colSpan="2">До&nbsp;50&nbsp;ответов на&nbsp;30&nbsp;дней</td>
            <td colSpan="2">До&nbsp;500 ответов на&nbsp;60&nbsp;дней</td>
            <td colSpan="2">До&nbsp;10&nbsp;000 ответов на&nbsp;365 дней</td>
        </tr>
        <tr>
            <td className="first">Анкета с&nbsp;нуля и&nbsp;готовые шаблоны</td>
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
            <td className="first">UTM-метки в&nbsp;ссылке на&nbsp;опрос</td>
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
            <td className="first">Без логотипа в&nbsp;опросах</td>
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
                    <p className='price'>0&nbsp;руб.</p>
                    <button  className='button'>Создать опрос</button>
                </div>
            </td>
            <td colSpan="2">
                <div className="btn__container">
                    <p className='price'>4&nbsp;000&nbsp;руб.</p>
                    <p className='price month'>2&nbsp;000&nbsp;руб.</p>
                    <button  className='button button_highlighted'>Оставить заявку</button>
                </div>
            </td>
            <td colSpan="2">
                <div className="btn__container">
                    <p className='price'>20&nbsp;000&nbsp;руб.</p>
                    <p className='price month'>1667 руб./месяц</p>
                    <button className='button'>Оставить заявку</button>
                </div>
            </td>
        </tr>
    </tbody>
  </table>
  )
}
