import React from 'react';
import nail from '../../images/nail.jpeg'
import brow from '../../images/brow.jpeg'
import cosmetology from '../../images/cosmetology.jpeg'
import hair from '../../images/hair.jpeg'
import './Services.scss'



const Services = () => {
    return (
        <div className='services'>
           <h1>Наши Услуги</h1>
           <div className="infoNail">
               <img src={nail} alt=""/>
               <div className='nail-desc'>
                   <h2>Маникюр</h2>
                   <div className='info-p'>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, animi.</p>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, praesentium ea accusamus totam esse quae dolorum doloribus blanditiis tenetur possimus tempore laboriosam cumque voluptatum incidunt labore aperiam ducimus dolor sapiente.</p>
                   </div>
   
               <ul>
                   <li>Качество</li>
                   <li>Стерильность</li>
                   <li>Гарантия</li>
                   <li>Новинки</li>
                   <li>Индивидуальный подход</li>
                   <li>Система лояльности</li>
               </ul>
               <button className='showPrice'>Посмотреть прайс</button>
               </div>
           </div>
{/* -------------------------------------------------// */}
           <div className="infoNail">
              
               <div className='nail-desc'>
                   <h2>Уход за бровями</h2>
                   <div className='info-p'>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, animi.</p>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, praesentium ea accusamus totam esse quae dolorum doloribus blanditiis tenetur possimus tempore laboriosam cumque voluptatum incidunt labore aperiam ducimus dolor sapiente.</p>
                   </div>
   
               <ul>
                   <li>Качество</li>
                   <li>Стерильность</li>
                   <li>Гарантия</li>
                   <li>Новинки</li>
                   <li>Индивидуальный подход</li>
                   <li>Система лояльности</li>
               </ul>
               <button className='showPrice'>Посмотреть прайс</button>
               </div>
               <img src={brow} alt=""/>
           </div>
{/* -------------------------------------------------// */}
           <div className="infoNail">
           <img className='img-cosmetology' src={cosmetology} alt=""/>
              <div className='nail-desc'>
                  <h2>Уход за бровями</h2>
                  <div className='info-p'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, animi.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, praesentium ea accusamus totam esse quae dolorum doloribus blanditiis tenetur possimus tempore laboriosam cumque voluptatum incidunt labore aperiam ducimus dolor sapiente.</p>
                  </div>
  
              <ul>
                  <li>Качество</li>
                  <li>Стерильность</li>
                  <li>Гарантия</li>
                  <li>Новинки</li>
                  <li>Индивидуальный подход</li>
                  <li>Система лояльности</li>
              </ul>
              <button className='showPrice'>Посмотреть прайс</button>
              </div>
              
          </div>
          {/* -------------------------------------------------// */}
          <div className="infoNail">
              
              <div className='nail-desc'>
                  <h2>Парикмахерские услуги</h2>
                  <div className='info-p'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, animi.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, praesentium ea accusamus totam esse quae dolorum doloribus blanditiis tenetur possimus tempore laboriosam cumque voluptatum incidunt labore aperiam ducimus dolor sapiente.</p>
                  </div>
  
              <ul>
                  <li>Качество</li>
                  <li>Стерильность</li>
                  <li>Гарантия</li>
                  <li>Новинки</li>
                  <li>Индивидуальный подход</li>
                  <li>Система лояльности</li>
              </ul>
              <button className='showPrice'>Посмотреть прайс</button>
              </div>
              <img src={hair} alt=""/>
          </div>
        </div>
    );
};

export default Services;