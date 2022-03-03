import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Accueil from './components/pageAccueil/Accueil'
import Artisan from './components/pageArtisan/Artisan'

function App() {
  return (
    <>
    <BrowserRouter> 
    <Routes>
    <Route path="/" element={<Accueil/>}></Route>
    <Route path="/artisan" element={<Artisan/>}></Route>

    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
