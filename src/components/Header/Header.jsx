import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'

const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>
           <div className="logo"> <b>BEAUTY</b> studio</div>
           </Link>
           <div className="servises">
               <Link to='/services'>
               <p>Услуги</p>
               </Link>
               <Link to='/masters'>
               <p>Мастера</p>
               </Link>
               <Link to='/price'>
               <p>Прайс</p>
               </Link>
               <Link to='/about-us'>
               <p>О нас</p>
               </Link>
               <span></span>
           </div>
        </div>

    );
};

export default Header;