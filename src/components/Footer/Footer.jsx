import React from 'react';
import './Footer.scss'
import {FaInstagram, FaTiktok, FaWhatsapp, FaMobileAlt, FaEnvelope} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="social">
                <FaInstagram size='20px'/>
                <FaTiktok size='20px'/>
                <FaWhatsapp size='20px'/>
                <FaMobileAlt size='20px'/>
                <FaEnvelope size='20px'/>
               
            </div>
            <p className='tel'>88005553535</p>
            <p className='tel'>Москва, Сколково, Игнатьевское,17</p>

           
        </div>
    );
};

export default Footer;