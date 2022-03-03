import React from 'react'
import './intro.css'



function Intro() {
  return (
    <div className=" intro">
 <div className='search'>
        <div className="center-wrapper">
          <div className="i-txt">
            <h1 className='title'>
              Pour tous vos travaux de rénovation, aménagement, électricité...
            </h1>
          </div>
          <div className="i-search">
            <form className="i-form">
              <select
                className="select-artisan"
                name="artisan"
                id="artisan-select"
              >
                <option value="">Vous avez besoin ?</option>
                <option value="Carrelage">Carrelage</option>
                <option value="Carrelage">Carrelage</option>
                <option value="Carrelage">Carrelage</option>
                <option value="Carrelage">Carrelage</option>
                <option value="Carrelage">Carrelage</option>
              </select>
              <select className="select-ville" name="ville" id="ville-select">
                <option value="">Ville ?</option>
                <option value="Choisy-le-Roi">Choisy-le-Roi</option>
                <option value="Choisy-le-Roi">Choisy-le-Roi</option>
                <option value="Choisy-le-Roi">Choisy-le-Roi</option>
                <option value="Choisy-le-Roi">Choisy-le-Roi</option>
              </select>
              <button className="btn-search" type="submit">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
        </div>
        </div>
      </div>

     
  )
}

export default Intro
