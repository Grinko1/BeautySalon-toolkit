import React from 'react';
import salon from '../../images/salon.jpeg'
import './Home.scss'
import { FaHeart,FaPlus, FaFire, FaMapMarkerAlt, FaMobileAlt} from 'react-icons/fa'
import brow from '../../images/brow.jpeg'
import cosmetology from '../../images/cosmetology.jpeg'
import hair from '../../images/hair.jpeg'
import nail from '../../images/nail.jpeg'
import us from '../../images/us.jpeg'

 
const Home = () => {
    return (
        <div className='home-container'>
            <div className='salon'>
                <div>
                <img className='salonImg' src={salon} alt=""/>
                </div>
                <div>
                <h3>У нас новый интерьер! </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed consectetur inventore assumenda itaque dolore facilis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti consequuntur, at quod magnam doloribus error cupiditate eum qui sit ad.</p>

                <p><FaMapMarkerAlt/> Москва, Сколково,  Игнатьевское,17</p>
                <p><FaMobileAlt/>88005553535N</p>
                </div>
                
        
            </div>
            <h1 className='header-service'>Услуги</h1>
            <div className='cardSevices'>
                
                <div className="card">
                    <img src={nail} alt=""/>
                    <button>NAIL</button>
                </div>
                <div className="card">
                    <img src={hair} alt=""/>
                    <button>HAIR</button>
                </div>
                <div className="card">
                    <img src={cosmetology} alt=""/>
                    <button>COSMETOLOGY</button>
                </div>
                <div className="card">
                    <img src={brow} alt=""/>
                    <button>BROW</button>
                </div>

            </div>
           
                <h1>О НАС</h1>
                <div className="infoAbouyUs">
                    <img src={us} alt=""/>
                    <div className='aboutUs-p'>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, distinctio quis! Incidunt esse maiores amet rerum ducimus exercitationem, architecto inventore fugiat, maxime sunt aliquid animi ipsam consectetur minus explicabo, odio ad sit doloremque nostrum quia beatae. Officiis ducimus perferendis voluptas? Nemo officia alias cum nam eum quasi modi.</p>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est illum aliquam at dicta aut, voluptatibus deleniti, necessitatibus possimus magni nulla magnam beatae totam! Enim ipsa eius, odio beatae repellendus tempore.</p>
                    
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo ea nemo earum voluptate, quod illo explicabo ipsam iusto.</p>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sequi, suscipit doloremque laboriosam a atque sunt architecto tenetur nam possimus facere officia culpa ut modi eveniet. Praesentium alias nihil et, voluptatum consectetur ipsum provident!</p>
                   <div className='name'><FaHeart/> <b>BEAUTY</b> studio</div>
                    </div>
                </div>







            <h1 className='header-service'>Гарантия</h1>
            <div className="garanteeBloack">
                <div className="garantee">
                  <div className='iconG'>
                  <FaPlus size='120px' color='lightgrey'/>
                  </div>
                  <p>100% стерильность и безопастность</p>
                 
                      

                  
                </div>
                <div className="garantee">
                        <div className='iconG'>
                      < FaHeart  size='120px'color='lightgrey'/>
                      </div>
                  <p>Только квалифицированные специалисты</p>
                 
                </div>
                <div className="garantee">
                 <div className='iconG'>
                  <FaFire size='120px' color='lightgrey'/>
                  </div>
                  <p>Премиум косметика </p>
        
                 

                </div>

            </div>

            Home
        </div>
    );
};

export default Home;