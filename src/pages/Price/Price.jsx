import React from 'react';
import './Price.scss'

const Price = () => {
    return (
        <div className='container-price'>
            <h1>HAIR</h1>
           <div className="hairPrice">
               
               <div>
               <h2>Cut</h2>
            <p><b>short : 500</b></p>
            <p><b>medium : 700</b></p>
            <p><b>long : 900</b></p>
            </div>
            <div>
            <h2>Dye</h2>
            <p><b>short : 1500</b></p>
            <p><b>medium : 1700</b></p>
            <p><b>long : 1900</b></p>
            </div>
            <div>
            <h2>Bleach</h2>
            <p><b>short : 2500</b></p>
            <p><b>medium : 2700</b></p>
            <p><b>long : 2900</b></p>
            </div>
           </div>
           {/* ---------------------------------- */}
           <h1>NAIL</h1>
           <div className="hairPrice">
           <div>
               <h2>Polish</h2>
            <p><b>short : 500</b></p>
            <p><b>medium : 700</b></p>
            <p><b>long : 900</b></p>
            </div>
            <div>
            <h2>Nail Extension</h2>
            <p><b>short : 1500</b></p>
            <p><b>medium : 1700</b></p>
            <p><b>long : 1900</b></p>
            </div>
            <div>
            <h2>Design</h2>
            <p><b>short : 2500</b></p>
            <p><b>medium : 2700</b></p>
            <p><b>long : 2900</b></p>
            </div>
           </div>
               {/* ---------------------------------- */}
               <h1>MAKE-UP</h1>
               <div className="hairPrice">
           <div>
               <h2>Nude</h2>
            <p><b>make-up : 2500</b></p>
           
            </div>
            <div>
            <h2>Evening</h2>
            <p><b>make-up : 3500</b></p>
            </div>
            <div>
            <h2>Extra</h2>
            <p><b>make-up : 4000</b></p>
            </div>
           </div>
               {/* ---------------------------------- */}
               <h1>COSMETOLOGY</h1>
               <div className="hairPrice">
           <div>
               <h2>Skin-care</h2>
            <p><b>forehead : 500</b></p>
            <p><b>face : 700</b></p>
            <p><b>face + neck : 900</b></p>
            </div>
            <div>
            <h2>Hyaluronic Acid</h2>
            <p><b>forehead : 2500</b></p>
            <p><b>face : 3700</b></p>
            <p><b>face + neck : 4500</b></p>
            </div>
            <div>
            <h2>Botox</h2>
            <p><b>forehead : 3300</b></p>
            <p><b>face : 4500</b></p>
            <p><b>face + neck : 5000</b></p>
            </div>
           </div>
        </div>
    );
};

export default Price;