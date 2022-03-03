import React from 'react'
import './footer.css'
import logo from '../../img/logo.png'

export default function Footer() {
  return (
    <footer>
    <div className="footer-dist">
    <div className="footer-left">
        <img className='logo-footer' src={logo} alt="" />
        <p className="footer-about">
            1er Annuaire electronique des artisans et bricoleurs au Maroc.</p>
            <div className="footer-icons">
            <a href="#" className="fa-brands fa-facebook-square"></a>
            <a href="#" className="fa-brands fa-instagram-square"></a>
            <a href="#" className="fa-brands fa-linkedin"></a>
            <a href="#" className="fa-brands fa-twitter-square"></a>
        </div>
    </div>

    <div className="footer-center">
          <ul>
              <li><a href="#">Accueil</a> </li>
              <li><a href="#">Comment ça marche</a></li>
              <li><a href="#">Nos services</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contacter</a></li>
          </ul>
    </div>
    </div>
    <p className="footer-copyright">Copyright © 2022 &nbsp; <strong> TopBrico </strong> &nbsp; All rights reserved</p>
</footer>
  )
}
