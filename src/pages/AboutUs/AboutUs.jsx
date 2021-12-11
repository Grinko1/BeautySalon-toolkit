import React, { useState } from 'react';
import kerastase from '../../images/kerastase.png'
import wellNorm from '../../images/wellNorm.jpeg'
import loreal  from '../../images/loreal.jpeg'
import chi  from '../../images/chi.png'
import brasilian from '../../images/brasilian.png'
import './AboutUs.scss'





const AboutUs = () => {
  
  
    return (
        <div className='containerUs'>
          <h1>BEAUTY studio</h1>
          <h2>Регулярное обучение мастеров</h2>
          <div className="study">
              
              <img className='photoStudy' src="https://avatars.mds.yandex.net/get-altay/1969018/2a0000016eea71a69ab044f1484b4983e6fb/XXL" alt=""/>
              <img className='photoStudy' src="https://14.img.avito.st/640x480/11200235414.jpg" alt=""/>
              <img className='photoStudy' src="https://avatars.mds.yandex.net/get-altay/4441482/2a0000017912b24ffa11f57d8ef11bb07794/XXL" alt=""/>
          </div>
          <h2>Только премиальные бренды</h2>
        <div className='brandsDiv'>
            <img className='brands' src={kerastase} alt=""/>
            <img className='brands'  src={wellNorm} alt=""/>
            <img  className='brands' src={loreal} alt=""/>
            <img className='brands'  src={chi} alt=""/>
            <img className='brands'  src={brasilian} alt=""/>
        </div>
       
        </div>
    );
};

export default AboutUs;