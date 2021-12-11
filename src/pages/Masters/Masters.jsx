import React from 'react';
import './Masters.scss'
import browing from '../../images/browing.jpeg'
import visager from '../../images/visager.jpeg'
import hairdress from '../../images/hairdress.jpeg'
import cosmetolog from '../../images/cosmetolog.jpeg'
import nailer from '../../images/nailer.jpeg'

const Masters = () => {
    return (
        <div className='master-container'>
            <h1>Мастер бровист</h1>
            <div className="master-card">
                
                <div className="photo">
                    <img className='photo-img' src={browing} alt=""/>
                </div>
                <div className="resume">
                    <h2>Бровисива Анастасия </h2>
                    <p><b>Опыт работы</b>: 2 года </p>
                    <span><b>Образование</b>: <ol>
                        <li>Курс опрппд</li>
                        <li>Курс бровист</li>
                        <li>Повышение квалификации</li>
                        </ol> </span>
                </div>
            </div>
{/* ------------------------------------------- */}
            <h1>Парикмахер</h1>
            <div className="master-card">
                
                <div className="photo">
                    <img className='photo-img' src={hairdress} alt=""/>
                </div>
                <div className="resume">
                    <h2>Ильина Ильина</h2>
                    <p><b>Опыт работы</b>: 5 лет </p>
                    <span><b>Образование</b>: <ol>
                        <li>Колледж парик исскуства</li>
                        <li>Курс бровист</li>
                        <li>Повышение квалификации</li>
                        </ol> </span>
                </div>
            </div>
        

        {/* ------------------------------------------- */}
        <h1>Мастер маникюра</h1>
            <div className="master-card">
                
                <div className="photo">
                    <img className='photo-img' src={nailer} alt=""/>
                </div>
                <div className="resume">
                    <h2>Аладиновна Аладина</h2>
                    <p><b>Опыт работы</b>: 7 лет </p>
                    <span><b>Образование</b>: <ol>
                        <li>Колледж маник исскуства</li>
                        <li>Курс маникюр</li>
                        <li>Курс идеальное покрытие</li>
                        <li>Повышение квалификации</li>
                        </ol> </span>
                </div>
            </div>


            {/* ------------------------------------------- */}
            <h1>Визажист</h1>
            <div className="master-card">
                
                <div className="photo">
                    <img className='photo-img' src={visager} alt=""/>
                </div>
                <div className="resume">
                    <h2>Ильина Ильина</h2>
                    <p><b>Опыт работы</b>: 5 лет </p>
                    <span><b>Образование</b>: <ol>
                        <li>Колледж парик исскуства</li>
                        <li>Курс бровист</li>
                        <li>Повышение квалификации</li>
                        </ol> </span>
                </div>
            </div>
              {/* ------------------------------------------- */}
              <h1>Косметолог</h1>
            <div className="master-card">
                
                <div className="photo">
                    <img className='photo-img' src={cosmetolog} alt=""/>
                </div>
                <div className="resume">
                    <h2>Ильина Ильина</h2>
                    <p><b>Опыт работы</b>: 5 лет </p>
                    <span><b>Образование</b>: <ol>
                        <li>Колледж парик исскуства</li>
                        <li>Курс бровист</li>
                        <li>Повышение квалификации</li>
                        </ol> </span>
                </div>
            </div>
        </div>
    );
};

export default Masters;