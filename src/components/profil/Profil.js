import React from 'react'
import'./profil.css'
import plom from '../../img/sanitaire.jpg'


function Profil() {
  return (
    <div className='profil'>
      <div className="container">
        <div className="content-profil">
          <div className="realisation-art">
          <div className=" box cont-real">
            <img src={plom} alt="" />
          </div>
            
          </div>
          <div className="profil-art">
            <ul>
              <li> <h3>Plombier</h3></li>
              <li> <h2>Nom Prénom</h2></li>
              <li> <span className='star'>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star"></i></span></li>
              <li> <p>Descriprtion Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Reprehenderit facere quaerat laudantium dolorum unde vitae quibusdam. 
                Laboriosam ducimus exercitationem quidem accusantium ad provident natus, 
                dolores harum soluta, ipsum cupiditate consequatur.</p> 
            </li>
            </ul>
            <div className="g-btn"> 
            <button className='btn-insc'>Contacter</button>
            <button className='btn-propo'> Commenter</button>
            </div>
           
          </div>
        </div>
        <div className="content-avis">
          <div className="avis-title">
            <h3>Les avis et commentaires</h3>
          </div>
          <div className="list-com">
          <div className="block-avis">
            <span className='star'>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star"></i>
            </span>
            <h5>userName</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
               sit esse quidem, autem recusandae, fugit unde earum, deserunt 
              rem non optio a exercitationem similique iusto culpa ipsam eligendi 
              temporibus odit?</p>
          </div>
        

          </div>
        </div>
         </div>
         </div>
  )
}

export default Profil