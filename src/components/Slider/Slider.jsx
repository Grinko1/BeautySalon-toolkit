import React, { useState } from 'react';
import './Slider.scss'
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa'
import wellaNorm from '../../images/wellNorm.jpeg'

const Slider = () => {
  const sliderData = 
  { slides:[
    {
    image: 'data:image/png;base64,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'
  },
{
  image:'https://cosmy.com.ua/image/catalog/3Lab/jvifjierfjdsfijdg.png'
},
{
  image:'https://logowik.com/content/uploads/images/394_loreal.jpg'
}, 
{
  image: 'https://logowik.com/content/uploads/images/136_wellaprofessionals.jpg'
}]}
const{slides} = sliderData
const [current, setCurrent] = useState(0)
const length =slides.length

const nextSlide = () => {
  setCurrent(current === length - 1 ? 0 : current + 1)
}

const prevSlide = () => {
  setCurrent(current === 0 ? length - 1 : current - 1)
}
console.log(current);

if(!Array.isArray(slides) || slides.length <= 0) {
  return null
}
  return (
     <div className='containerSlider'>
    <div className='slider'>
      <FaAngleLeft className='left' onClick={prevSlide}/>
      <FaAngleRight className='right' onClick={nextSlide}/>
      {
        slides.map((slide, index) => {
          return (
            <div className={index === current ? 'activeSlide' : 'slide'} key={index}>
              {
                index === current && (<img src={slide.image}  alt={'slider'} className='image-slide'/>)
              }
              
            </div>
          )
          
        })
      }
    </div>
    </div>
  );
};

export default Slider;