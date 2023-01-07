import React, { useEffect } from 'react'
import '../styles/css/planComponentSmall.css'
import '../styles/css/planComponentMedium.css'
import '../styles/css/main.css'

const IndividualPlan = ({title, terms, button_name}) => {
    return(
        <div className="plan__container personal">
            <div className="plan__title-absolute">
                <span className="circle"></span>
                <p>{title}</p>
            </div>
            <div className='plan__terms'>
                <p>
                    {terms}
                </p>
            </div>
            <div className="plan__footer">
                <button className="button">{button_name}</button>
            </div>
        </div>
    )
}


export default function PlanComponent({title, title_letter, pros_list, price, price_month, terms, button_name}) {

    useEffect(()=>{
        document.getElementById('M').classList.add('button_highlighted')
    }, [])
    
  return (
    title_letter == '' ? <IndividualPlan title={title} terms={terms} button_name={button_name} /> :
    <div className="plan__container">
        <header className="plan__title">
            <span className='circle'>{title_letter}</span>
            <p>{title}</p>
        </header>
        <ul className='pros__list'>
            {
                pros_list.map((pros, index) => (
                    <li className='pros__item' key={index}>
                        <p>{pros}</p>
                    </li>
                ))
            }
        </ul>
        <footer className='plan__footer'>
            {
                price !== null && 
                <div className='plan__price'>
                    {price !== null && <p>{price} руб.</p>}
                    {price_month !== null && <p>{price_month} руб./месяц</p>}
                </div>
            }
            <button className='button' id={title_letter}>{button_name}</button>
        </footer>
    </div>
  )
}
