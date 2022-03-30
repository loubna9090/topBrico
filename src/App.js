import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Accueil from './components/pageAccueil/Accueil'
import Artisan from './components/pageArtisan/Artisan'
import PageAddArt from './components/pageAddArtisan/PageAddArt';

function App() {
  return (
    <>
    <BrowserRouter> 
    <Routes>
    <Route path="/" element={<Accueil/>}></Route>
    <Route path="/artisan" element={<Artisan/>}></Route>
    <Route path="/addartisan" element={<PageAddArt/>}></Route>

    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
