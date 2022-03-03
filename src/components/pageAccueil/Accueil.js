import React from 'react'
import Navbar from '../navbar/Navbar'
import Intro from '../intro/Intro'
import Card from '../card/Card'
import Avis from '../avis/Avis'
import Footer from '../footer/Footer'

export default function Accueil() {
  return (
    <>
    < Navbar />
    <Intro />
    <Card/>
    <Avis/>
    <Footer/>
    </>
  )
}
