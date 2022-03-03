import React from 'react'
import './navbar.css' 

function Navbar() {
  return (
      <>
  
      <nav className='navbar navbar-expand-lg'>
        <div className="container-fluid ">
            <div className="row">
        <a className="navbar-brand" href="#">TopBrico</a>
        <ul className="navbar-nav liste">
            <li className="items btn-propo">Proposer un service</li>
            <li className="items btn-insc">S'inscrire</li>
            <li className="items btn-conn">Connexion</li>
        </ul>
        </div>
        </div>
    </nav>
      </>
    
  )
};

export default Navbar;