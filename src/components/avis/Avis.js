import React from 'react'
import './avis.css'

function Avis() {
  return (
    <div className='avis'>
        <div className="contente-av">
            
           <div className="title-av">
           <h2>Les avis et commentaires </h2>
           </div>

           <div className="block-av">
               <div className="b-com">
                   <div className="user-com">
                    <h4 className='name'>UserName</h4> 
                   <span className='star'>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star"></i></span>
                   </div>
                   
                   <div className="txt-com">
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, 
                           amet necessitatibus alias corporis fugit unde quaerat atque 
                           esse laborum, debitis minus dolorum aliquid, officiis expedita 
                           quam ratione. In, quod consequatur.</p>
                   </div>
               </div>
               <div className="next-btn"><i class="fa-solid fa-angle-right"></i></div>
               <div className="prev-btn"><i class="fa-solid fa-angle-left"></i></div>
           </div>
        </div>
      
    </div>
  )
}

export default Avis
