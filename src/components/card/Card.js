import React from 'react'
import'./card.css'
import data from "../../data_icon"


function Card() {

  return (
      <>
      <div className='card'>
        <div className="card-title"> 
        <h2>Explorer les services </h2>
        </div>
        <div className='card-liste'>
          <div className="gr-card"> 
                {
                  data.map((service)=>{
                    return <div className="card-body">
                    <span className='cercle' style={{"backgroundColor":service.color}} >
                      <img className='artisan-ico' src={service.icon}/>
                    </span>
                    <div className='txt-card'>
                      <h4 className="card-subtitle mb-2 ">{service.service} </h4>
                      <p className="card-text">{service.num} Artisans </p>
                    </div>
                  </div> 
                  })
                }

              </div>
          </div>
        </div> 
      
      </>
   
  )
}

export default Card